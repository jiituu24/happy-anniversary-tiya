import { Card, CardContent } from '@/components/ui/card';
import coupleImage from '@/assets/couple-silhouette.jpg';

const Timeline = () => {
  const milestones = [
    {
      month: "9th Aug 2024",
      title: "Stepping Into Her Life 💫",
      description: "One Evening, while I was sitting with my friend, the 🌸 most beautiful girl of the college 🌸 texted him about a trip. She said her roommate would only join if one of his old friends came too. I had no idea who she was back then, but I laughed and said, ‘If it’s a trip, add me—I’ll come along.’ ✈️ That one random line, half joke, half fate, became the first step into her life 💖.",
      image: "4.jpg"
    },
    {
      month: "10th Aug 2024",
      title: "Our First Hello 💫",
      description: "I was waiting with my friend, scanning faces, guessing which ones were them. Finally, we met, and the trip began. 🌸 Very quickly, our vibes clicked—I teased her, she playfully hit me back, and laughter filled the day. At one point, I even tried to click a picture with her to show my friends saying, ‘Tumhari bhabhi mil gayi.’ 😅 Her expression said it all: ‘Why is this guy clicking a solo picture with me?’ 🤭📸",
      image: "3.jpg"
    },
    {
      month: "22nd Aug 2024",
      title: "When Feelings Slipped Out 💕",
      description: "Talking to her daily had become my sweetest habit. One day, during our usual teasing, she suddenly said, “You’re gay.” 😅 I took the chance and softly said, “I…” She paused, then asked, “SACHME??” 💭 I laughed it off as a joke, but something changed that day. A little later, during Some club orientation, I asked again: “What if it wasn’t a joke?” She avoided it until finally saying, “It’s a YES if I don’t get a Medical college… otherwise NO.” Playfully, she slipped my ring on her finger 💍 and never returned it. When I asked do you know what it meant, she smiled and said, “YES.” 💖 That tiny act—so simple, so childish—changed everything. 🌸",
      image: "53.jpg"
    },
    {
      month: "12:51 – 25th Aug 2024", 
      title: "The Day She Said YES ✨",
      description: "✨ It was a Sunday. She wished someone would pick her up from the station—and though I first denied, I ended up going. 🚉 I sent her a picture saying, “The auto driver left me here by mistake, what should I do?” She was so happy—it was her first time someone had come to receive her, and mine too. We went to VT, and while returning, I kept looking into her eyes. She asked why, and I replied, “If you look long enough, you fall in love.” ❤️ At VT, I whispered, “I love you.” She asked if I was joking. I laughed, but when she said, “Try again… maybe you won’t get a No,” I typed: “I LOVE U.” 💌 And she said “YES.” 💖 That moment—pure butterflies, pure magic. 🌸",
      image: "3.jpg"
    },
    {
      month: "4th Sept 2024",
      title: "22 Days in Varanasi 💕",
      description: "It was the day her NEET result came. I prayed she’d get her dream seat, but deep inside I wished: “Please stay with me.” She did get into one of her desired colleges—and just 22 days were left in Varanasi. Between those days, our mid-sems came too, and she told me not to disturb her. 💭",
      image: "12.jpg"
    },
    {
      month: "19th Sept 2024",
      title: "First Adventure 🌸",
      description: "✨ We went on our first trip, around 150 km away from Varanasi. The day was full of joy and laughter, but she wanted to return early because of her Aagman practice, worried about losing her role. I just wished the day wouldn’t end. 💭",
      image: "4.jpg"
    },
    {
      month: "26th Sept 2024",
      title: "The Last Day 💔",
      description: "🌆 It was her last day in Varanasi. I spent the whole day with her and her mother at GTAC. At 5:15, I got a call for a math quiz. Her mother, being a professor, forced me to attend. I rushed, finished, slipped out at 5:35—her train was at 6:05. I borrowed a cycle, then caught an auto, emotionally blackmailing the driver to rush. Against all odds, I reached by 6:02 and found her seat at 6:03. She was crying, thinking we wouldn’t meet. I called her name, and she and her mother were shocked. The train moved the very second I sat beside her. I stayed till two stations later, and at 6:17, I saw her for the last time… hiding my tears as I stepped off. 💔",
      image: "21.jpg"
    },
    {
      month: "Now",
      title: "Our Forever Journey ✨",
      description: "After she joined college, she always said, “Please come here.” Within 10 days, I did. Since then, I’ve visited five times, and every time I wonder: “How did I get her? She’s so beautiful, cute, gorgeous… is it luck, or is she truly my soulmate?” 💖 Yes, we fight, but we always come back—because love isn’t about perfection. It’s about reshaping, growing, and holding on. 🌷 True love isn’t the absence of fights—it’s the courage to choose each other after every storm. 🌧️❤️ And for me, leaving her has never been an option. She cares for me like a mother, stands with me in my career, holds me emotionally, and supports me in every storm. At last, she is my everything—my best, my peace, my forever. ✨",
      image: "18.jpg"
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
