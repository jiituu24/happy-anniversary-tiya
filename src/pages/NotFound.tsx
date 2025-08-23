import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Heart } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30">
      <div className="text-center max-w-md mx-auto px-6">
        <Heart className="w-20 h-20 mx-auto mb-6 text-primary animate-heart-beat" />
        <h1 className="text-6xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! This page got lost in our love story
        </p>
        <Button 
          size="lg" 
          className="btn-romantic"
          onClick={() => window.location.href = '/'}
        >
          <Home className="w-4 h-4 mr-2" />
          Return to Our Story
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
