import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Link to={`/games/${game.id}`} className="block w-[300px]">
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden transition-transform hover:scale-105 h-[320px]">
        <div className="h-[200px] w-full relative">
          <img
            src={game.imageUrl}
            alt={game.title}
            className="w-full h-full object-cover"
          />
          {game.isNew && (
            <span className="absolute top-2 right-2 bg-[#007AFF] text-white px-2 py-1 rounded-full text-sm">
              New
            </span>
          )}
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 truncate">{game.title}</h3>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-sm text-gray-600">{game.popularity}%</span>
            </div>
          </div>
          <div className="mt-2">
            <span className="text-sm text-[#007AFF]">{game.category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};