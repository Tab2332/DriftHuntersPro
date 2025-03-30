export interface Game {
  id: string;
  title: string;
  description: string;
  category: GameCategory;
  imageUrl: string;
  popularity: number;
  isNew: boolean;
}

export type GameCategory = 
  | "Puzzle"
  | "Action"
  | "Adventure"
  | "Strategy"
  | "Casual"
  | "Competitive";