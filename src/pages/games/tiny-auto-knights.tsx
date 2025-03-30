import React from 'react';
import { Helmet } from 'react-helmet';

const TinyAutoKnightsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Helmet>
        <title>Tiny Auto Knights - Epic Auto-Battler Action Game | TinyAutoKnights.com</title>
        <meta name="description" content="Play Tiny Auto Knights online - An epic auto-battler where tiny but mighty knights battle through challenging adventures. Experience strategic action gameplay!" />
        <link rel="canonical" href="https://tinyautoknights.com/games/tiny-auto-knights" />
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Game Title Section */}
        <section className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#007AFF] mb-4">
            Tiny Auto Knights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Command your army of tiny but mighty knights in this epic auto-battler adventure!
          </p>
        </section>

        {/* Game Container */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="aspect-[16/9] max-h-[80vh] w-full relative">
            <iframe 
              src="https://www.crazygames.com/embed/tiny-auto-knight" 
              className="w-full h-full"
              frameBorder="0" 
              allow="gamepad *;"
              title="Tiny Auto Knights Game"
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
              Tiny Auto Knights combines strategic auto-battler mechanics with action-packed gameplay. Build your team of mighty knights, upgrade their abilities, and watch them battle through epic adventures!
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-4 h-4 bg-[#007AFF] rounded-full mr-2"></span>
                Strategic team building
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-[#007AFF] rounded-full mr-2"></span>
                Auto-battle mechanics
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-[#007AFF] rounded-full mr-2"></span>
                Character progression system
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-[#007AFF] mb-4">
              How to Play
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Select and position your knights strategically before each battle. Upgrade their equipment and abilities to make them stronger. Watch as they automatically battle against waves of enemies!
              </p>
              <p>
                The key to victory lies in your team composition and upgrade choices. Experiment with different combinations to find the most effective strategy.
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
              <h3 className="font-semibold text-lg mb-2">Strategic Depth</h3>
              <p className="text-gray-600">Build and customize your team of knights for maximum effectiveness</p>
            </div>
            <div className="p-4 bg-[#F2F2F7] rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Auto-Battle System</h3>
              <p className="text-gray-600">Watch your strategies unfold in exciting automatic combat</p>
            </div>
            <div className="p-4 bg-[#F2F2F7] rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Progression System</h3>
              <p className="text-gray-600">Upgrade and evolve your knights to face tougher challenges</p>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-[#007AFF] mb-6 text-center">
            Pro Tips
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-700">
            <p>1. Focus on upgrading your strongest knights first</p>
            <p>2. Create balanced teams with different unit types</p>
            <p>3. Pay attention to knight positioning before battles</p>
            <p>4. Save resources for key upgrades and equipment</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#F2F2F7] mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© 2024 TinyAutoKnights.com - The ultimate destination for Tiny Auto Knights game</p>
        </div>
      </footer>
    </div>
  );
};

export default TinyAutoKnightsPage; 