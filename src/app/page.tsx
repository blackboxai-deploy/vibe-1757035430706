import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import AboutSection from '@/components/AboutSection';
import LocationSection from '@/components/LocationSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <MenuSection maxItemsPerCategory={3} />
      <AboutSection />
      <LocationSection />
    </>
  );
}