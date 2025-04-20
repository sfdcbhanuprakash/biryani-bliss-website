
export interface BiryaniRecipe {
  id: string;
  name: string;
  description: string;
  origin: string;
  image: string;
  preparationTime: string;
  cookingTime: string;
  servings: number;
  difficulty: 'Easy' | 'Intermediate' | 'Advanced';
  ingredients: string[];
  instructions: string[];
  nutritionInfo?: {
    calories: string;
    protein: string;
    carbs: string;
    fat: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  author: {
    name: string;
    avatar?: string;
  };
  tags: string[];
}
