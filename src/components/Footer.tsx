import { Link } from "react-router-dom";
import { Trophy, Mail, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Nigerian Design League</h3>
                <p className="text-primary-foreground/80 text-sm">Competition Hub</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-6 max-w-md">
              Empowering Nigerian designers through competitive challenges and community building. 
              Join us in celebrating and advancing design excellence across Nigeria.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <MapPin className="w-4 h-4" />
              <span>Lagos, Nigeria</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/challenges" className="text-primary-foreground/80 hover:text-accent transition-smooth">Current Challenges</Link></li>
              <li><Link to="/leaderboard" className="text-primary-foreground/80 hover:text-accent transition-smooth">Leaderboard</Link></li>
              <li><Link to="/judges" className="text-primary-foreground/80 hover:text-accent transition-smooth">Our Judges</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-smooth">About Us</Link></li>
              <li><Link to="/faq" className="text-primary-foreground/80 hover:text-accent transition-smooth">FAQ</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Stay Updated</h4>
            <p className="text-primary-foreground/80 mb-4">
              Get notified about new challenges and winners.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Enter your email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="w-full bg-accent hover:bg-accent-glow text-accent-foreground">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 Nigerian Design League. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/10">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;