import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, Calculator } from 'lucide-react';
import { mockDishes, type Dish } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

const MealLogger = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [servingSize, setServingSize] = useState('');
  const [unit, setUnit] = useState('');
  const { toast } = useToast();

  const filteredDishes = mockDishes.filter(dish =>
    dish.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDishSelect = (dish: Dish) => {
    setSelectedDish(dish);
    setServingSize(dish.serving_size.toString());
    setUnit(dish.unit);
  };

  const calculateMacros = () => {
    if (!selectedDish || !servingSize) return { calories: 0, protein: 0, carbs: 0, fat: 0 };
    
    const multiplier = parseFloat(servingSize) / selectedDish.serving_size;
    return {
      calories: Math.round(selectedDish.calories * multiplier),
      protein: Math.round(selectedDish.protein * multiplier * 10) / 10,
      carbs: Math.round(selectedDish.carbs * multiplier * 10) / 10,
      fat: Math.round(selectedDish.fat * multiplier * 10) / 10
    };
  };

  const macros = calculateMacros();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDish || !servingSize) {
      toast({
        title: "Error",
        description: "Please select a dish and enter serving size",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Meal Logged Successfully! 🎉",
      description: `Added ${selectedDish.name} (${macros.calories} calories)`,
      className: "border-success text-success"
    });

    // Reset form
    setSelectedDish(null);
    setServingSize('');
    setSearchQuery('');
    setUnit('');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Log Your Meal</h1>
        <p className="text-muted-foreground text-lg">
          Track your nutrition intake with ease
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Dish Selection */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5 text-primary" />
              Select Dish
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search for a dish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="space-y-2 max-h-64 overflow-y-auto">
              {filteredDishes.map((dish) => (
                <div
                  key={dish.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-smooth hover:shadow-soft ${
                    selectedDish?.id === dish.id
                      ? 'border-primary primary-gradient text-primary-foreground'
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => handleDishSelect(dish)}
                >
                  <div className="font-medium">{dish.name}</div>
                  <div className="text-sm opacity-75 mt-1">
                    {dish.calories} cal • {dish.protein}g protein per {dish.serving_size}{dish.unit}
                  </div>
                </div>
              ))}
            </div>

            {selectedDish && (
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-3">Nutrition per {selectedDish.serving_size}{selectedDish.unit}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex justify-between">
                    <span>Calories:</span>
                    <Badge variant="outline" className="calories-color">{selectedDish.calories}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Protein:</span>
                    <Badge variant="outline" className="protein-color">{selectedDish.protein}g</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Carbs:</span>
                    <Badge variant="outline" className="carbs-color">{selectedDish.carbs}g</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Fat:</span>
                    <Badge variant="outline" className="fat-color">{selectedDish.fat}g</Badge>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Serving Size & Calculation */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-primary" />
              Serving Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="serving-size">Serving Size</Label>
                <Input
                  id="serving-size"
                  type="number"
                  step="0.1"
                  value={servingSize}
                  onChange={(e) => setServingSize(e.target.value)}
                  placeholder="Enter amount"
                />
              </div>
              <div>
                <Label htmlFor="unit">Unit</Label>
                <Select value={unit} onValueChange={setUnit}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="g">Grams (g)</SelectItem>
                    <SelectItem value="ml">Milliliters (ml)</SelectItem>
                    <SelectItem value="slice">Slice</SelectItem>
                    <SelectItem value="serving">Serving</SelectItem>
                    <SelectItem value="cup">Cup</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {selectedDish && servingSize && (
              <div className="p-6 secondary-gradient rounded-lg text-white">
                <h4 className="font-semibold mb-4 text-center">Calculated Nutrition</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{macros.calories}</div>
                    <div className="text-sm opacity-90">Calories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{macros.protein}g</div>
                    <div className="text-sm opacity-90">Protein</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{macros.carbs}g</div>
                    <div className="text-sm opacity-90">Carbs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{macros.fat}g</div>
                    <div className="text-sm opacity-90">Fat</div>
                  </div>
                </div>
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full primary-gradient glow-primary transition-bounce hover:scale-105"
              size="lg"
            >
              <Plus className="w-4 h-4 mr-2" />
              Log This Meal
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default MealLogger;