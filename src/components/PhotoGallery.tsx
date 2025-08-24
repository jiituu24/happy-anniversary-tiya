import { Card } from '@/components/ui/card';
import coupleImage from '@/assets/couple-silhouette.jpg';

const PhotoGallery = () => {
  // Placeholder photos - you can replace these with your actual photos
const photos = [
  { id: 2, src: "3.jpg", caption: "The Moment 12:51 : What if she say NO" },
  { id: 11, src: "11.jpg", caption: "A moment full of smiles and pure sunshine ☀️💫" }, 
  { id: 4, src: "4.jpg", caption: "The Obsessed Lover " },
  { id: 20, src: "20.jpg", caption: "Dancing with shadows" },
  { id: 12, src: "12.jpg", caption: "Lost in books, found in silence 🤍🤓" },   
  { id: 16, src: "16.jpg", caption: "Star of the stage🌟💫" },
  { id: 5, src: "5.jpg", caption: "Our First Adventure Together 💕🌍" },
  { id: 6, src: "6.jpg", caption: "A little note🌸💕" }, 
  { id: 31, src: "31.jpg", caption: "Peaceful moments with u at the temple 🕊️🌸" }, 
  { id: 24, src: "24.jpg", caption: "Blooming like heather in the breeze 🌿✨" },
  { id: 25, src: "25.jpg", caption: "Green vibes at Eco Park 🌸🌳" },
  { id: 26, src: "26.jpg", caption: "Nature’s hug at Eco Park 🌸☀️" },
  { id: 27, src: "27.jpg", caption: "Official T-shirt stealer 😏❤️" },
  { id: 28, src: "28.jpg", caption: "My little princess 💕🌸" },
  { id: 30, src: "30.jpg", caption: "In peace, with u by my side 🌸✨" },
  { id: 32, src: "32.jpg", caption: "Hands in hands, hearts as one ✨💖" },
  { id: 33, src: "33.jpg", caption: "Once again, it’s time to leave 🚶‍♂️🌙" },
  { id: 34, src: "34.jpg", caption: "Whispers of light in shadow play 🖤🌌”" },
  { id: 35, src: "35.jpg", caption: "A circle of love, forever & always ❤️" },
  { id: 36, src: "36.jpg", caption: "My lil cutiie 💕🌸" },
  { id: 50, src: "50.jpg", caption: "Holding u close, wrapped in peace ✨💕" },
  { id: 51, src: "51.jpg", caption: "Holding u, holding peace" },
  { id: 52, src: "52.jpg", caption: "ur embrace, my calm" },
  { id: 53, src: "53.jpg", caption: "Shining bright with a big ring 💖🌟" },
  { id: 54, src: "54.jpg", caption: "Peace rests in ur hands ✨🌸" },
  { id: 55, src: "55.jpg", caption: "Wild vibes at Alipur Zoo 🐒✨" },
  { id: 37, src: "37.jpg", caption: "With my cutie, my happy place 🌸✨" }, 
  { id: 22, src: "22.jpg", caption: "Smiles are brighter with my cutie 🌷😊" },  
  { id: 49, src: "49.jpg", caption: "Pedaling through peace & joy ✨☀️" },
  { id: 29, src: "29.jpg", caption: "Laughs and fun, even on a call 😄💕" },
  { id: 44, src: "44.jpg", caption: "Moments are better with her ✨🤍" },
  { id: 45, src: "45.jpg", caption: "A promise shines in her hand ✨💕" },
  { id: 46, src: "46.jpg", caption: "Serving cutie vibes 😎💕" },
  { id: 38, src: "38.jpg", caption: "A heart full of joy, a moment to remember ❤️🤍" },
  { id: 41, src: "41.jpg", caption: "Asking her forever, heart in hand ✨🌸" },
  { id: 21, src: "21.jpg", caption: "Saying goodbye to her in Banaras 😢✨" },
  { id: 39, src: "39.jpg", caption: "God knows the rest of the story 💫🕊️" },
  { id: 3, src: "2.jpg", caption: "Heaven feels closer with her 👼💫" },
  { id: 7, src: "55.jpg", caption: "Moments with my angel ✨🌸" }, 

];

  return (
    <section id="gallery" className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Our Beautiful Memories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every photo tells a story of our love, capturing moments that make my heart flutter
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <Card 
              key={photo.id} 
              className="card-romantic overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={photo.src} 
                  alt={photo.caption}
                  className="w-full h-61 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white font-semibold text-lg drop-shadow-lg">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground italic">
            "Every picture captures a piece of my heart that belongs to you" 💖
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;