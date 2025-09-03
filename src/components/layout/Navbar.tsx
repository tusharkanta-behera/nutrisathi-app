import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  PlusCircle, 
  History, 
  BarChart3, 
  Trophy, 
  Lightbulb,
  User,
  LogOut 
} from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/log', icon: PlusCircle, label: 'Log Meal' },
    { path: '/history', icon: History, label: 'History' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/gamification', icon: Trophy, label: 'Progress' },
    { path: '/recommendations', icon: Lightbulb, label: 'Recommendations' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card border-b shadow-card transition-smooth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">N</span>
              </div>
              <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
                NutriSathi
              </span>
            </Link>
            
            <div className="hidden md:ml-8 md:flex md:space-x-1">
              {navItems.map(({ path, icon: Icon, label }) => (
                <Link key={path} to={path}>
                  <Button
                    variant={isActive(path) ? 'default' : 'ghost'}
                    className={`transition-smooth ${
                      isActive(path) 
                        ? 'primary-gradient text-primary-foreground glow-primary' 
                        : 'hover:bg-muted'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4 mr-2" />
              Profile
            </Button>
            <Button variant="ghost" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden border-t pt-2 pb-3">
          <div className="grid grid-cols-3 gap-1">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link key={path} to={path}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`w-full transition-smooth ${
                    isActive(path) 
                      ? 'primary-gradient text-primary-foreground' 
                      : ''
                  }`}
                >
                  <Icon className="w-4 h-4 mb-1" />
                  <span className="text-xs">{label}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;