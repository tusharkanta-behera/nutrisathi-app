import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  TrendingUp,
  Target,
  Calendar,
  Activity
} from 'lucide-react';
import { mockAnalytics } from '@/data/mockData';

const Analytics = () => {
  const { summary, dailyData } = mockAnalytics;

  const macroDistribution = [
    { name: 'Protein', value: summary.totalProtein * 4, color: 'hsl(var(--protein))' },
    { name: 'Carbs', value: summary.totalCarbs * 4, color: 'hsl(var(--carbs))' },
    { name: 'Fat', value: summary.totalFat * 9, color: 'hsl(var(--fat))' }
  ];

  const goals = {
    calories: 2000,
    protein: 150,
    carbs: 200,
    fat: 70
  };

  const getProgressPercentage = (current: number, goal: number) => {
    return Math.min(Math.round((current / goal) * 100), 100);
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return 'text-success';
    if (percentage >= 70) return 'text-warning';
    return 'text-muted-foreground';
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Nutrition Analytics</h1>
        <p className="text-muted-foreground text-lg">
          Insights into your nutrition progress and trends
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Daily Avg Calories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-calories">{summary.avgCalories}</div>
                <div className="text-sm text-muted-foreground">Goal: {goals.calories}</div>
              </div>
              <div className={`text-right ${getProgressColor(getProgressPercentage(summary.avgCalories, goals.calories))}`}>
                <div className="text-lg font-semibold">{getProgressPercentage(summary.avgCalories, goals.calories)}%</div>
                <Activity className="w-5 h-5 ml-auto" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Daily Avg Protein</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-protein">{summary.avgProtein}g</div>
                <div className="text-sm text-muted-foreground">Goal: {goals.protein}g</div>
              </div>
              <div className={`text-right ${getProgressColor(getProgressPercentage(summary.avgProtein, goals.protein))}`}>
                <div className="text-lg font-semibold">{getProgressPercentage(summary.avgProtein, goals.protein)}%</div>
                <Target className="w-5 h-5 ml-auto" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Daily Avg Carbs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-carbs">{summary.avgCarbs}g</div>
                <div className="text-sm text-muted-foreground">Goal: {goals.carbs}g</div>
              </div>
              <div className={`text-right ${getProgressColor(getProgressPercentage(summary.avgCarbs, goals.carbs))}`}>
                <div className="text-lg font-semibold">{getProgressPercentage(summary.avgCarbs, goals.carbs)}%</div>
                <TrendingUp className="w-5 h-5 ml-auto" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Daily Avg Fat</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-fat">{summary.avgFat}g</div>
                <div className="text-sm text-muted-foreground">Goal: {goals.fat}g</div>
              </div>
              <div className={`text-right ${getProgressColor(getProgressPercentage(summary.avgFat, goals.fat))}`}>
                <div className="text-lg font-semibold">{getProgressPercentage(summary.avgFat, goals.fat)}%</div>
                <Calendar className="w-5 h-5 ml-auto" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Daily Trends */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Daily Nutrition Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="date" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickFormatter={(value) => new Date(value).getDate().toString()}
                />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="calories" 
                  stroke="hsl(var(--calories))" 
                  strokeWidth={2}
                  name="Calories"
                />
                <Line 
                  type="monotone" 
                  dataKey="protein" 
                  stroke="hsl(var(--protein))" 
                  strokeWidth={2}
                  name="Protein (g)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Macro Distribution */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Macro Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={macroDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {macroDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                  formatter={(value) => [`${value} calories`, '']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-4">
              {macroDistribution.map((macro, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: macro.color }}
                  />
                  <span className="text-sm font-medium">{macro.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Bar Chart */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Weekly Macro Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={dailyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="date" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return `${date.getMonth() + 1}/${date.getDate()}`;
                }}
              />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="protein" fill="hsl(var(--protein))" name="Protein (g)" />
              <Bar dataKey="carbs" fill="hsl(var(--carbs))" name="Carbs (g)" />
              <Bar dataKey="fat" fill="hsl(var(--fat))" name="Fat (g)" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Goal Progress */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Goal Progress (Today)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Calories', current: summary.totalCalories, goal: goals.calories, color: 'calories' },
              { name: 'Protein', current: summary.totalProtein, goal: goals.protein, color: 'protein', unit: 'g' },
              { name: 'Carbs', current: summary.totalCarbs, goal: goals.carbs, color: 'carbs', unit: 'g' },
              { name: 'Fat', current: summary.totalFat, goal: goals.fat, color: 'fat', unit: 'g' }
            ].map((item) => (
              <div key={item.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.name}</span>
                  <Badge 
                    variant="outline" 
                    className={`${item.color}-color`}
                  >
                    {getProgressPercentage(item.current, item.goal)}%
                  </Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 bg-${item.color}`}
                    style={{ 
                      width: `${Math.min(getProgressPercentage(item.current, item.goal), 100)}%`,
                      backgroundColor: `hsl(var(--${item.color}))`
                    }}
                  />
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{item.current}{item.unit}</span>
                  <span>{item.goal}{item.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;