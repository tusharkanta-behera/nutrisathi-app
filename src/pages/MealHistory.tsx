import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar,
  Filter,
  Trash2,
  Edit,
  TrendingUp
} from 'lucide-react';
import { mockMeals, type Meal } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

const MealHistory = () => {
  const [meals, setMeals] = useState<Meal[]>(mockMeals);
  const [dateFilter, setDateFilter] = useState('');
  const { toast } = useToast();

  const filteredMeals = meals.filter(meal => 
    !dateFilter || meal.date.includes(dateFilter)
  );

  const totals = filteredMeals.reduce((acc, meal) => ({
    calories: acc.calories + meal.calories,
    protein: acc.protein + meal.protein,
    carbs: acc.carbs + meal.carbs,
    fat: acc.fat + meal.fat
  }), { calories: 0, protein: 0, carbs: 0, fat: 0 });

  const handleDelete = (mealId: string) => {
    setMeals(meals.filter(meal => meal.id !== mealId));
    toast({
      title: "Meal Deleted",
      description: "The meal has been removed from your history",
      className: "border-destructive text-destructive"
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric' 
    });
  };

  const groupedMeals = filteredMeals.reduce((acc, meal) => {
    const date = meal.date;
    if (!acc[date]) acc[date] = [];
    acc[date].push(meal);
    return acc;
  }, {} as Record<string, Meal[]>);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Meal History</h1>
        <p className="text-muted-foreground text-lg">
          Track your nutrition journey over time
        </p>
      </div>

      {/* Filters and Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Filter by Date</label>
                <Input
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="w-full"
                />
              </div>
              <Button 
                variant="outline" 
                onClick={() => setDateFilter('')}
                className="w-full"
              >
                Clear Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Summary ({filteredMeals.length} meals)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 primary-gradient rounded-lg text-primary-foreground">
                <div className="text-2xl font-bold">{Math.round(totals.calories)}</div>
                <div className="text-sm opacity-90">Total Calories</div>
              </div>
              <div className="text-center p-4 bg-protein/10 text-protein rounded-lg border border-protein/20">
                <div className="text-2xl font-bold">{Math.round(totals.protein * 10) / 10}g</div>
                <div className="text-sm opacity-75">Total Protein</div>
              </div>
              <div className="text-center p-4 bg-carbs/10 text-carbs rounded-lg border border-carbs/20">
                <div className="text-2xl font-bold">{Math.round(totals.carbs * 10) / 10}g</div>
                <div className="text-sm opacity-75">Total Carbs</div>
              </div>
              <div className="text-center p-4 bg-fat/10 text-fat rounded-lg border border-fat/20">
                <div className="text-2xl font-bold">{Math.round(totals.fat * 10) / 10}g</div>
                <div className="text-sm opacity-75">Total Fat</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Meal History */}
      <div className="space-y-6">
        {Object.entries(groupedMeals).sort((a, b) => b[0].localeCompare(a[0])).map(([date, dayMeals]) => (
          <Card key={date} className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                {formatDate(date)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dayMeals.map((meal) => (
                  <div
                    key={meal.id}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:shadow-soft transition-smooth"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{meal.dish.name}</h4>
                      <p className="text-muted-foreground">
                        {meal.serving_size}{meal.dish.unit}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 my-3 md:my-0">
                      <Badge variant="outline" className="calories-color">
                        {meal.calories} cal
                      </Badge>
                      <Badge variant="outline" className="protein-color">
                        {meal.protein}g protein
                      </Badge>
                      <Badge variant="outline" className="carbs-color">
                        {meal.carbs}g carbs
                      </Badge>
                      <Badge variant="outline" className="fat-color">
                        {meal.fat}g fat
                      </Badge>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="hover:text-primary">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="hover:text-destructive"
                        onClick={() => handleDelete(meal.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredMeals.length === 0 && (
          <Card className="shadow-card">
            <CardContent className="text-center py-12">
              <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No meals found</h3>
              <p className="text-muted-foreground mb-4">
                {dateFilter ? 'Try adjusting your date filter' : 'Start by logging your first meal!'}
              </p>
              <Button className="primary-gradient">
                Log Your First Meal
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MealHistory;