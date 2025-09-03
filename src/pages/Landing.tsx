import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Target, 
  TrendingUp, 
  Award, 
  Lightbulb,
  Activity,
  Users,
  Star
} from 'lucide-react';

const Landing = () => {
  const features = [
    {
      icon: Target,
      title: 'Smart Tracking',
      description: 'Log meals effortlessly with our intelligent food database'
    },
    {
      icon: TrendingUp,
      title: 'Analytics Dashboard',
      description: 'Visualize your nutrition progress with beautiful charts'
    },
    {
      icon: Award,
      title: 'Gamification',
      description: 'Level up your nutrition game with XP, streaks, and achievements'
    },
    {
      icon: Lightbulb,
      title: 'AI Recommendations',
      description: 'Get personalized meal suggestions based on your goals'
    }
  ];

  const stats = [
    { icon: Users, value: '10K+', label: 'Active Users' },
    { icon: Activity, value: '500K+', label: 'Meals Tracked' },
    { icon: Star, value: '4.9', label: 'App Rating' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 transition-bounce">
            Your Nutrition
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Journey Starts Here
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Track meals, achieve goals, and transform your health with NutriSathi - 
            your intelligent nutrition companion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/log">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 glow-primary transition-bounce hover:scale-105">
                Start Tracking Now
              </Button>
            </Link>
            <Link to="/analytics">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 transition-smooth"
              >
                View Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map(({ icon: Icon, value, label }, index) => (
              <div key={index} className="text-center">
                <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">{value}</div>
                <div className="text-muted-foreground text-lg">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Succeed
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive nutrition tracking with gamification and smart insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(({ icon: Icon, title, description }, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-smooth hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 secondary-gradient text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Nutrition?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of users who have already improved their health with NutriSathi
          </p>
          <Link to="/log">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 transition-smooth">
              Log Your First Meal
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;