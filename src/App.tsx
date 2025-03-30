import React, { useState } from 'react';
import { GameCard } from './components/GameCard';
import { SearchBar } from './components/SearchBar';
import { games } from './data/games';
import { 
  Gamepad2,
  Heart,
  Zap,
  Star,
  Mail,
  Github,
  Twitter
} from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = games.filter(game => 
    game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed w-full bg-white/80 backdrop-blur-md z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <Gamepad2 className="w-8 h-8 text-indigo-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">GameDock</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#games" className="text-gray-600 hover:text-gray-900">Games</a>
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Play Now
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Play Selected HTML5 Games
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            No download, no login required. Start your gaming journey instantly.
            Enjoy high-quality online gaming experience anytime, anywhere.
          </p>
          <SearchBar onSearch={setSearchQuery} />
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Popular Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose GameDock?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-indigo-600" />,
                title: "Instant Play",
                description: "No download required, start playing right in your browser"
              },
              {
                icon: <Heart className="w-8 h-8 text-indigo-600" />,
                title: "Curated Games",
                description: "Carefully selected games to ensure the best gaming experience"
              },
              {
                icon: <Star className="w-8 h-8 text-indigo-600" />,
                title: "Offline Play",
                description: "Play single-player games without login required"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-block p-4 bg-indigo-50 rounded-2xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              {
                question: "Do I need to download the games?",
                answer: "No. All our games are built with HTML5 technology and run directly in your browser without any downloads."
              },
              {
                question: "Do I need to create an account?",
                answer: "No. Our games are designed for instant play without any login requirements."
              },
              {
                question: "Can I play on mobile devices?",
                answer: "Yes, our games feature responsive design and run smoothly on phones, tablets, and other devices."
              },
              {
                question: "How are game progress saved?",
                answer: "Game progress is automatically saved in your browser's local storage, allowing you to continue where you left off."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Gamepad2 className="w-8 h-8 text-indigo-400" />
                <span className="ml-2 text-2xl font-bold">GameDock</span>
              </div>
              <p className="text-gray-400">
                Creating the ultimate online gaming experience
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Game Categories</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white">Puzzle Games</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Action Games</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Adventure Games</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Strategy Games</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">About Us</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white">Company</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Join Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-gray-400" />
                  <a href="mailto:sjh319187936@gmail.com" className="text-gray-400 hover:text-white">
                    sjh319187936@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Github className="w-5 h-5 mr-2 text-gray-400" />
                  <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
                </li>
                <li className="flex items-center">
                  <Twitter className="w-5 h-5 mr-2 text-gray-400" />
                  <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 FireMonkey. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;