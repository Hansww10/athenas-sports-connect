
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="font-montserrat font-bold text-2xl text-primary">Athenas</h1>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
          <Link to="/events" className="text-gray-700 hover:text-primary font-medium">Events</Link>
          <Link to="/about" className="text-gray-700 hover:text-primary font-medium">About</Link>
          <Link to="/login">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Sign In
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-primary text-white hover:bg-primary/90">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow-md">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/events" 
              className="text-gray-700 hover:text-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-primary font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
