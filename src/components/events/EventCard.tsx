
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';

export interface EventData {
  id: number;
  title: string;
  date: string;
  location: string;
  image?: string;
  description: string;
  category: string;
}

interface EventCardProps {
  event: EventData;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-md">
      <div className="h-48 overflow-hidden bg-gray-100">
        {event.image ? (
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary/10">
            <span className="text-primary font-medium">{event.category}</span>
          </div>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="text-lg font-semibold">{event.title}</h3>
        <div className="flex items-center text-gray-500 text-sm mt-1">
          <Calendar size={14} className="mr-1" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm mt-1">
          <MapPin size={14} className="mr-1" />
          <span>{event.location}</span>
        </div>
      </CardHeader>
      
      <CardContent className="py-2">
        <p className="text-gray-600 text-sm line-clamp-2">
          {event.description}
        </p>
      </CardContent>
      
      <CardFooter className="pt-2">
        <Button className="w-full bg-primary text-white hover:bg-primary/90">
          Join Event
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
