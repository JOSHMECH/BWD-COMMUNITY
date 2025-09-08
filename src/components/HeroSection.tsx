import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Users, Target } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set a dummy deadline (7 days from now)
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 7);
    deadline.setHours(23, 59, 59, 999);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = deadline.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: "Active Designers", value: "1,200+", icon: Users },
    { label: "Challenges Completed", value: "48", icon: Target },
    { label: "Total Prize Pool", value: "₦2.5M", icon: Trophy },
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Nigerian Design
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              League
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Where creativity meets competition. Join Nigeria's premier design challenge platform 
            and showcase your talent to the world.
          </p>

          {/* Countdown Timer */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-primary-foreground/80 mb-4">
              Next Challenge Deadline
            </h3>
            <div className="flex justify-center gap-4 md:gap-6">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds }
              ].map((item) => (
                <div key={item.label} className="bg-background/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
                  <div className="text-3xl md:text-4xl font-bold text-accent">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm text-primary-foreground/70">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-accent hover:bg-accent-glow text-accent-foreground font-semibold px-8 py-6 text-lg shadow-accent hover:shadow-glow transition-smooth">
              <Calendar className="w-5 h-5 mr-2" />
              View Current Challenge
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg backdrop-blur-sm transition-smooth"
            >
              <Trophy className="w-5 h-5 mr-2" />
              View Leaderboard
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-background/10 backdrop-blur-sm rounded-lg p-6 text-center border border-primary-foreground/20">
                  <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary-foreground mb-1">{stat.value}</div>
                  <div className="text-primary-foreground/70">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;