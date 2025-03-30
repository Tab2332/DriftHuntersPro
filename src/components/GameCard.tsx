import React from 'react';
import { Game } from '../types';
import { Trophy, Sparkles } from 'lucide-react';

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={game.imageUrl}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{game.title}</h3>
          <div className="flex items-center gap-2">
            {game.popularity > 90 && (
              <Trophy className="w-5 h-5 text-yellow-500" />
            )}
            {game.isNew && (
              <Sparkles className="w-5 h-5 text-blue-500" />
            )}
          </div>
        </div>
        <p className="text-gray-600 mb-4">{game.description}</p>
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
            {game.category}
          </span>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};