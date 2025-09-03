// Update this page (the content is just a fallback if you fail to update the page)

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Target, 
  TrendingUp, 
  Award, 
  Lightbulb,
  ArrowRight 
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen hero-gradient text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 transition-bounce">
            Welcome to
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              NutriSathi
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Your intelligent nutrition companion. Track meals, achieve goals, 
            and transform your health with gamified progress tracking and AI-powered recommendations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/log">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 glow-primary transition-bounce hover:scale-105">
                Start Tracking Meals
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/analytics">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 transition-smooth"
              >
                Explore Analytics
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="glass p-6 rounded-xl transition-smooth hover:shadow-glow">
              <Target className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Tracking</h3>
              <p className="text-white/80">Effortlessly log meals with our intelligent food database</p>
            </div>
            <div className="glass p-6 rounded-xl transition-smooth hover:shadow-glow">
              <TrendingUp className="w-12 h-12 text-primary-glow mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Analytics</h3>
              <p className="text-white/80">Beautiful charts and insights into your nutrition progress</p>
            </div>
            <div className="glass p-6 rounded-xl transition-smooth hover:shadow-glow">
              <Award className="w-12 h-12 text-warning mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gamification</h3>
              <p className="text-white/80">Level up with XP, streaks, and achievement badges</p>
            </div>
            <div className="glass p-6 rounded-xl transition-smooth hover:shadow-glow">
              <Lightbulb className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Recommendations</h3>
              <p className="text-white/80">Personalized meal suggestions based on your goals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
