import FloatingHearts from '@/components/FloatingHearts';
import HeroSection from '@/components/HeroSection';
import PhotoGallery from '@/components/PhotoGallery';
import Timeline from '@/components/Timeline';
import FinalCelebration from '@/components/FinalCelebration';

const Index = () => {
  return (
    <div className="relative overflow-x-hidden">
      <FloatingHearts />
      <HeroSection />
      <Timeline />
      <PhotoGallery />
      <FinalCelebration />
    </div>
  );
};

export default Index;
