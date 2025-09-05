import { Metadata } from 'next';
import MenuSection from '@/components/MenuSection';

export const metadata: Metadata = {
  title: 'Menu - TACO, Safi | Authentic Mexican Restaurant',
  description: 'Explore our complete menu of authentic Mexican dishes, from traditional tacos to fresh sides and refreshing beverages. All made fresh daily in Safi.',
  keywords: 'Mexican menu, tacos menu, Safi restaurant menu, authentic Mexican food, carnitas, carne asada, vegetarian tacos',
};

export default function MenuPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Complete Menu
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Discover all our authentic Mexican dishes, crafted with passion 
            and served fresh daily in the heart of Safi.
          </p>
        </div>
      </section>

      {/* Full Menu */}
      <MenuSection showAll={true} />

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Order?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Visit us at our Safi location or make a reservation to guarantee 
            your table for an authentic Mexican dining experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Make Reservation
            </a>
            <a 
              href={`tel:+212 524-123-456`} 
              className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call to Order
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}