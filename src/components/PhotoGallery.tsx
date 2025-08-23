import { Card } from '@/components/ui/card';
import coupleImage from '@/assets/couple-silhouette.jpg';

const PhotoGallery = () => {
  // Placeholder photos - you can replace these with your actual photos
  const photos = [
    { id: 1, src: coupleImage, caption: "Our first date 💕" },
    { id: 2, src: coupleImage, caption: "Beach sunset together 🌅" },
    { id: 3, src: coupleImage, caption: "Holiday celebration 🎄" },
    { id: 4, src: coupleImage, caption: "Weekend adventure 🏔️" },
    { id: 5, src: coupleImage, caption: "Cozy movie night 🍿" },
    { id: 6, src: coupleImage, caption: "Dancing under stars ✨" },
    { id: 7, src: coupleImage, caption: "Morning coffee dates ☕" },
    { id: 8, src: coupleImage, caption: "Road trip memories 🚗" },
    { id: 9, src: coupleImage, caption: "Picnic in the park 🧺" }
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
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
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