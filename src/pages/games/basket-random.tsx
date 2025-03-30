import React from 'react';
import { Helmet } from 'react-helmet';

const BasketRandomPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900 pt-28">
      <Helmet>
        <title>Basket Random - Play 2-Player Basketball Game Free | Gamedock</title>
        <meta name="description" content="Play Basket Random for free on Gamedock! Experience the chaos and fun of physics-based basketball in this exciting 2-player game. No downloads required—start playing with friends now!" />
        <link rel="canonical" href="https://gamedock.com/games/basket-random" />
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Game Title Section */}
        <section className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#007AFF] mb-4">
            Basket Random
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the chaos and fun of physics-based basketball in this exciting 2-player game!
          </p>
        </section>

        {/* Game Container */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="aspect-[16/9] max-h-[80vh] w-full relative">
            <iframe 
              src="https://www.crazygames.com/embed/basket-random" 
              className="w-full h-full"
              frameBorder="0" 
              allow="gamepad *;"
              title="Basket Random Game"
            />
          </div>
        </section>

        {/* Game Information */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-[#007AFF] mb-4">
              Game Overview
            </h2>
            <p className="text-gray-700 mb-4">
              Basket Random brings a fresh twist to basketball gaming with its unique physics-based gameplay. Challenge your friend in local multiplayer matches where anything can happen!
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-4 h-4 bg-[#007AFF] rounded-full mr-2"></span>
                Local 2-player gameplay
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-[#007AFF] rounded-full mr-2"></span>
                Physics-based mechanics
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-[#007AFF] rounded-full mr-2"></span>
                Easy to learn, hard to master
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-[#007AFF] mb-4">
              How to Play
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Use keyboard controls to move your character and shoot the ball. Player 1 uses WASD keys, while Player 2 uses arrow keys.
              </p>
              <p>
                Time your shots perfectly and use the physics system to your advantage. The unpredictable nature of the game makes every match exciting and unique!
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white p-8 rounded-2xl shadow-sm mb-12">
          <h2 className="text-2xl font-semibold text-[#007AFF] mb-6 text-center">
            Game Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-[#F2F2F7] rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Multiplayer Fun</h3>
              <p className="text-gray-600">Challenge your friends in exciting local multiplayer matches</p>
            </div>
            <div className="p-4 bg-[#F2F2F7] rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Physics System</h3>
              <p className="text-gray-600">Unique physics-based gameplay creates unpredictable moments</p>
            </div>
            <div className="p-4 bg-[#F2F2F7] rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Quick Matches</h3>
              <p className="text-gray-600">Perfect for quick gaming sessions with friends</p>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-[#007AFF] mb-6 text-center">
            Pro Tips
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-700">
            <p>1. Master the timing of your shots to increase accuracy</p>
            <p>2. Use the physics system to create unexpected shot trajectories</p>
            <p>3. Position your character strategically for better shooting angles</p>
            <p>4. Practice defensive moves to block your opponent's shots</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#F2F2F7] mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© 2024 BasketRandom.com - The ultimate destination for Basket Random game</p>
        </div>
      </footer>
    </div>
  );
};

export default BasketRandomPage; 