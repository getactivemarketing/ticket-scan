#!/usr/bin/env bash
# Reports the marketing agents' state to the Content Command Center.
#
# Source: the newest marketing-agents/logs/daily-*.log by modification time. Not today's dated
# file: on any morning before the 06:00 job runs, or any day it fails to start, that file does not
# exist. (The launchd StandardOutPath file mirrors the same stream but is not what run-daily.sh
# writes on purpose, so the dated logs are the source of truth.)
#
# One dated file can hold several runs, so the summary comes from the LAST pair of
# "AGENT FAILURES: N" and "Finished: ..." lines. Both patterns are anchored to the start of the line:
# agents print prose that mentions those words mid-sentence.
#
# States claimed: ok, attention, down. Never idle/stale/never/unreadable (center-derived or unused).
#   ok         last completed run had 0 failures
#   attention  last completed run had failures, OR the newest log has no completed run to judge
#              (could be a run in progress, so it is not claimed down)
#   down       no daily log at all, OR the newest log is older than DOWN_AFTER_SECONDS. This reporter
#              keeps emitting fresh files even when the job is dead, so the center's staleness check
#              cannot see a dead job; the reporter has to say so. 172800s (two days): the job runs
#              daily and a healthy log is at most ~24h old (a few hours more if the Mac woke late), so
#              one missed run is left to the center's own lateness check (as_of ages past the 24h
#              cadence) and down means at least two runs in a row are missing.
#
# as_of comes from the log's own Finished line, not the clock, so a dead job reads as late.
set -euo pipefail

LOG_DIR="${LOG_DIR:-$(cd "$(dirname "$0")/.." && pwd)/logs}"
STATUS_DIR="${STATUS_DIR:-/Volumes/Samir_Ext/Sites/command-center/status}"
CADENCE_SECONDS=86400
DOWN_AFTER_SECONDS=172800

now_iso() { date -u '+%Y-%m-%dT%H:%M:%SZ'; }

newest="$(ls -t "$LOG_DIR"/daily-*.log 2>/dev/null | head -n 1 || true)"

state="attention"
headline=""
needs="[]"
as_of=""

# Housekeeping: a SIGKILL can leave a hidden temp file behind. The center only reads *.json so it is
# harmless, but sweep ones over an hour old so they do not accumulate.
if [ -d "$STATUS_DIR" ]; then
  find "$STATUS_DIR" -maxdepth 1 -type f -name '.ticketscan.agents.*' -mmin +60 -exec rm -f {} + 2>/dev/null || true
fi

mtime=""
age=0
if [ -n "$newest" ]; then
  mtime="$(stat -f %m "$newest")"
  age=$(( $(date +%s) - mtime ))
fi

if [ -z "$newest" ]; then
  state="down"
  headline="No daily log found, the job may not have run"
  needs='[{"id":"no-daily-log","text":"No daily-*.log exists in the marketing-agents logs folder"}]'
  as_of="$(now_iso)"
elif [ "$age" -gt "$DOWN_AFTER_SECONDS" ]; then
  state="down"
  headline="Newest daily log is $(( age / 86400 )) days old, the job looks dead"
  needs='[{"id":"job-not-running","text":"No daily log has been written for over two days"}]'
  as_of="$(now_iso)"
else
  mtime_iso="$(date -u -r "$mtime" '+%Y-%m-%dT%H:%M:%SZ')"

  # One pass over the whole file (a few MB). A tail window could cut a run in half.
  pair="$(awk '
    /^AGENT FAILURES: [0-9]+[ \t\r]*$/ { f = $3; fl = NR }
    /^Finished: / { d = $0; dl = NR }
    END { if (fl > 0 && dl > 0 && fl < dl) { sub(/^Finished: /, "", d); sub(/\r$/, "", d); sub(/\r$/, "", f); print f "|" d } }
  ' "$newest")"

  failures=""
  as_of=""
  if [ -n "$pair" ]; then
    failures="$(printf '%s' "${pair%%|*}" | tr -d '\r')"
    finished="${pair#*|}"
    # A count that is not 1-6 plain digits cannot be compared safely, so treat it as unreadable.
    printf '%s' "$failures" | grep -Eq '^[0-9]{1,6}$' || failures=""
  fi
  if [ -n "$failures" ]; then
    # Drop the zone abbreviation (%Z is unreliable in BSD date) and read the time in local time,
    # which is the zone the log was written in. Options must precede the operand on BSD date.
    naive="$(printf '%s' "$finished" | awk '{ print $1, $2, $3, $4, $6 }')"
    epoch="$(date -j -f '%a %b %e %T %Y' "$naive" '+%s' 2>/dev/null || true)"
    # A truncated Finished line yields no epoch: that is not a completed run either.
    if [ -n "$epoch" ]; then
      as_of="$(date -u -r "$epoch" '+%Y-%m-%dT%H:%M:%SZ')"
    else
      failures=""
    fi
  fi

  if [ -z "$failures" ]; then
    headline="Newest daily log has no completed run"
    needs='[{"id":"no-completed-run","text":"The newest daily log has no AGENT FAILURES summary followed by a Finished line"}]'
    as_of="$mtime_iso"
  else
    if [ "$failures" -eq 0 ]; then
      state="ok"
      headline="Last run finished with 0 agent failures"
    else
      headline="${failures} agent failures on the last run"
      needs="[{\"id\":\"agent-failures\",\"text\":\"${failures} agents failed on the last daily run\"}]"
    fi
  fi
fi

mkdir -p "$STATUS_DIR"
target="$STATUS_DIR/ticketscan.agents.json"
# The temp name must not end in .json: the center only opens .json files, so a half-written file
# is never parsed. Same directory so the mv is an atomic rename.
temp="$(mktemp "$STATUS_DIR/.ticketscan.agents.XXXXXX")"
trap 'rm -f "$temp"' EXIT
cat > "$temp" <<JSON
{
  "channel": "agents",
  "venture": "ticketscan",
  "state": "$state",
  "headline": "$headline",
  "as_of": "$as_of",
  "cadence_seconds": $CADENCE_SECONDS,
  "needs_you": $needs
}
JSON
mv "$temp" "$target"
echo "$state: $headline"
