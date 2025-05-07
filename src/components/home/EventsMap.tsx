
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

// Mock event data
const mockEvents = [
  { id: 1, title: 'Morning Run', lat: 40.712, lng: -74.006, type: 'running' },
  { id: 2, title: 'Soccer Match', lat: 40.718, lng: -73.996, type: 'soccer' },
  { id: 3, title: 'Tennis Tournament', lat: 40.722, lng: -73.986, type: 'tennis' },
  { id: 4, title: 'Yoga in the Park', lat: 40.708, lng: -74.016, type: 'yoga' },
];

const EventsMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This is a placeholder for actual map implementation
    // In a real implementation, you would use a library like Leaflet or Google Maps
    const initMap = () => {
      if (mapRef.current) {
        const canvas = document.createElement('canvas');
        canvas.width = mapRef.current.clientWidth;
        canvas.height = mapRef.current.clientHeight;
        mapRef.current.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        if (ctx) {
          // Draw a simple map background
          ctx.fillStyle = '#e8f4f8';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          // Draw some grid lines
          ctx.strokeStyle = '#c5dbe5';
          ctx.lineWidth = 1;
          
          for (let i = 0; i < canvas.width; i += 20) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, canvas.height);
            ctx.stroke();
          }
          
          for (let i = 0; i < canvas.height; i += 20) {
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(canvas.width, i);
            ctx.stroke();
          }
          
          // Draw mock event locations
          mockEvents.forEach((event, index) => {
            const x = 50 + (index * 80);
            const y = 50 + (index * 40);
            
            // Draw circle for event location
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, 2 * Math.PI);
            ctx.fillStyle = '#1A73E8';
            ctx.fill();
            
            // Draw event title
            ctx.font = '12px Montserrat';
            ctx.fillStyle = '#333';
            ctx.fillText(event.title, x + 15, y + 5);
          });
        }
      }
    };
    
    initMap();
    
    return () => {
      if (mapRef.current) {
        while (mapRef.current.firstChild) {
          mapRef.current.removeChild(mapRef.current.firstChild);
        }
      }
    };
  }, []);

  return (
    <Card className="border border-gray-200">
      <CardContent className="p-0">
        <div 
          ref={mapRef} 
          className="w-full h-[400px] relative bg-blue-50 rounded-md overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-400">
              Interactive map will be connected to Leaflet or Google Maps API
            </p>
          </div>
          <div className="absolute top-4 right-4 bg-white p-2 rounded shadow-md">
            <h4 className="text-sm font-medium">Map Legend</h4>
            <ul className="text-xs mt-2">
              <li className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
                <span>Sports Events</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventsMap;
