import { useEffect, useState } from 'react';
import floatingHeartsImage from '@/assets/floating-hearts.png';

interface Heart {
  id: number;
  left: number;
  animationDelay: number;
  size: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const createHearts = () => {
      const newHearts: Heart[] = [];
      for (let i = 0; i < 8; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          animationDelay: Math.random() * 6,
          size: Math.random() * 20 + 15
        });
      }
      setHearts(newHearts);
    };

    createHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float opacity-60"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.animationDelay}s`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
          }}
        >
          <div 
            className="w-full h-full bg-contain bg-no-repeat bg-center animate-heart-beat"
            style={{
              backgroundImage: `url(${floatingHeartsImage})`,
              filter: 'hue-rotate(15deg) saturate(1.2)',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;