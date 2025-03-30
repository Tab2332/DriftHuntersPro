import { Game } from '../types';

export const games: Game[] = [
  {
    id: '1',
    title: 'Sudoku Master',
    description: 'Challenge your logical thinking with classic Sudoku puzzles',
    category: 'Puzzle',
    imageUrl: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948',
    popularity: 98,
    isNew: true
  },
  {
    id: '2',
    title: 'Jungle Adventure',
    description: 'Explore mysterious jungles and collect treasures',
    category: 'Adventure',
    imageUrl: 'https://images.unsplash.com/photo-1642516303080-431f6ff3c4c6',
    popularity: 95,
    isNew: false
  },
  {
    id: '3',
    title: 'Block Blast',
    description: 'Classic block-matching puzzle game that tests your strategy',
    category: 'Casual',
    imageUrl: 'https://images.unsplash.com/photo-1628277613967-6abca504d0ac',
    popularity: 92,
    isNew: true
  },
  {
    id: '4',
    title: 'Space Warrior',
    description: 'Pilot your spaceship and defeat alien invaders',
    category: 'Action',
    imageUrl: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5',
    popularity: 90,
    isNew: false
  },
  {
    id: '5',
    title: 'City Builder',
    description: 'Build and manage your dream city',
    category: 'Strategy',
    imageUrl: 'https://images.unsplash.com/photo-1627556704302-624286467c65',
    popularity: 88,
    isNew: true
  },
  {
    id: '6',
    title: 'Card Duel',
    description: 'Strategic card battle game',
    category: 'Competitive',
    imageUrl: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf',
    popularity: 85,
    isNew: false
  },
];