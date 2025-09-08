import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Eye, Trophy, Zap } from "lucide-react";

const ChallengesSection = () => {
  // Mock challenge data
  const challenges = [
    {
      id: 1,
      title: "Mobile App Redesign Challenge",
      description: "Redesign a popular Nigerian mobile app interface with focus on user experience and local cultural elements.",
      status: "Active",
      deadline: "2024-09-15",
      participants: 145,
      prize: "₦150,000",
      category: "UI/UX Design",
      difficulty: "Intermediate"
    },
    {
      id: 2,
      title: "Nigerian Heritage Poster Series",
      description: "Create a series of posters celebrating Nigerian cultural heritage and diversity across different regions.",
      status: "Upcoming",
      deadline: "2024-09-22",
      participants: 0,
      prize: "₦200,000",
      category: "Graphic Design",
      difficulty: "Beginner"
    },
    {
      id: 3,
      title: "Fintech Dashboard Innovation",
      description: "Design an innovative dashboard for a Nigerian fintech startup focusing on cryptocurrency and digital payments.",
      status: "Judging",
      deadline: "2024-09-08",
      participants: 89,
      prize: "₦300,000",
      category: "Product Design",
      difficulty: "Advanced"
    },
    {
      id: 4,
      title: "Sustainable Lagos Branding",
      description: "Create a comprehensive brand identity for a sustainable development initiative in Lagos State.",
      status: "Completed",
      deadline: "2024-09-01",
      participants: 112,
      prize: "₦175,000",
      category: "Brand Design",
      difficulty: "Intermediate"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-primary text-primary-foreground";
      case "Upcoming": return "bg-accent text-accent-foreground";
      case "Judging": return "bg-secondary text-secondary-foreground";
      case "Completed": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return <Zap className="w-4 h-4 text-green-500" />;
      case "Intermediate": return <Zap className="w-4 h-4 text-yellow-500" />;
      case "Advanced": return <Zap className="w-4 h-4 text-red-500" />;
      default: return <Zap className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Design Challenges
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take on exciting design challenges, showcase your creativity, and compete with 
            talented designers across Nigeria for amazing prizes.
          </p>
        </div>

        {/* Challenge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {challenges.map((challenge) => (
            <Card key={challenge.id} className="group hover:shadow-glow transition-smooth border-border/50 hover:border-primary/20 bg-gradient-card">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-smooth">
                      {challenge.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {challenge.description}
                    </CardDescription>
                  </div>
                  <Badge className={getStatusColor(challenge.status)}>
                    {challenge.status}
                  </Badge>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="outline" className="text-xs">
                    {challenge.category}
                  </Badge>
                  <Badge variant="outline" className="text-xs flex items-center gap-1">
                    {getDifficultyIcon(challenge.difficulty)}
                    {challenge.difficulty}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Challenge Stats */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Due: {new Date(challenge.deadline).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{challenge.participants} participants</span>
                  </div>
                </div>

                {/* Prize and Action */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-accent text-lg">{challenge.prize}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    {challenge.status === "Active" && (
                      <Button size="sm" className="bg-gradient-hero hover:shadow-glow transition-smooth">
                        Join Challenge
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8">
            View All Challenges
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;