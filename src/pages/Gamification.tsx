import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Trophy,
  Star,
  Flame,
  Target,
  Calendar,
  TrendingUp,
  Award,
  Zap
} from 'lucide-react';
import { mockUserStats } from '@/data/mockData';

const Gamification = () => {
  const stats = mockUserStats;
  const xpProgress = (stats.xp / stats.xpToNextLevel) * 100;

  const achievements = [
    {
      id: '1',
      title: 'First Steps',
      description: 'Log your first meal',
      icon: Target,
      unlocked: true,
      progress: 100,
      reward: '50 XP'
    },
    {
      id: '2',
      title: 'Week Warrior',
      description: 'Log meals for 7 consecutive days',
      icon: Calendar,
      unlocked: true,
      progress: 100,
      reward: '200 XP'
    },
    {
      id: '3',
      title: 'Streak Master',
      description: 'Maintain a 14-day streak',
      icon: Flame,
      unlocked: false,
      progress: 85,
      reward: '500 XP'
    },
    {
      id: '4',
      title: 'Protein Power',
      description: 'Hit protein goal 10 times',
      icon: TrendingUp,
      unlocked: true,
      progress: 100,
      reward: '150 XP'
    },
    {
      id: '5',
      title: 'Century Club',
      description: 'Log 100 meals',
      icon: Star,
      unlocked: true,
      progress: 100,
      reward: '1000 XP'
    },
    {
      id: '6',
      title: 'Nutrition Ninja',
      description: 'Perfect week (all goals met)',
      icon: Award,
      unlocked: false,
      progress: 60,
      reward: '750 XP'
    }
  ];

  const streakMilestones = [
    { days: 7, reward: '100 XP', unlocked: true },
    { days: 14, reward: '200 XP', unlocked: false },
    { days: 30, reward: '500 XP', unlocked: false },
    { days: 60, reward: '1000 XP', unlocked: false },
    { days: 100, reward: '2000 XP', unlocked: false }
  ];

  const levelBadges = [
    { level: 1, title: 'Beginner', color: 'text-muted-foreground' },
    { level: 2, title: 'Tracker', color: 'text-muted-foreground' },
    { level: 3, title: 'Committed', color: 'text-muted-foreground' },
    { level: 4, title: 'Dedicated', color: 'text-muted-foreground' },
    { level: 5, title: 'Expert', color: 'text-muted-foreground' },
    { level: 6, title: 'Master', color: 'text-warning' },
    { level: 7, title: 'Champion', color: 'text-secondary' },
    { level: 8, title: 'Legend', color: 'text-primary' }
  ];

  const currentBadge = levelBadges.find(badge => badge.level === stats.level);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Your Progress</h1>
        <p className="text-muted-foreground text-lg">
          Level up your nutrition game with achievements and streaks
        </p>
      </div>

      {/* Level and XP Card */}
      <Card className="shadow-glow border-primary/20">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <div className="relative">
              <div className="w-24 h-24 mx-auto primary-gradient rounded-full flex items-center justify-center text-primary-foreground mb-4 glow-primary">
                <span className="text-3xl font-bold">{stats.level}</span>
              </div>
              <Badge 
                className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 ${currentBadge?.color} secondary-gradient`}
              >
                {currentBadge?.title}
              </Badge>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">Level Progress</span>
                <span className="text-sm text-muted-foreground">
                  {stats.xp} / {stats.xpToNextLevel} XP
                </span>
              </div>
              <Progress value={xpProgress} className="h-3" />
              <p className="text-sm text-muted-foreground">
                {stats.xpToNextLevel - stats.xp} XP until Level {stats.level + 1}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-card text-center">
          <CardContent className="p-6">
            <Flame className="w-8 h-8 text-secondary mx-auto mb-3" />
            <div className="text-3xl font-bold text-secondary mb-1">{stats.streak}</div>
            <div className="text-sm text-muted-foreground">Day Streak</div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card text-center">
          <CardContent className="p-6">
            <Target className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-primary mb-1">{stats.totalMeals}</div>
            <div className="text-sm text-muted-foreground">Total Meals</div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card text-center">
          <CardContent className="p-6">
            <Calendar className="w-8 h-8 text-info mx-auto mb-3" />
            <div className="text-3xl font-bold text-info mb-1">{stats.totalDays}</div>
            <div className="text-sm text-muted-foreground">Days Active</div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card text-center">
          <CardContent className="p-6">
            <Zap className="w-8 h-8 text-warning mx-auto mb-3" />
            <div className="text-3xl font-bold text-warning mb-1">{stats.xp}</div>
            <div className="text-sm text-muted-foreground">Total XP</div>
          </CardContent>
        </Card>
      </div>

      {/* Achievements */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-6 border rounded-lg transition-smooth hover:shadow-soft ${
                  achievement.unlocked
                    ? 'border-primary/20 bg-primary/5'
                    : 'border-border bg-muted/20'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${
                    achievement.unlocked 
                      ? 'primary-gradient text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    <achievement.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-semibold mb-1 ${
                      achievement.unlocked ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {achievement.description}
                    </p>
                    {!achievement.unlocked && achievement.progress < 100 && (
                      <div className="space-y-2">
                        <Progress value={achievement.progress} className="h-2" />
                        <div className="text-xs text-muted-foreground">
                          {achievement.progress}% complete
                        </div>
                      </div>
                    )}
                    <Badge 
                      variant={achievement.unlocked ? "default" : "secondary"}
                      className="mt-2"
                    >
                      {achievement.reward}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Streak Milestones */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-secondary" />
            Streak Milestones
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {streakMilestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 border rounded-lg ${
                  milestone.unlocked
                    ? 'border-secondary/20 bg-secondary/5'
                    : stats.streak >= milestone.days * 0.7
                    ? 'border-warning/20 bg-warning/5'
                    : 'border-border bg-muted/10'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-full ${
                    milestone.unlocked
                      ? 'secondary-gradient text-secondary-foreground'
                      : stats.streak >= milestone.days * 0.7
                      ? 'bg-warning/20 text-warning'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">{milestone.days} Day Streak</div>
                    <div className="text-sm text-muted-foreground">
                      {milestone.unlocked 
                        ? 'Completed!' 
                        : `${Math.max(0, milestone.days - stats.streak)} days to go`
                      }
                    </div>
                  </div>
                </div>
                <Badge 
                  variant={milestone.unlocked ? "default" : "secondary"}
                >
                  {milestone.reward}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Gamification;