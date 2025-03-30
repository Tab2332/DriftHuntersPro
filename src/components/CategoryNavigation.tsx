import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const categories = [
  { path: '/', name: 'Home' },
  { path: '/category/all', name: 'All Games' },
  { path: '/category/action', name: 'Action' },
  { path: '/category/sports', name: 'Sports' },
  { path: '/category/puzzle', name: 'Puzzle' },
  { path: '/category/shooting', name: 'Shooting' },
  { path: '/category/adventure', name: 'Adventure' },
  { path: '/category/card', name: 'Card & Board' },
  { path: '/category/strategy', name: 'Strategy' },
  { path: '/category/casual', name: 'Casual' },
  { path: '/category/girls', name: 'Girls Games' },
  { path: '/category/dress-up', name: 'Dress Up' },
  { path: '/category/kids', name: 'Kids' },
  { path: '/category/platform', name: 'Platform' },
  { path: '/category/2-players', name: '2 Players' }
];

export const CategoryNavigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="bg-white shadow-sm">
      <nav className="max-w-full mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center w-full">
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className={`px-2 py-2 text-sm font-medium whitespace-nowrap ${
                  location.pathname === category.path
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex justify-end w-full">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {categories.map((category) => (
                <Link
                  key={category.path}
                  to={category.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === category.path
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}; 