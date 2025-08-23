import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scissors, Sparkles } from 'lucide-react';
import { useState } from 'react';
import coupleImage from '@/assets/couple-silhouette.jpg';

const PhotoGallery = () => {
  const [showCelebration, setShowCelebration] = useState(false);
  const [ribbonCut, setRibbonCut] = useState(false);

  const handleCutRibbon = () => {
    setRibbonCut(true);
    setTimeout(() => setShowCelebration(true), 500);
  };

  // Enhanced photos layout with varied sizes
  const photos = [
    { id: 1, src: coupleImage, caption: "Our first magical date 💕", size: "large" },
    { id: 2, src: coupleImage, caption: "Beach sunset together 🌅", size: "medium" },
    { id: 3, src: coupleImage, caption: "Holiday celebration 🎄", size: "small" },
    { id: 4, src: coupleImage, caption: "Weekend adventure 🏔️", size: "medium" },
    { id: 5, src: coupleImage, caption: "Cozy movie night 🍿", size: "large" },
    { id: 6, src: coupleImage, caption: "Dancing under stars ✨", size: "small" },
    { id: 7, src: coupleImage, caption: "Morning coffee dates ☕", size: "medium" },
    { id: 8, src: coupleImage, caption: "Road trip memories 🚗", size: "small" },
    { id: 9, src: coupleImage, caption: "Picnic in the park 🧺", size: "large" },
    { id: 10, src: coupleImage, caption: "Late night talks 🌙", size: "medium" },
    { id: 11, src: coupleImage, caption: "Sunday brunch 🥐", size: "small" },
    { id: 12, src: coupleImage, caption: "Concert nights 🎵", size: "medium" }
  ];

  const getPhotoSize = (size: string) => {
    switch (size) {
      case 'large': return 'md:col-span-2 md:row-span-2 h-80 md:h-96';
      case 'medium': return 'md:col-span-1 md:row-span-1 h-64';
      case 'small': return 'md:col-span-1 md:row-span-1 h-48';
      default: return 'md:col-span-1 md:row-span-1 h-64';
    }
  };

  return (
    <section id="gallery" className="py-20 px-6 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Celebration Effects */}
      {showCelebration && (
        <>
          {/* Confetti */}
          <div className="fixed inset-0 pointer-events-none z-50">
            {Array.from({ length: 100 }, (_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 animate-ping"
                style={{
                  backgroundColor: ['#E6A67A', '#D4A574', '#B8956A', '#E8B4B8', '#D4A87C'][i % 5],
                  left: `${Math.random() * 100}%`,
                  top: `-10px`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                  transform: `translateY(${Math.random() * 100 + 100}vh) rotate(${Math.random() * 360}deg)`
                }}
              />
            ))}
          </div>
          
          {/* Balloons */}
          <div className="fixed inset-0 pointer-events-none z-40">
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                className="absolute text-4xl animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 50 + 10}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${Math.random() * 2 + 3}s`
                }}
              >
                🎈
              </div>
            ))}
          </div>
        </>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Ribbon Section */}
        {!ribbonCut && (
          <div className="text-center mb-16 relative">
            <div className="relative inline-block">
              <div className="w-96 h-8 bg-gradient-to-r from-accent via-primary to-accent rounded-full shadow-lg mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-1 bg-white/50" />
              </div>
              <Button
                size="lg"
                onClick={handleCutRibbon}
                className="btn-romantic text-lg px-8 py-4 absolute top-2 left-1/2 transform -translate-x-1/2 z-10"
              >
                <Scissors className="w-5 h-5 mr-2" />
                Cut the Ribbon!
              </Button>
            </div>
            <p className="text-lg text-muted-foreground mt-8">
              Ready to unveil our precious memories, Tiya? 🎀
            </p>
          </div>
        )}

        {/* Gallery Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Our Beautiful Memories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every photo tells a story of our love, capturing moments that make my heart flutter
          </p>
          {showCelebration && (
            <div className="mt-6 animate-fade-in-up">
              <Sparkles className="w-8 h-8 mx-auto text-primary animate-spin" />
              <p className="text-lg text-primary font-semibold mt-2">
                Welcome to our memory lane, beautiful! ✨
              </p>
            </div>
          )}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-min">
          {photos.map((photo, index) => (
            <Card 
              key={photo.id} 
              className={`photo-card overflow-hidden group cursor-pointer animate-fade-in-up ${getPhotoSize(photo.size)} ${
                ribbonCut ? 'opacity-100 transform translate-y-0' : 'opacity-50 transform translate-y-4'
              }`}
              style={{ 
                animationDelay: ribbonCut ? `${index * 0.1}s` : '0s',
                transition: 'all 0.6s ease-out'
              }}
            >
              <div className="relative overflow-hidden h-full">
                <img 
                  src={photo.src} 
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white font-semibold text-sm md:text-base drop-shadow-lg">
                    {photo.caption}
                  </p>
                </div>
                {/* Rose gold border effect */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-500 rounded-lg" />
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-card p-8 rounded-2xl shadow-luxury max-w-2xl mx-auto">
            <p className="text-xl text-muted-foreground italic mb-4">
              "Every picture captures a piece of my heart that belongs to you, Tiya"
            </p>
            <p className="text-2xl font-bold text-gradient">💖</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;