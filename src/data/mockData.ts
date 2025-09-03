// Mock data for NutriSathi prototype

export interface Dish {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  serving_size: number;
  unit: string;
}

export interface Meal {
  id: string;
  dish: Dish;
  serving_size: number;
  date: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface UserStats {
  level: number;
  xp: number;
  xpToNextLevel: number;
  streak: number;
  totalMeals: number;
  totalDays: number;
}

export const mockDishes: Dish[] = [
  {
    id: '1',
    name: 'Grilled Chicken Breast',
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
    serving_size: 100,
    unit: 'g'
  },
  {
    id: '2',
    name: 'Brown Rice',
    calories: 111,
    protein: 2.6,
    carbs: 23,
    fat: 0.9,
    serving_size: 100,
    unit: 'g'
  },
  {
    id: '3',
    name: 'Quinoa Salad',
    calories: 222,
    protein: 8,
    carbs: 39,
    fat: 3.6,
    serving_size: 150,
    unit: 'g'
  },
  {
    id: '4',
    name: 'Greek Yogurt',
    calories: 59,
    protein: 10,
    carbs: 3.6,
    fat: 0.4,
    serving_size: 100,
    unit: 'g'
  },
  {
    id: '5',
    name: 'Avocado Toast',
    calories: 234,
    protein: 6,
    carbs: 37,
    fat: 8,
    serving_size: 1,
    unit: 'slice'
  },
  {
    id: '6',
    name: 'Salmon Fillet',
    calories: 208,
    protein: 22,
    carbs: 0,
    fat: 12,
    serving_size: 100,
    unit: 'g'
  },
  {
    id: '7',
    name: 'Spinach Smoothie',
    calories: 130,
    protein: 8,
    carbs: 15,
    fat: 4,
    serving_size: 250,
    unit: 'ml'
  },
  {
    id: '8',
    name: 'Oatmeal with Berries',
    calories: 154,
    protein: 5,
    carbs: 27,
    fat: 3,
    serving_size: 150,
    unit: 'g'
  }
];

export const mockMeals: Meal[] = [
  {
    id: '1',
    dish: mockDishes[0],
    serving_size: 150,
    date: '2024-01-20',
    calories: 248,
    protein: 46.5,
    carbs: 0,
    fat: 5.4
  },
  {
    id: '2',
    dish: mockDishes[1],
    serving_size: 200,
    date: '2024-01-20',
    calories: 222,
    protein: 5.2,
    carbs: 46,
    fat: 1.8
  },
  {
    id: '3',
    dish: mockDishes[4],
    serving_size: 1,
    date: '2024-01-19',
    calories: 234,
    protein: 6,
    carbs: 37,
    fat: 8
  },
  {
    id: '4',
    dish: mockDishes[6],
    serving_size: 1,
    date: '2024-01-19',
    calories: 130,
    protein: 8,
    carbs: 15,
    fat: 4
  },
  {
    id: '5',
    dish: mockDishes[5],
    serving_size: 120,
    date: '2024-01-18',
    calories: 250,
    protein: 26.4,
    carbs: 0,
    fat: 14.4
  }
];

export const mockUserStats: UserStats = {
  level: 7,
  xp: 2340,
  xpToNextLevel: 2500,
  streak: 12,
  totalMeals: 145,
  totalDays: 35
};

export const mockRecommendations = [
  {
    id: '1',
    dish: mockDishes[3],
    reason: "High protein, low calories - perfect for your goals!",
    confidence: 0.92
  },
  {
    id: '2',
    dish: mockDishes[2],
    reason: "You haven't had quinoa this week - great fiber source!",
    confidence: 0.86
  },
  {
    id: '3',
    dish: mockDishes[7],
    reason: "Excellent breakfast option with complex carbs",
    confidence: 0.81
  }
];

export const mockAnalytics = {
  summary: {
    totalCalories: 2180,
    totalProtein: 145,
    totalCarbs: 220,
    totalFat: 68,
    avgCalories: 1940,
    avgProtein: 129,
    avgCarbs: 195,
    avgFat: 58
  },
  dailyData: [
    { date: '2024-01-15', calories: 1850, protein: 120, carbs: 180, fat: 55 },
    { date: '2024-01-16', calories: 2100, protein: 140, carbs: 210, fat: 70 },
    { date: '2024-01-17', calories: 1920, protein: 125, carbs: 185, fat: 52 },
    { date: '2024-01-18', calories: 2050, protein: 135, carbs: 200, fat: 65 },
    { date: '2024-01-19', calories: 1980, protein: 130, carbs: 195, fat: 60 },
    { date: '2024-01-20', calories: 2180, protein: 145, carbs: 220, fat: 68 }
  ]
};