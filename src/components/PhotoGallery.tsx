import { Card } from '@/components/ui/card';
import coupleImage from '@/assets/couple-silhouette.jpg';

const PhotoGallery = () => {
  // Placeholder photos - you can replace these with your actual photos
const photos = [
  // { id: 1, src: "1.jpg", caption: "First Meet" },
  { id: 2, src: "3.jpg", caption: "The Moment 12:51 : What if she say NO" },
  { id: 11, src: "11.jpg", caption: "" }, 
  { id: 4, src: "4.jpg", caption: "The Obsessed Lover " },
  { id: 20, src: "20.jpg", caption: "" },
  { id: 12, src: "12.jpg", caption: "" },   
  { id: 16, src: "16.jpg", caption: "" },
  { id: 5, src: "5.jpg", caption: "1st Trip Together" },
  { id: 6, src: "6.jpg", caption: "The Lovely Note" }, 
  { id: 31, src: "31.jpg", caption: "" }, 
  // { id: 13, src: "13.jpg", caption: "" },
  // { id: 15, src: "15.jpg", caption: "" },
  // { id: 18, src: "18.jpg", caption: "" },
  { id: 24, src: "24.jpg", caption: "" },
  { id: 25, src: "25.jpg", caption: "" },
  { id: 26, src: "26.jpg", caption: "" },
  { id: 27, src: "27.jpg", caption: "" },
  { id: 28, src: "28.jpg", caption: "" },
  { id: 30, src: "30.jpg", caption: "" },
  { id: 32, src: "32.jpg", caption: "" },
  { id: 33, src: "33.jpg", caption: "" },
  { id: 34, src: "34.jpg", caption: "" },
  { id: 35, src: "35.jpg", caption: "" },
  { id: 36, src: "36.jpg", caption: "" },
  { id: 50, src: "50.jpg", caption: "" },
  { id: 51, src: "51.jpg", caption: "" },
  { id: 52, src: "52.jpg", caption: "" },
  { id: 53, src: "53.jpg", caption: "" },
  { id: 54, src: "54.jpg", caption: "" },
  { id: 55, src: "55.jpg", caption: "" },
  { id: 37, src: "37.jpg", caption: "" },
  // { id: 17, src: "17.jpg", caption: "" },    
  { id: 22, src: "22.jpg", caption: "" },  
  { id: 49, src: "49.jpg", caption: "" },
  { id: 29, src: "29.jpg", caption: "" },
  // { id: 14, src: "14.jpg", caption: "" },
  // { id: 8, src: "8.jpg", caption: "First Meet" },
  { id: 44, src: "44.jpg", caption: "" },
  { id: 45, src: "45.jpg", caption: "" },
  { id: 46, src: "46.jpg", caption: "" },
  // { id: 9, src: "9.jpg", caption: "" },
  // { id: 10, src: "10.jpg", caption: "" },
  // { id: 40, src: "40.jpg", caption: "" },
  { id: 38, src: "38.jpg", caption: "" },
  { id: 41, src: "41.jpg", caption: "" },
  { id: 21, src: "21.jpg", caption: "" },
  { id: 39, src: "39.jpg", caption: "" },
  { id: 3, src: "2.jpg", caption: "The fhjsegvfluheavfi 🥰" },
  // { id: 19, src: "19.jpg", caption: "" },
  // { id: 42, src: "42.jpg", caption: "" },
  // { id: 48, src: "48.jpg", caption: "" },
  // { id: 47, src: "47.jpg", caption: "" },
  { id: 7, src: "55.jpg", caption: "An Aesthetic one" }, 

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