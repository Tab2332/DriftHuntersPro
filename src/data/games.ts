import { Game } from '../types';

export const games: Game[] = [
  {
    id: 'murder',
    title: 'Murder',
    description: 'Survive the intense action in this thrilling game!',
    category: 'Action',
    imageUrl: '/games/image/murder.avif',
    popularity: 95,
    isNew: true
  },
  {
    id: 'crusher-block',
    title: 'Crusher Block',
    description: 'Match and crush blocks in this addictive puzzle game!',
    category: 'Casual',
    imageUrl: '/games/image/crusher-block-jwd_16x9-cover.avif',
    popularity: 90,
    isNew: true
  },
  {
    id: 'checkers-draughts-multiplayer',
    title: 'Checkers & Draughts Multiplayer',
    description: 'Play the classic board game online with friends worldwide!',
    category: 'Puzzle',
    imageUrl: '/games/image/checkers-draughts-multiplayer.avif',
    popularity: 85,
    isNew: true
  },
  {
    id: 'tiny-auto-knights',
    title: 'Tiny Auto Knights',
    description: 'Build your team of mighty knights and watch them battle through epic adventures!',
    category: 'Strategy',
    imageUrl: '/games/image/tiny-auto-knights.avif',
    popularity: 92,
    isNew: true
  },
  {
    id: 'basket-random',
    title: 'Basket Random',
    description: 'Challenge your friend in this exciting physics-based basketball game!',
    category: 'Sports',
    imageUrl: '/games/image/basket-random.avif',
    popularity: 88,
    isNew: false
  }
];