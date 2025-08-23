import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/60" />
      
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up text-gradient">
          Happy 1 Year Anniversary
        </h1>
        <p className="text-3xl md:text-4xl mb-8 animate-fade-in-up text-primary font-playfair" style={{ animationDelay: '0.3s' }}>
          My Love ❤️
        </p>
        <p className="text-xl md:text-2xl mb-12 animate-fade-in-up text-muted-foreground max-w-2xl mx-auto font-inter" style={{ animationDelay: '0.6s' }}>
          365 days of love, laughter, and countless beautiful memories together
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <Button 
            size="lg" 
            className="btn-romantic text-lg px-8 py-4 font-semibold"
            onClick={() => scrollToSection('gallery')}
          >
            Our Memories 💕
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 font-semibold border-primary/50 hover:bg-primary/10"
            onClick={() => scrollToSection('timeline')}
          >
            Our Journey 🌟
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;