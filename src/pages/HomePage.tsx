import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { SearchBar } from '../components/SearchBar';
import { GameCard } from '../components/GameCard';
import { games } from '../data/games';

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gray-800 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Welcome to GameDock
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover and Experience Amazing Online Games
            </p>
            <Link
              to="/category/all"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              <FaPlay className="mr-2" />
              Start Playing
            </Link>
          </div>
        </div>
      </div>

      {/* Search and Games Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <SearchBar onSearch={setSearchQuery} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.slice(0, 8).map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Platform Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPlay className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Instant Play</h3>
              <p className="text-gray-400">Play instantly, no downloads required</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPlay className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Vast Collection</h3>
              <p className="text-gray-400">Wide variety of games to choose from</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPlay className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Social Gaming</h3>
              <p className="text-gray-400">Play and connect with friends</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-6">GameDock</h3>
              <p className="text-gray-400">
                您的在线游戏娱乐平台，提供优质的游戏体验。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Why Choose Us</h3>
              <ul className="space-y-4">
                <li className="text-gray-400 hover:text-white">Free to Play, No Fees</li>
                <li className="text-gray-400 hover:text-white">Curated Quality Games</li>
                <li className="text-gray-400 hover:text-white">Regular Updates</li>
                <li className="text-gray-400 hover:text-white">User Experience First</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">About Us</h3>
              <ul className="space-y-4">
                <li className="text-gray-400 hover:text-white">Company Profile</li>
                <li className="text-gray-400 hover:text-white">Join Our Team</li>
                <li className="text-gray-400 hover:text-white">Terms of Service</li>
                <li className="text-gray-400 hover:text-white">Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="text-gray-400">Email: support@gamedock.com</li>
                <li className="text-gray-400">Phone: +1 (888) 123-4567</li>
                <li className="text-gray-400">Address: Tech Park, San Francisco</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export { HomePage }; 