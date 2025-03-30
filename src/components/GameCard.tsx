import React from 'react';
import { Game } from '../types';
import { Trophy, Sparkles } from 'lucide-react';

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={game.imageUrl}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-900 truncate">{game.title}</h3>
          <div className="flex items-center gap-1">
            {game.popularity > 90 && (
              <Trophy className="w-4 h-4 text-yellow-500" />
            )}
            {game.isNew && (
              <Sparkles className="w-4 h-4 text-blue-500" />
            )}
          </div>
        </div>
        <p className="text-xs text-gray-600 mt-1 line-clamp-2">{game.description}</p>
      </div>
    </div>
  );
};