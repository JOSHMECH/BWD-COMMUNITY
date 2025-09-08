import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, TrendingUp, TrendingDown, Minus, Crown, Medal, Award } from "lucide-react";

const LeaderboardSection = () => {
  // Mock leaderboard data
  const topDesigners = [
    {
      rank: 1,
      name: "Adebayo Ogundimu",
      username: "@bayodesigns",
      points: 2850,
      wins: 8,
      trend: "up",
      avatar: "/api/placeholder/40/40",
      badges: ["Speed Demon", "Most Creative", "Top Performer"],
      location: "Lagos, Nigeria"
    },
    {
      rank: 2,
      name: "Chioma Okwu",
      username: "@chiomaui",
      points: 2720,
      wins: 6,
      trend: "up",
      avatar: "/api/placeholder/40/40",
      badges: ["Innovation Master", "UI Specialist"],
      location: "Abuja, Nigeria"
    },
    {
      rank: 3,
      name: "Ibrahim Musa",
      username: "@ibrahimgfx",
      points: 2650,
      wins: 7,
      trend: "same",
      avatar: "/api/placeholder/40/40",
      badges: ["Brand Expert", "Visual Artist"],
      location: "Kano, Nigeria"
    },
    {
      rank: 4,
      name: "Grace Emenike",
      username: "@gracecreates",
      points: 2480,
      wins: 5,
      trend: "down",
      avatar: "/api/placeholder/40/40",
      badges: ["Rising Star"],
      location: "Port Harcourt, Nigeria"
    },
    {
      rank: 5,
      name: "Tunde Adeyemi",
      username: "@tundeDesigns",
      points: 2350,
      wins: 4,
      trend: "up",
      avatar: "/api/placeholder/40/40",
      badges: ["Consistent Performer"],
      location: "Ibadan, Nigeria"
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-5 h-5 text-yellow-500" />;
      case 2: return <Medal className="w-5 h-5 text-gray-400" />;
      case 3: return <Award className="w-5 h-5 text-amber-600" />;
      default: return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="w-4 h-4 text-green-500" />;
      case "down": return <TrendingDown className="w-4 h-4 text-red-500" />;
      default: return <Minus className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Leaderboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how you stack up against Nigeria's top designers. Rankings are updated 
            in real-time based on challenge performance and community engagement.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Top 3 Spotlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {topDesigners.slice(0, 3).map((designer) => (
              <Card key={designer.rank} className={`text-center relative overflow-hidden ${
                designer.rank === 1 ? 'bg-gradient-hero text-primary-foreground shadow-glow' : 
                designer.rank === 2 ? 'bg-gradient-to-br from-gray-100 to-gray-200 shadow-soft' :
                'bg-gradient-to-br from-amber-50 to-amber-100 shadow-soft'
              }`}>
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    {getRankIcon(designer.rank)}
                  </div>
                  <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-background shadow-lg">
                    <AvatarImage src={designer.avatar} alt={designer.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground font-bold text-lg">
                      {designer.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className={`text-lg ${designer.rank === 1 ? 'text-primary-foreground' : 'text-foreground'}`}>
                    {designer.name}
                  </CardTitle>
                  <CardDescription className={`${designer.rank === 1 ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {designer.username}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className={`text-2xl font-bold ${designer.rank === 1 ? 'text-accent' : 'text-primary'}`}>
                      {designer.points.toLocaleString()} pts
                    </div>
                    <div className={`text-sm ${designer.rank === 1 ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                      {designer.wins} wins • {designer.location}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {designer.badges.slice(0, 2).map((badge) => (
                      <Badge key={badge} variant={designer.rank === 1 ? "secondary" : "outline"} className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Full Leaderboard Table */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-accent" />
                Top Designers
              </CardTitle>
              <CardDescription>
                Complete rankings updated in real-time
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-border/50">
                    <tr className="text-left">
                      <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">Rank</th>
                      <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">Designer</th>
                      <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">Points</th>
                      <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">Wins</th>
                      <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">Trend</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30">
                    {topDesigners.map((designer) => (
                      <tr key={designer.rank} className="hover:bg-muted/30 transition-smooth">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            {getRankIcon(designer.rank)}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-10 h-10">
                              <AvatarImage src={designer.avatar} alt={designer.name} />
                              <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                                {designer.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-semibold text-foreground">{designer.name}</div>
                              <div className="text-sm text-muted-foreground">{designer.username}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-bold text-primary">{designer.points.toLocaleString()}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-foreground">{designer.wins}</span>
                        </td>
                        <td className="px-6 py-4">
                          {getTrendIcon(designer.trend)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* View Full Leaderboard */}
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" className="px-8">
              View Complete Leaderboard
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardSection;