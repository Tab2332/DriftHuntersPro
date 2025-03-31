import React from 'react';
import { Helmet } from 'react-helmet-async';

const CrusherBlockPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Crusher Block - Play Block Crushing Puzzle Game | Gamedock</title>
        <meta name="description" content="Play Crusher Block online for free! Match and crush blocks to clear levels in this addictive puzzle game. No registration required." />
        <link rel="canonical" href="https://www.gamedock.site/games/crusher-block" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Crusher Block</h1>
        
        <div className="aspect-video mb-8">
          <iframe
            src="https://www.crazygames.com/embed/crusher-block-jwd"
            className="w-full h-full border-0 rounded-lg shadow-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Game Overview</h2>
          <p className="text-gray-600 mb-6">
            Crusher Block is an engaging puzzle game where you match and crush blocks to clear levels. 
            With its simple yet addictive gameplay, it's perfect for quick gaming sessions!
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Play</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Match three or more blocks of the same color</li>
            <li>Watch blocks fall and create new matches</li>
            <li>Clear all blocks to complete the level</li>
            <li>Use special blocks for powerful combinations</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Match-3 puzzle mechanics</li>
            <li>Multiple levels with increasing difficulty</li>
            <li>Special blocks and power-ups</li>
            <li>Smooth animations and effects</li>
            <li>Score tracking system</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tips</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Look for chain reactions</li>
            <li>Save special blocks for difficult situations</li>
            <li>Plan your moves ahead</li>
            <li>Focus on clearing the bottom rows first</li>
            <li>Use power-ups strategically</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CrusherBlockPage; 