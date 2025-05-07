
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import MainLayout from '@/components/layout/MainLayout';
import EventsMap from '@/components/home/EventsMap';
import EventCard, { EventData } from '@/components/events/EventCard';

// Mock data
const featuredEvents: EventData[] = [
  {
    id: 1,
    title: 'Morning Run Club',
    date: '2025-05-10, 7:00 AM',
    location: 'Central Park, NY',
    description: 'Join us for a refreshing morning run. All levels welcome!',
    category: 'Running'
  },
  {
    id: 2,
    title: 'Weekend Soccer Match',
    date: '2025-05-11, 4:00 PM',
    location: 'Riverside Fields',
    description: 'Casual 5v5 soccer match. Bring water and your A-game!',
    category: 'Soccer'
  },
  {
    id: 3,
    title: 'Mountain Biking Adventure',
    date: '2025-05-17, 10:00 AM',
    location: 'Pine Ridge Trails',
    description: 'Explore scenic mountain trails with our experienced guides.',
    category: 'Cycling'
  }
];

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
              Join Your Sports Community
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with local athletes, join sports events, and earn rewards for staying active.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 py-6 px-8 text-lg">
                  Get Started
                </Button>
              </Link>
              <Link to="/events">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 py-6 px-8 text-lg">
                  Explore Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Discover Events Near You</h2>
          <p className="text-gray-600 mb-8 text-center">Find and join sports activities happening in your area</p>
          <div className="mb-12">
            <EventsMap />
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Events</h2>
            <Link to="/events">
              <Button variant="link" className="text-primary">
                View all events
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Create an Account</h3>
              <p className="text-gray-600">
                Sign up to discover local sports events and connect with your community.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Join Events</h3>
              <p className="text-gray-600">
                Find and participate in events that match your interests and schedule.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Earn Rewards</h3>
              <p className="text-gray-600">
                Get tokens for participation that can be redeemed for exclusive benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to join the community?</h2>
            <p className="text-xl mb-8 text-white/80">
              Create your account today and start discovering sports events near you.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 py-6 px-8 text-lg">
                Sign Up Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
