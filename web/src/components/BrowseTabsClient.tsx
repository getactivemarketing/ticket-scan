'use client';

import { useState } from 'react';
import Link from 'next/link';

interface BrowseTabsClientProps {
  cities: { slug: string; name: string; state: string }[];
  categories: { slug: string; name: string; icon: string }[];
}

export default function BrowseTabsClient({ cities, categories }: BrowseTabsClientProps) {
  const [tab, setTab] = useState<'cities' | 'categories'>('cities');

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 mb-8">
          <button
            onClick={() => setTab('cities')}
            className={`text-2xl font-heading font-bold tracking-tight transition-colors ${
              tab === 'cities' ? 'text-navy' : 'text-gray-300 hover:text-gray-400'
            }`}
          >
            Browse by City
          </button>
          <button
            onClick={() => setTab('categories')}
            className={`text-2xl font-heading font-bold tracking-tight transition-colors ${
              tab === 'categories' ? 'text-navy' : 'text-gray-300 hover:text-gray-400'
            }`}
          >
            Categories
          </button>
        </div>

        {tab === 'cities' && (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/tickets/${city.slug}`}
                className="bg-gray-50 border border-gray-200 hover:border-brand/40 p-4 rounded-xl transition-colors group"
              >
                <p className="font-medium text-navy text-sm group-hover:text-brand transition-colors">{city.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{city.state}</p>
              </Link>
            ))}
          </div>
        )}

        {tab === 'categories' && (
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/tickets/${category.slug}`}
                className="bg-gray-50 border border-gray-200 hover:border-brand/40 p-4 rounded-xl text-center transition-colors group"
              >
                <span className="text-2xl block mb-1">{category.icon}</span>
                <p className="font-medium text-navy text-sm group-hover:text-brand transition-colors">{category.name}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
