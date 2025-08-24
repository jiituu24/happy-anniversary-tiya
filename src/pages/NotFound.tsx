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

        <Card className="card-romantic animate-fade-in-up shadow-2xl rounded-2xl">
          <CardContent className="p-12">
            <div className="text-center mb-12">
              <Heart className="w-16 h-16 mx-auto mb-6 text-primary animate-heart-beat" />
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent tracking-wide font-serif">
                A Letter From My Soul
              </h1>
              <p className="text-lg italic text-muted-foreground">
                Words may fall short, but my love never will
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-foreground font-light leading-relaxed">
              <p className="text-xl font-semibold tracking-wide">
                My Forever,
              </p>

              <p>
                I Love u babe, I still remember the 1st day i came to meet you. That day changed everything. till then whenever I've seen you, i just think "How did i get you, So perfect, cute hot and my type". From that time i have visited you many times, and everytime felt like you're a blessing for me. Each time i leave i just know one thing that u r mine. Yes, we fight (infact last 2 days ka jaan k kia tha), we argue, But at the end of the day, we never give up on each other. i heard perfection doesn't exist - But then i met you. Love is about reshaping again and again, fitting into each other's worlds, and still choosing to stay. and for me, leaving you has never been, and will never be, an option. you care for me like my mother, you stand with me in my career, you hold me strong in my weak moments. You are my safe place, my best friend, My soulmate, ,you're my constant. You're my ideal person. My love, my heart my everything-you are already the best. And if i had to live a thousand lives, I would still find you in each one.
              </p>

              <p className="text-2xl mt-8 text-primary font-extrabold font-serif tracking-wide">
                Always yours,<br />
                The one who got lucky enough to love you ❤️
              </p>
            </div>

            <div className="text-center mt-12">
              <div className="animate-glow inline-block">
                <p className="text-3xl font-bold bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-md">
                  You Are Always Mine My Love 💕
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
