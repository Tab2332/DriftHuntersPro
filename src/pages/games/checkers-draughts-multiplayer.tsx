import React from 'react';
import { Helmet } from 'react-helmet-async';

const CheckersDraughtsMultiplayerPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Checkers & Draughts Multiplayer - Play Online | Gamedock</title>
        <meta name="description" content="Play Checkers & Draughts Multiplayer online for free! Challenge friends or random opponents in this classic board game. No registration required." />
        <link rel="canonical" href="https://www.gamedock.site/games/checkers-draughts-multiplayer" />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Checkers & Draughts Multiplayer</h1>
        
        <div className="aspect-video mb-8">
          <iframe
            src="https://html5.gamedistribution.com/1234567890/CheckersDraughtsMultiplayer/"
            className="w-full h-full border-0 rounded-lg shadow-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Game Overview</h2>
          <p className="text-gray-600 mb-6">
            Challenge your friends or play against random opponents in this classic board game. 
            Checkers & Draughts Multiplayer offers a smooth, intuitive interface and real-time gameplay.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Play</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Move your pieces diagonally forward</li>
            <li>Capture opponent's pieces by jumping over them</li>
            <li>Reach the opposite end to crown your piece</li>
            <li>Use crowned pieces to move both forward and backward</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Real-time multiplayer gameplay</li>
            <li>Simple and intuitive controls</li>
            <li>Chat with your opponent</li>
            <li>Ranking system</li>
            <li>Multiple game modes</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tips</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Control the center of the board</li>
            <li>Create multiple jump opportunities</li>
            <li>Protect your pieces from being captured</li>
            <li>Use the chat to coordinate with your opponent</li>
            <li>Practice against AI before playing online</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CheckersDraughtsMultiplayerPage; 