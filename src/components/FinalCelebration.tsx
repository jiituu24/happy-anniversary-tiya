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
    const colors = ['#FF6F91', '#FF9A8B', '#FFB6C1', '#F6A6FF', '#E6E6FA'];
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
          animationDuration: `${Math.random() * 2 + 1.5}s`
        }}
      />
    );
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-pink-100 via-rose-200 to-purple-100 font-[Inter]">
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
            className="absolute text-5xl animate-float opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              color: ['#FF6F91', '#FFB6C1', '#FF9A8B'][i % 3]
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 drop-shadow-lg font-[Playfair_Display]">
            Forever Yours
          </h1>
          <div className="text-5xl md:text-6xl mb-8 animate-heart-beat">💖</div>
          <p className="text-3xl md:text-4xl mb-12 text-rose-700 font-[Dancing_Script] italic drop-shadow-md">
            "In a sea of people, my eyes will always search for you"
          </p>
        </div>

        <div className="animate-fade-in-up space-y-6" style={{ animationDelay: '1s' }}>
          <p className="text-xl md:text-2xl text-rose-800/90 max-w-2xl mx-auto leading-relaxed font-[Playfair_Display]">
            Every love story is beautiful, but ours will always be my favorite ✨
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              size="lg"
              className="text-lg px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 text-white shadow-lg hover:scale-105 hover:shadow-pink-300 transition-all duration-300"
              onClick={() => navigate('/love-letter')}
            >
              Read My Love Letter 💌
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-2 border-pink-400 text-rose-600 rounded-2xl hover:bg-pink-100/70 transition-all duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Relive Our Story ✨
            </Button>
          </div>
        </div>

        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '2s' }}>
          <p className="text-lg md:text-xl text-purple-800 italic font-[Dancing_Script]">
            "Thank you for being my today and all of my tomorrows" 💕
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCelebration;
