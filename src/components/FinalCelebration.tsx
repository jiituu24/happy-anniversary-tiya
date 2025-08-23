import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const FinalCelebration = () => {
  const [showFireworks, setShowFireworks] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFireworks(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const createFirework = (index: number) => {
    const colors = ['#FFB6C1', '#DDA0DD', '#FFC0CB', '#E6E6FA', '#FF69B4'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    return (
      <div
        key={index}
        className="absolute w-2 h-2 rounded-full animate-ping"
        style={{
          backgroundColor: randomColor,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 60 + 20}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${Math.random() * 2 + 1}s`
        }}
      />
    );
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-primary/20 via-accent/10 to-background">
      {/* Fireworks effect */}
      {showFireworks && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }, (_, i) => createFirework(i))}
        </div>
      )}

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              color: '#FFB6C1'
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gradient animate-glow">
            Forever Yours
          </h1>
          <div className="text-4xl md:text-6xl mb-8 animate-heart-beat">
            ❤️
          </div>
          <p className="text-2xl md:text-3xl mb-12 text-primary font-playfair">
            "In a sea of people, my eyes will always search for you"
          </p>
        </div>

        <div className="animate-fade-in-up space-y-6" style={{ animationDelay: '1s' }}>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every love story is beautiful, but ours is my favorite
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              size="lg"
              className="btn-romantic text-lg px-8 py-4"
              onClick={() => navigate('/love-letter')}
            >
              Read My Love Letter 💌
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-primary/50 hover:bg-primary/10"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Relive Our Story ✨
            </Button>
          </div>
        </div>

        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '2s' }}>
          <p className="text-lg text-muted-foreground italic">
            "Thank you for being my today and all of my tomorrows" 💖
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCelebration;