
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg text-primary mb-4">Athenas</h3>
            <p className="text-gray-600">
              Connecting sports enthusiasts in your community.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-600 hover:text-primary">Events</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary">About</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-primary">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary">Terms of Service</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Instagram</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Twitter</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Athenas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
