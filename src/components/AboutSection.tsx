import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const features = [
    {
      title: 'Fresh Daily',
      description: 'All our ingredients are sourced fresh daily from local markets in Safi',
      icon: '🌱',
    },
    {
      title: 'Authentic Recipes',
      description: 'Traditional Mexican recipes passed down through generations',
      icon: '👨‍🍳',
    },
    {
      title: 'Local Touch',
      description: 'A unique blend of Mexican flavors with Moroccan hospitality',
      icon: '🏺',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About TACO, Safi
            </h2>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-4">
                Welcome to TACO, Safi – where authentic Mexican cuisine meets the warm 
                hospitality of Morocco. Located in the heart of Safi, we bring you the 
                vibrant flavors and traditions of Mexico, crafted with passion and served 
                with love.
              </p>
              <p className="mb-4">
                Our journey began with a simple mission: to share the authentic taste of 
                Mexico with the beautiful people of Safi. Every taco is handmade, every 
                salsa is prepared fresh, and every dish tells a story of tradition, 
                quality, and dedication to the craft.
              </p>
              <p>
                From our signature carnitas slow-cooked to perfection, to our fresh 
                guacamole made table-side, we believe that great food brings people 
                together. Come experience the flavors that have made Mexican cuisine 
                beloved worldwide, right here in Safi.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-4">
                    <div className="text-2xl mb-2">{feature.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2d91519f-69b2-4b1e-81d2-a2bfdc927716.png"
                  alt="Chef preparing fresh tacos in authentic Mexican kitchen"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1956e6f9-ba89-4e24-88b7-45f9ba747730.png"
                  alt="Fresh ingredients and colorful vegetables for authentic Mexican cooking"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6500695c-c1db-4d89-81ec-e06eed688f42.png"
                  alt="Traditional Mexican restaurant dining room with warm atmosphere"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/af61dadf-2373-4cb0-84aa-ba7b0085072e.png"
                  alt="Happy customers enjoying authentic tacos in restaurant"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-red-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">5+</div>
              <div className="text-red-100">Years Serving Safi</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-red-100">Signature Dishes</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
              <div className="text-red-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">7</div>
              <div className="text-red-100">Days a Week</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;