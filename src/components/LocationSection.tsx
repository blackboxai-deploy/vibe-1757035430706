import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { contactInfo, restaurantHours } from '@/lib/menu-data';

const LocationSection = () => {
  const today = new Date().toLocaleDateString('en', { weekday: 'long' });
  const todayHours = restaurantHours.find(h => h.day === today);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visit Us in Safi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Located in the heart of Safi, we're easy to find and ready to serve you 
            authentic Mexican cuisine in a warm, welcoming atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📍 Location & Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                <p className="text-gray-600">
                  {contactInfo.address.street}<br />
                  {contactInfo.address.city}, {contactInfo.address.country}<br />
                  {contactInfo.address.postalCode}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                <a 
                  href={`tel:${contactInfo.phone}`} 
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  {contactInfo.phone}
                </a>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                <a 
                  href={`mailto:${contactInfo.email}`} 
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-semibold text-gray-900 mb-2">Follow Us</h4>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={contactInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                      Facebook
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={contactInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Opening Hours */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🕒 Opening Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {restaurantHours.map((hours) => (
                  <div 
                    key={hours.day}
                    className={`flex justify-between items-center py-2 px-3 rounded-lg ${
                      hours.day === today ? 'bg-red-50 border border-red-200' : ''
                    }`}
                  >
                    <span className={`font-medium ${hours.day === today ? 'text-red-800' : 'text-gray-900'}`}>
                      {hours.day}
                    </span>
                    <span className={`${hours.day === today ? 'text-red-600 font-semibold' : 'text-gray-600'}`}>
                      {hours.isClosed ? 'Closed' : `${hours.open} - ${hours.close}`}
                    </span>
                  </div>
                ))}
              </div>
              
              {todayHours && !todayHours.isClosed && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm font-medium">
                    🟢 Open Today: {todayHours.open} - {todayHours.close}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Map Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🗺️ Find Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-square bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c5e077b7-60ca-42d6-92f4-fc76a4529d25.png"
                  alt="Map showing TACO restaurant location on Avenue Mohammed V in Safi, Morocco"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  We're located on the main Avenue Mohammed V, easily accessible 
                  by car or on foot from the city center.
                </p>
                <Button className="w-full" variant="outline">
                  Get Directions
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience Authentic Mexican Flavors?
            </h3>
            <p className="text-gray-600 mb-6">
              Join us for an unforgettable dining experience in the heart of Safi. 
              Reserve your table today!
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Make a Reservation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;