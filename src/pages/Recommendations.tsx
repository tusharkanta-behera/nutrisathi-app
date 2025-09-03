import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Lightbulb,
  Plus,
  Target,
  TrendingUp,
  Star,
  Clock,
  Utensils
} from 'lucide-react';
import { mockRecommendations, mockDishes } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

const Recommendations = () => {
  const [recommendations] = useState(mockRecommendations);
  const { toast } = useToast();

  const handleQuickAdd = (dish: any) => {
    toast({
      title: "Meal Added! 🎉",
      description: `${dish.name} has been added to your meal log`,
      className: "border-success text-success"
    });
  };

  const nutritionTips = [
    {
      title: "Protein Timing",
      description: "Spread protein intake throughout the day for better absorption",
      icon: Target,
      category: "Protein"
    },
    {
      title: "Hydration Boost",
      description: "Try adding lemon or cucumber to water for better hydration",
      icon: TrendingUp,
      category: "Hydration"
    },
    {
      title: "Fiber Focus",
      description: "Add more vegetables to increase daily fiber intake",
      icon: Star,
      category: "Fiber"
    },
    {
      title: "Meal Timing",
      description: "Consider eating your largest meal earlier in the day",
      icon: Clock,
      category: "Timing"
    }
  ];

  const quickMeals = [
    {
      name: "High-Protein Breakfast",
      items: ["Greek Yogurt", "Grilled Chicken Breast"],
      calories: 224,
      protein: 41,
      prepTime: "5 min"
    },
    {
      name: "Balanced Lunch",
      items: ["Quinoa Salad", "Salmon Fillet"],
      calories: 430,
      protein: 30,
      prepTime: "15 min"
    },
    {
      name: "Post-Workout Snack",
      items: ["Spinach Smoothie", "Oatmeal with Berries"],
      calories: 284,
      protein: 13,
      prepTime: "8 min"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Smart Recommendations</h1>
        <p className="text-muted-foreground text-lg">
          Personalized suggestions based on your nutrition goals and history
        </p>
      </div>

      {/* AI Recommendations */}
      <Card className="shadow-glow border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-primary" />
            AI-Powered Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((recommendation) => (
              <div
                key={recommendation.id}
                className="p-6 border rounded-lg hover:shadow-soft transition-smooth hover:-translate-y-1 bg-gradient-subtle"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-lg">{recommendation.dish.name}</h3>
                  <Badge 
                    variant="outline" 
                    className="text-primary border-primary/20"
                  >
                    {Math.round(recommendation.confidence * 100)}% match
                  </Badge>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {recommendation.reason}
                </p>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="text-center p-2 bg-muted rounded">
                    <div className="font-semibold text-calories">{recommendation.dish.calories}</div>
                    <div className="text-xs text-muted-foreground">Calories</div>
                  </div>
                  <div className="text-center p-2 bg-muted rounded">
                    <div className="font-semibold text-protein">{recommendation.dish.protein}g</div>
                    <div className="text-xs text-muted-foreground">Protein</div>
                  </div>
                </div>
                
                <Button 
                  className="w-full primary-gradient transition-bounce hover:scale-105"
                  onClick={() => handleQuickAdd(recommendation.dish)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Quick Add
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Meal Ideas */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Utensils className="w-5 h-5 text-primary" />
            Quick Meal Ideas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickMeals.map((meal, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg hover:shadow-soft transition-smooth"
              >
                <h3 className="font-semibold text-lg mb-2">{meal.name}</h3>
                
                <div className="space-y-2 mb-4">
                  {meal.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {meal.prepTime}
                  </div>
                  <Badge variant="outline" className="text-calories">
                    {meal.calories} cal
                  </Badge>
                </div>
                
                <div className="text-center p-3 primary-gradient rounded-lg text-primary-foreground">
                  <div className="text-lg font-bold">{meal.protein}g</div>
                  <div className="text-sm opacity-90">Protein</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Nutrition Tips */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5 text-primary" />
            Nutrition Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nutritionTips.map((tip, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-soft transition-smooth"
              >
                <div className="p-3 secondary-gradient rounded-full text-secondary-foreground">
                  <tip.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold">{tip.title}</h4>
                    <Badge variant="outline" className="text-xs">
                      {tip.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Dishes */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Popular This Week
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mockDishes.slice(0, 4).map((dish) => (
              <div
                key={dish.id}
                className="p-4 border rounded-lg hover:shadow-soft transition-smooth text-center"
              >
                <h4 className="font-medium mb-2">{dish.name}</h4>
                <div className="space-y-1 text-sm text-muted-foreground mb-3">
                  <div>{dish.calories} calories</div>
                  <div>{dish.protein}g protein</div>
                </div>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="w-full hover:primary-gradient hover:text-primary-foreground transition-smooth"
                  onClick={() => handleQuickAdd(dish)}
                >
                  <Plus className="w-3 h-3 mr-1" />
                  Add
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Recommendations;