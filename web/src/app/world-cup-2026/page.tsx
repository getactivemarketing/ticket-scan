'use client';

import { useState } from 'react';
import Link from 'next/link';
import { worldCupVenues, worldCupCities, featuredTeams, worldCupSchedule, getScheduleDates, WorldCupMatch } from '@/data/worldcup';

type ScheduleView = 'date' | 'round';
type RoundFilter = 'all' | 'Group Stage' | 'Round of 32' | 'Round of 16' | 'Quarter-Final' | 'Semi-Final' | 'Third Place' | 'Final';

export default function WorldCup2026Page() {
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              June 11 - July 19, 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              2026 FIFA World Cup Tickets
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              The biggest World Cup ever is coming to North America. Compare ticket prices across all platforms for matches in the USA, Canada, and Mexico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard?keyword=world+cup+2026"
                className="bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors"
              >
                Search World Cup Tickets
              </Link>
              <Link
                href="#schedule"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-400 transition-colors"
              >
                View Match Schedule
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <p className="text-4xl font-bold">48</p>
              <p className="text-green-200">Teams</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">104</p>
              <p className="text-green-200">Matches</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">16</p>
              <p className="text-green-200">Stadiums</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">3</p>
              <p className="text-green-200">Countries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Compare Prices */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Compare World Cup Ticket Prices?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-bold text-gray-900 mb-2">Save Hundreds</h3>
              <p className="text-gray-600">
                The same World Cup ticket can vary by 30%+ between platforms. We show you all options so you get the best deal.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔔</div>
              <h3 className="font-bold text-gray-900 mb-2">Price Alerts</h3>
              <p className="text-gray-600">
                Set your target price and we&apos;ll notify you when tickets drop. Never miss a deal on your bucket-list match.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-bold text-gray-900 mb-2">Trusted Platforms</h3>
              <p className="text-gray-600">
                We only compare prices from verified resellers with buyer protection. Buy with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Teams */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Featured Teams
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {featuredTeams.map((team) => (
              <div
                key={team.name}
                className="bg-white rounded-xl px-6 py-4 shadow-sm flex items-center gap-3"
              >
                <span className="text-3xl">{team.flag}</span>
                <div>
                  <p className="font-bold text-gray-900">{team.name}</p>
                  <p className="text-sm text-gray-500">{team.group}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Match Schedule */}
      <div id="schedule" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Match Schedule
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Browse matches by date or tournament round. Schedule is preliminary and subject to change by FIFA.
          </p>

          {/* View Toggle */}
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

          {/* Date Picker */}
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

          {/* Round Filter */}
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

          {/* Matches List */}
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
                          match.round === 'Semi-Final' ? 'bg-purple-100 text-purple-800' :
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

      {/* USA Venues */}
      <div id="venues" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">🇺🇸</span>
            <h2 className="text-3xl font-bold text-gray-900">USA Host Cities</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {worldCupCities.usa.map(({ city, venue, state }) => {
              const venueData = worldCupVenues[venue];
              return (
                <Link
                  key={venue}
                  href={`/world-cup-2026/${venue}`}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow group"
                >
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-green-600 mb-2">
                    {city}, {state}
                  </h3>
                  <p className="text-gray-600 mb-3">{venueData.name}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Capacity: {venueData.capacity.toLocaleString()}</span>
                    <span className="text-green-600 font-medium group-hover:underline">View Guide →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Canada Venues */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">🇨🇦</span>
            <h2 className="text-3xl font-bold text-gray-900">Canada Host Cities</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {worldCupCities.canada.map(({ city, venue, state }) => {
              const venueData = worldCupVenues[venue];
              return (
                <Link
                  key={venue}
                  href={`/world-cup-2026/${venue}`}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow group"
                >
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-green-600 mb-2">
                    {city}, {state}
                  </h3>
                  <p className="text-gray-600 mb-3">{venueData.name}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Capacity: {venueData.capacity.toLocaleString()}</span>
                    <span className="text-green-600 font-medium group-hover:underline">View Guide →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mexico Venues */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">🇲🇽</span>
            <h2 className="text-3xl font-bold text-gray-900">Mexico Host Cities</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {worldCupCities.mexico.map(({ city, venue, state }) => {
              const venueData = worldCupVenues[venue];
              return (
                <Link
                  key={venue}
                  href={`/world-cup-2026/${venue}`}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow group"
                >
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-green-600 mb-2">
                    {city}
                  </h3>
                  <p className="text-gray-600 mb-3">{venueData.name}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Capacity: {venueData.capacity.toLocaleString()}</span>
                    <span className="text-green-600 font-medium group-hover:underline">View Guide →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Key Dates */}
      <div className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Key Tournament Dates
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-900">Tournament Kicks Off</p>
                <p className="text-gray-600">Opening Match</p>
              </div>
              <p className="text-green-600 font-bold text-lg">June 11, 2026</p>
            </div>
            <div className="bg-white rounded-xl p-6 flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-900">Group Stage</p>
                <p className="text-gray-600">48 Teams, 12 Groups</p>
              </div>
              <p className="text-green-600 font-bold text-lg">June 11 - 28</p>
            </div>
            <div className="bg-white rounded-xl p-6 flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-900">Knockout Rounds</p>
                <p className="text-gray-600">Round of 32 through Semifinals</p>
              </div>
              <p className="text-green-600 font-bold text-lg">June 29 - July 15</p>
            </div>
            <div className="bg-white rounded-xl p-6 flex justify-between items-center border-2 border-green-500">
              <div>
                <p className="font-bold text-gray-900">World Cup Final</p>
                <p className="text-gray-600">Location TBA (likely SoFi or MetLife)</p>
              </div>
              <p className="text-green-600 font-bold text-lg">July 19, 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ticket Tips */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            World Cup Ticket Tips
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-green-100 text-green-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Register Early with FIFA</h3>
                <p className="text-gray-600">Official FIFA ticket sales will begin in late 2025. Register on FIFA.com to get priority access to the ticket portal.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-green-100 text-green-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Compare Resale Prices</h3>
                <p className="text-gray-600">Once tickets hit the resale market, prices vary wildly. Use Ticket Scan to compare StubHub, SeatGeek, and Ticketmaster prices.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-green-100 text-green-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Set Price Alerts</h3>
                <p className="text-gray-600">Don&apos;t constantly check prices. Set your target price on Ticket Scan and we&apos;ll email you when tickets drop to your budget.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-green-100 text-green-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Consider Group Stage Matches</h3>
                <p className="text-gray-600">Knockout round tickets will be expensive. Group stage matches offer great value and an authentic World Cup experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-green-600 to-emerald-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Don&apos;t Miss the Biggest World Cup Ever
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Create a free account to track World Cup ticket prices and get alerts when deals drop.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors"
            >
              Create Free Account
            </Link>
            <Link
              href="/dashboard?keyword=world+cup"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-400 transition-colors"
            >
              Search Tickets Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
