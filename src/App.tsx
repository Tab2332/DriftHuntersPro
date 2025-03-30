import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import TinyAutoKnightsPage from './pages/games/tiny-auto-knights';
import BasketRandomPage from './pages/games/basket-random';

export const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/games/tiny-auto-knights" element={<TinyAutoKnightsPage />} />
          <Route path="/games/basket-random" element={<BasketRandomPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;