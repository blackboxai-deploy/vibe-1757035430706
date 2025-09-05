import { Metadata } from 'next';
import AboutSection from '@/components/AboutSection';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About Us - TACO, Safi | Our Story & Mission',
  description: 'Learn about TACO, Safi - our passion for authentic Mexican cuisine, our story, and our commitment to bringing traditional flavors to Morocco.',
  keywords: 'about TACO Safi, Mexican restaurant story, authentic Mexican food Morocco, Safi restaurant history',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Authenticity',
      description: 'We stay true to traditional Mexican recipes and cooking methods, using authentic ingredients and techniques passed down through generations.',
      icon: '🌮',
    },
    {
      title: 'Quality',
      description: 'Every ingredient is carefully selected for freshness and quality. We believe great food starts with great ingredients.',
      icon: '⭐',
    },
    {
      title: 'Community',
      description: 'We are proud to be part of the Safi community, creating a gathering place where friends and families can share amazing food.',
      icon: '🤝',
    },
    {
      title: 'Passion',
      description: 'Our love for Mexican cuisine and culture drives everything we do, from the kitchen to your table.',
      icon: '❤️',
    },
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-red-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Story
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Bringing the authentic flavors of Mexico to the beautiful city of Safi, 
            one taco at a time.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-0">
        <div className="aspect-[21/9] overflow-hidden">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6ebe2e02-43c4-4b6f-bac9-c0c7fa655dab.png"
            alt="TACO Safi restaurant team including chef and staff in authentic Mexican kitchen"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Main About Section */}
      <AboutSection />

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do at TACO, Safi, from how we 
              prepare our food to how we serve our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From a dream to reality - the story of how TACO, Safi came to life.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  2019
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">The Dream Begins</h3>
                  <p className="text-gray-600">
                    Our founder discovered authentic Mexican cuisine during travels and 
                    dreamed of bringing these incredible flavors to Morocco.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  2020
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Research & Learning</h3>
                  <p className="text-gray-600">
                    Intensive research into authentic Mexican cooking techniques, 
                    ingredient sourcing, and traditional recipes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  2021
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Finding Home in Safi</h3>
                  <p className="text-gray-600">
                    Chose Safi as our home base, drawn by the city's warmth and 
                    the perfect location on Avenue Mohammed V.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  2022
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">TACO, Safi Opens</h3>
                  <p className="text-gray-600">
                    Officially opened our doors to the Safi community, serving our 
                    first authentic tacos with pride and excitement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  Now
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Serving Our Community</h3>
                  <p className="text-gray-600">
                    Proud to be part of Safi's dining scene, continuously improving 
                    and growing while maintaining our commitment to authenticity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Our Story?
          </h2>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Come visit us and taste the passion and authenticity that goes into 
            every dish we serve. We can't wait to welcome you to our TACO, Safi family!
          </p>
          <a 
            href="/contact" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Visit Us Today
          </a>
        </div>
      </section>
    </div>
  );
}