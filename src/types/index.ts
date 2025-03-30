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
  | "Action"      // 动作游戏
  | "Sports"      // 体育游戏
  | "Puzzle"      // 益智游戏
  | "Shooting"    // 射击游戏
  | "Adventure"   // 冒险游戏
  | "Card"        // 棋牌游戏
  | "Strategy"    // 策略游戏
  | "Casual"      // 休闲游戏
  | "Girls"       // 女生游戏
  | "Dress Up"    // 装扮游戏
  | "Kids"        // 儿童游戏
  | "Platform"    // 过关游戏
  | "2 Players";  // 双人游戏