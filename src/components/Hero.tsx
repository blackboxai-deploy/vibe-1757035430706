import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-red-600 via-red-700 to-orange-600">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4fa30f34-0646-4b79-bebe-0137a58e29a8.png"
          alt="Authentic Mexican restaurant interior with warm lighting and colorful decor"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="block">Authentic</span>
          <span className="block text-yellow-400">TACOS</span>
          <span className="block text-2xl md:text-3xl lg:text-4xl font-light">
            in the Heart of Safi
          </span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience traditional Mexican flavors made fresh daily with locally sourced ingredients. 
          From street-style tacos to homemade salsas, every bite tells a story of authentic cuisine.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
            <Link href="/menu">View Our Menu</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3">
            <Link href="/contact">Make Reservation</Link>
          </Button>
        </div>
        
        {/* Location Badge */}
        <div className="mt-12 inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
          <span className="text-sm md:text-base">
            📍 Avenue Mohammed V, Safi, Morocco
          </span>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/10 to-transparent z-15" />
    </section>
  );
};

export default Hero;