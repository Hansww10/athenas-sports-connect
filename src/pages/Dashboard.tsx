
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ProfileCard from '@/components/dashboard/ProfileCard';
import RewardsCard from '@/components/dashboard/RewardsCard';
import EventCard, { EventData } from '@/components/events/EventCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data
const mockUser = {
  name: 'Jane Smith',
  email: 'jane.smith@example.com'
};

const mockEvents: EventData[] = [
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
    title: 'Yoga in the Park',
    date: '2025-05-12, 9:00 AM',
    location: 'Madison Square Park',
    description: 'Outdoor yoga session for all skill levels. Bring your own mat.',
    category: 'Yoga'
  },
  {
    id: 4,
    title: 'Tennis Tournament',
    date: '2025-05-17, 10:00 AM',
    location: 'City Tennis Courts',
    description: 'Amateur doubles tournament. Sign up with a partner or get matched.',
    category: 'Tennis'
  }
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  // Filter events by type (upcoming or past)
  const upcomingEvents = mockEvents.slice(0, 2);
  const pastEvents = mockEvents.slice(2, 4);
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <ProfileCard user={mockUser} />
            <RewardsCard />
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <Tabs defaultValue="upcoming" className="w-full">
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="upcoming" onClick={() => setActiveTab('upcoming')}>
                    Upcoming Events
                  </TabsTrigger>
                  <TabsTrigger value="past" onClick={() => setActiveTab('past')}>
                    Past Events
                  </TabsTrigger>
                </TabsList>
                <Button variant="outline" className="border-primary text-primary">
                  Find Events
                </Button>
              </div>
              
              <TabsContent value="upcoming" className="mt-0">
                {upcomingEvents.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {upcomingEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">You haven't joined any upcoming events yet.</p>
                    <Button className="mt-4 bg-primary">Find Events</Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="past" className="mt-0">
                {pastEvents.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pastEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">You haven't attended any events yet.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
            
            {/* Activity Feed */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="bg-white border border-gray-200 rounded-md divide-y">
                <div className="p-4">
                  <p className="text-sm">
                    <span className="font-medium">You</span> joined 
                    <span className="text-primary font-medium"> Morning Run Club</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                </div>
                <div className="p-4">
                  <p className="text-sm">
                    <span className="font-medium">You</span> earned 
                    <span className="text-primary font-medium"> 10 tokens</span> for completing your profile
                  </p>
                  <p className="text-xs text-gray-500 mt-1">3 days ago</p>
                </div>
                <div className="p-4">
                  <p className="text-sm">
                    <span className="font-medium">You</span> created your account
                  </p>
                  <p className="text-xs text-gray-500 mt-1">1 week ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
