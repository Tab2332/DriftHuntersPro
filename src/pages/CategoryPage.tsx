import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { GameCard } from '../components/GameCard';
import { CategoryNavigation } from '../components/CategoryNavigation';
import { games } from '../data/games';
import { GameCategory } from '../types';

export const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  
  // Convert URL parameter to proper category name
  const getCategoryName = (urlCategory: string): GameCategory => {
    switch(urlCategory) {
      case 'action': return 'Action';
      case 'sports': return 'Sports';
      case 'puzzle': return 'Puzzle';
      case 'shooting': return 'Shooting';
      case 'adventure': return 'Adventure';
      case 'card': return 'Card';
      case 'strategy': return 'Strategy';
      case 'casual': return 'Casual';
      case 'girls': return 'Girls';
      case 'dress-up': return 'Dress Up';
      case 'kids': return 'Kids';
      case 'platform': return 'Platform';
      case '2-players': return '2 Players';
      default: return urlCategory as GameCategory;
    }
  };

  // Filter games by category
  const filteredGames = games.filter(game => 
    !category || category === 'all' ? true : game.category === getCategoryName(category)
  );

  // Get category display name
  const getCategoryDisplayName = (category: string) => {
    switch(category) {
      case 'all': return 'All Games';
      case 'action': return 'Action Games';
      case 'sports': return 'Sports Games';
      case 'puzzle': return 'Puzzle Games';
      case 'shooting': return 'Shooting Games';
      case 'adventure': return 'Adventure Games';
      case 'card': return 'Card & Board Games';
      case 'strategy': return 'Strategy Games';
      case 'casual': return 'Casual Games';
      case 'girls': return 'Girls Games';
      case 'dress-up': return 'Dress Up Games';
      case 'kids': return 'Kids Games';
      case 'platform': return 'Platform Games';
      case '2-players': return '2 Players Games';
      default: return category;
    }
  };

  const categoryDisplayName = getCategoryDisplayName(category || 'all');

  return (
    <div className="min-h-screen bg-gray-50 pt-28">
      <Helmet>
        <title>{`${categoryDisplayName} - Gamedock | Fun & Casual Games | Puzzles & Challenges`}</title>
        <meta name="description" content={`Play ${categoryDisplayName.toLowerCase()} for free on Gamedock! Explore a variety of puzzles, challenges, and exciting mini-games. No downloads required—start playing now!`} />
      </Helmet>

      <CategoryNavigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {categoryDisplayName}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No games found in this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};