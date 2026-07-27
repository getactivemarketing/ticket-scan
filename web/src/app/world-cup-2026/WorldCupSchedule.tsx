'use client';

import { useState } from 'react';
import Link from 'next/link';
import { worldCupVenues, worldCupSchedule, getScheduleDates, WorldCupMatch } from '@/data/worldcup';

type ScheduleView = 'date' | 'round';
type RoundFilter = 'all' | 'Group Stage' | 'Round of 32' | 'Round of 16' | 'Quarter-Final' | 'Semi-Final' | 'Third Place' | 'Final';

export default function WorldCupSchedule() {
  const [scheduleView, setScheduleView] = useState<ScheduleView>('date');
  const [selectedDate, setSelectedDate] = useState<string>('2026-06-11');
  const [selectedRound, setSelectedRound] = useState<RoundFilter>('all');

  const scheduleDates = getScheduleDates();

  const filteredMatches = scheduleView === 'date'
    ? worldCupSchedule.filter(m => m.date === selectedDate)
    : selectedRound === 'all'
      ? worldCupSchedule
      : worldCupSchedule.filter(m => m.round === selectedRound);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + 'T12:00:00');
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  };

  return (
    <div id="schedule" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-gray-900 text-center mb-4">
          Match Schedule
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Browse matches by date or tournament round. Schedule is preliminary and subject to change by FIFA.
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setScheduleView('date')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              scheduleView === 'date'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            By Date
          </button>
          <button
            onClick={() => setScheduleView('round')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              scheduleView === 'round'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            By Round
          </button>
        </div>

        {scheduleView === 'date' && (
          <div className="mb-8">
            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
              {scheduleDates.map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedDate === date
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {formatDate(date)}
                </button>
              ))}
            </div>
          </div>
        )}

        {scheduleView === 'round' && (
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {(['all', 'Group Stage', 'Round of 32', 'Round of 16', 'Quarter-Final', 'Semi-Final', 'Final'] as RoundFilter[]).map((round) => (
                <button
                  key={round}
                  onClick={() => setSelectedRound(round)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedRound === round
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {round === 'all' ? 'All Rounds' : round}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4">
          {filteredMatches.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No matches scheduled for this selection.
            </div>
          ) : (
            filteredMatches.slice(0, 20).map((match) => {
              const venue = worldCupVenues[match.venue];
              return (
                <div
                  key={match.id}
                  className="bg-gray-50 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4"
                >
                  <div className="flex-shrink-0 text-center sm:text-left sm:w-32">
                    <p className="text-sm text-gray-500">{formatDate(match.date)}</p>
                    <p className="font-bold text-green-600">{formatTime(match.time)} ET</p>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        match.round === 'Final' ? 'bg-yellow-100 text-yellow-800' :
                        match.round === 'Semi-Final' ? 'bg-brand/10 text-brand-dark' :
                        match.round === 'Quarter-Final' ? 'bg-blue-100 text-blue-800' :
                        match.round === 'Group Stage' ? 'bg-gray-100 text-gray-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {match.round}
                      </span>
                      {match.group && (
                        <span className="text-xs text-gray-500">Group {match.group}</span>
                      )}
                    </div>
                    <p className="font-bold text-gray-900">
                      {match.team1 && match.team2
                        ? `${match.team1} vs ${match.team2}`
                        : match.team1
                          ? `${match.team1} vs TBD`
                          : `Match ${match.matchNumber}`
                      }
                    </p>
                    <Link
                      href={`/world-cup-2026/${match.venue}`}
                      className="text-sm text-gray-600 hover:text-green-600"
                    >
                      {venue?.name}, {venue?.city}
                    </Link>
                  </div>
                  <div className="flex-shrink-0">
                    <Link
                      href={`/dashboard?keyword=world+cup+${venue?.city.toLowerCase().replace(' ', '+')}`}
                      className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                    >
                      Find Tickets
                    </Link>
                  </div>
                </div>
              );
            })
          )}
          {filteredMatches.length > 20 && scheduleView === 'round' && (
            <p className="text-center text-gray-500 text-sm">
              Showing first 20 matches. Use date view to see all matches.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
