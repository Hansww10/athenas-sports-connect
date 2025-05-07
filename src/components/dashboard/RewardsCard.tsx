
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const mockRewards = [
  {
    id: 1,
    name: 'Running Rookie',
    description: 'Complete 3 running events',
    progress: 2,
    total: 3,
    tokens: 25
  },
  {
    id: 2,
    name: 'Cycling Champion',
    description: 'Participate in 5 cycling events',
    progress: 1,
    total: 5,
    tokens: 50
  },
  {
    id: 3,
    name: 'Community Leader',
    description: 'Invite 3 friends to events',
    progress: 3,
    total: 3,
    tokens: 30,
    completed: true
  }
];

const RewardsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Your Rewards</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockRewards.map((reward) => (
            <div key={reward.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">{reward.name}</h4>
                  <p className="text-sm text-gray-500">{reward.description}</p>
                </div>
                <div className="text-right">
                  <span className="text-primary font-semibold">{reward.tokens}</span>
                  <span className="text-xs text-gray-500 ml-1">tokens</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Progress 
                  value={(reward.progress / reward.total) * 100} 
                  className="h-2 flex-1"
                />
                <span className="text-xs text-gray-500 whitespace-nowrap">
                  {reward.progress}/{reward.total}
                </span>
              </div>
              {reward.completed && (
                <div className="bg-green-50 text-green-700 text-xs font-medium py-1 px-2 rounded-full inline-block">
                  Completed
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RewardsCard;
