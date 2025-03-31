import React from 'react';
import { Helmet } from 'react-helmet';

const MurderPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900 pt-28">
      <Helmet>
        <title>Murder - Play Action Thriller Game Free | Gamedock</title>
        <meta name="description" content="Play Murder for free on Gamedock! Experience the intense action and suspense in this thrilling game. Navigate through challenging scenarios and test your survival skills!" />
        <link rel="canonical" href="https://gamedock.com/games/murder" />
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Game Title Section */}
        <section className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#007AFF] mb-4">
            Murder
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Survive the intense action in this thrilling game!
          </p>
        </section>

        {/* Game Container */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="aspect-[16/9] max-h-[80vh] w-full relative">
            <iframe 
              src="https://www.crazygames.com/embed/murder" 
              className="w-full h-full"
              frameBorder="0" 
              allow="gamepad *;"
              title="Murder Game"
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
              Murder is an intense action game that puts your survival skills to the test. Navigate through challenging scenarios, make quick decisions, and try to stay alive in this thrilling experience!
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-4 h-4 bg-[#007AFF] rounded-full mr-2"></span>
                Intense action gameplay
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-[#007AFF] rounded-full mr-2"></span>
                Challenging scenarios
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-[#007AFF] rounded-full mr-2"></span>
                Quick decision making
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-[#007AFF] mb-4">
              How to Play
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Use your keyboard or gamepad to control your character. Navigate through the environment carefully, avoid dangers, and complete objectives to progress through the game.
              </p>
              <p>
                Stay alert and be ready to react quickly to unexpected situations. Your survival depends on your ability to make split-second decisions!
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
              <h3 className="font-semibold text-lg mb-2">Action-Packed</h3>
              <p className="text-gray-600">Intense gameplay with constant challenges</p>
            </div>
            <div className="p-4 bg-[#F2F2F7] rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Multiple Scenarios</h3>
              <p className="text-gray-600">Various challenging situations to overcome</p>
            </div>
            <div className="p-4 bg-[#F2F2F7] rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Quick Reflexes</h3>
              <p className="text-gray-600">Test your reaction time and decision making</p>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-[#007AFF] mb-6 text-center">
            Pro Tips
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-700">
            <p>1. Stay alert and watch your surroundings carefully</p>
            <p>2. Learn from each attempt to improve your strategy</p>
            <p>3. Use the environment to your advantage</p>
            <p>4. Don't rush - take your time to assess situations</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#F2F2F7] mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© 2024 Gamedock.com - The ultimate destination for Murder</p>
        </div>
      </footer>
    </div>
  );
};

export default MurderPage; 