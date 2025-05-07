
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

interface ProfileCardProps {
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
}

const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-col items-center pt-6">
        <Avatar className="h-24 w-24">
          {user.avatar ? (
            <AvatarImage src={user.avatar} alt={user.name} />
          ) : (
            <AvatarFallback className="bg-primary text-white text-2xl">
              <User size={32} />
            </AvatarFallback>
          )}
        </Avatar>
        <h2 className="text-xl font-semibold mt-4">{user.name}</h2>
        <p className="text-gray-500 text-sm">{user.email}</p>
      </CardHeader>
      <CardContent className="text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <div className="text-center">
            <p className="font-semibold text-lg">12</p>
            <p className="text-gray-500 text-xs">Events</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-lg">48</p>
            <p className="text-gray-500 text-xs">Rewards</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-lg">3</p>
            <p className="text-gray-500 text-xs">Friends</p>
          </div>
        </div>
        <Button variant="outline" className="mt-2 w-full">
          Edit Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
