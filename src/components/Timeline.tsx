import { Card, CardContent } from '@/components/ui/card';
import coupleImage from '@/assets/couple-silhouette.jpg';

const Timeline = () => {
  const milestones = [
    {
      month: "January 2024",
      title: "Our First Hello 💫",
      description: "The day our eyes first met and my heart knew it had found home",
      image: coupleImage
    },
    {
      month: "February 2024", 
      title: "First Date Magic ✨",
      description: "Nervous butterflies turned into comfortable laughter over dinner",
      image: coupleImage
    },
    {
      month: "March 2024",
      title: "Official Together 💕",
      description: "The moment you said yes to being mine, the world became brighter",
      image: coupleImage
    },
    {
      month: "April 2024",
      title: "First Adventure 🌸",
      description: "Our weekend getaway where we discovered how perfect we are together",
      image: coupleImage
    },
    {
      month: "June 2024",
      title: "Summer of Love ☀️",
      description: "Beach days, sunset walks, and falling deeper in love every day",
      image: coupleImage
    },
    {
      month: "August 2024",
      title: "Meeting the Family 👨‍👩‍👧‍👦",
      description: "When you met my family and they instantly fell in love with you too",
      image: coupleImage
    },
    {
      month: "October 2024",
      title: "Our First 'I Love You' 💖",
      description: "Three words that changed everything and made us inseparable",
      image: coupleImage
    },
    {
      month: "December 2024",
      title: "Holiday Magic 🎄",
      description: "Celebrating our first Christmas together, making new traditions",
      image: coupleImage
    },
    {
      month: "January 2025",
      title: "One Year of Us 🎉",
      description: "365 days later, still falling for you every single day",
      image: coupleImage
    }
  ];

  return (
    <section id="timeline" className="py-20 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Our Love Story Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every moment with you has been a chapter in our beautiful love story
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full opacity-60" />

          {milestones.map((milestone, index) => (
            <div 
              key={index} 
              className={`relative flex items-center mb-16 animate-slide-in-right ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <Card className="card-romantic group hover:scale-105 transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={milestone.image} 
                        alt={milestone.title}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary/50"
                      />
                      <div>
                        <p className="text-sm text-primary font-semibold">{milestone.month}</p>
                        <h3 className="text-xl font-bold text-gradient">{milestone.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background animate-heart-beat shadow-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;