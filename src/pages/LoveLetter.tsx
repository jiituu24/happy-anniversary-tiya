import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const LoveLetter = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen py-12 px-6 relative"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8 hover:bg-primary/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Our Story
        </Button>

        <Card className="card-romantic animate-fade-in-up">
          <CardContent className="p-12">
            <div className="text-center mb-12">
              <Heart className="w-16 h-16 mx-auto mb-6 text-primary animate-heart-beat" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                A Letter From My Heart
              </h1>
              <p className="text-lg text-muted-foreground">
                Written with all my love on our special day
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-foreground">
              <p className="text-xl leading-relaxed font-light">
                My Dearest Love,
              </p>

              <p className="leading-relaxed">
                As I sit here writing this letter, my heart is overflowing with so much love for you that words seem inadequate. One year ago, you walked into my life and changed everything. You turned my ordinary days into extraordinary adventures and filled my world with colors I never knew existed.
              </p>

              <p className="leading-relaxed">
                Every morning I wake up grateful for another day to love you. Your smile is my favorite sunrise, your laughter is my favorite melody, and your love is my favorite blessing. You've taught me that home isn't a place – it's the feeling I get when I'm with you.
              </p>

              <p className="leading-relaxed">
                I love the way you scrunch your nose when you laugh, how you always steal my hoodies (and look incredibly cute in them), and how you make even the simplest moments feel magical. I love your kind heart, your brilliant mind, and the way you believe in me even when I don't believe in myself.
              </p>

              <p className="leading-relaxed">
                This past year has been the most beautiful chapter of my life. Through every joy, every challenge, every quiet moment, and every exciting adventure, you've been my constant. You've been my partner, my best friend, my safe place, and my greatest love.
              </p>

              <p className="leading-relaxed">
                I promise to love you through all the seasons of our life together. I promise to hold your hand through every storm and dance with you in every ray of sunshine. I promise to choose you, every single day, for all the days of my life.
              </p>

              <p className="leading-relaxed">
                Thank you for loving me so completely, for accepting all of me – the good, the silly, and the imperfect. Thank you for being the most incredible girlfriend, partner, and best friend I could ever ask for.
              </p>

              <p className="leading-relaxed">
                Here's to our first year, and to all the beautiful years ahead of us. I can't wait to create more memories, share more dreams, and fall even deeper in love with you.
              </p>

              <p className="text-xl leading-relaxed font-light mt-8 text-primary">
                Forever and always yours,<br />
                Your loving boyfriend ❤️
              </p>
            </div>

            <div className="text-center mt-12">
              <div className="animate-glow inline-block">
                <p className="text-2xl font-bold text-gradient">
                  Happy Anniversary, My Love 💕
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoveLetter;