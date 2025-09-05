import { Metadata } from 'next';
import ReservationForm from '@/components/ReservationForm';
import LocationSection from '@/components/LocationSection';

export const metadata: Metadata = {
  title: 'Contact & Reservations - TACO, Safi | Book Your Table',
  description: 'Contact TACO, Safi for reservations, inquiries, or to learn more about our authentic Mexican restaurant. Located on Avenue Mohammed V in Safi, Morocco.',
  keywords: 'TACO Safi contact, restaurant reservations, Mexican restaurant Safi, book table, restaurant phone number',
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-red-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Ready to experience authentic Mexican cuisine? Get in touch with us 
            for reservations, inquiries, or just to say hello!
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ReservationForm />
        </div>
      </section>

      {/* Contact Information */}
      <LocationSection />

      {/* Additional Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Other Ways to Reach Us
              </h2>
              <p className="text-lg text-gray-600">
                We're here to help and answer any questions you might have
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phone */}
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">
                  For immediate assistance or to make a reservation by phone
                </p>
                <a 
                  href="tel:+212524123456" 
                  className="text-red-600 hover:text-red-700 font-semibold text-lg"
                >
                  +212 524-123-456
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  Available during business hours
                </p>
              </div>

              {/* Email */}
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📧</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">
                  Send us your questions, feedback, or special requests
                </p>
                <a 
                  href="mailto:info@tacosafi.ma" 
                  className="text-red-600 hover:text-red-700 font-semibold"
                >
                  info@tacosafi.ma
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  We respond within 24 hours
                </p>
              </div>

              {/* Visit */}
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏪</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">
                  Come by our restaurant for the full TACO, Safi experience
                </p>
                <p className="font-semibold text-gray-900">
                  Avenue Mohammed V<br />
                  Safi, Morocco
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Walk-ins welcome!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do I need a reservation?
                </h3>
                <p className="text-gray-600">
                  While walk-ins are welcome, we recommend making a reservation, especially for dinner 
                  and weekends, to ensure we have a table ready for you.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you offer vegetarian options?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We have several delicious vegetarian options including our Tacos Vegetarianos, 
                  fresh guacamole, and various sides that are perfect for vegetarian diners.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What are your busiest times?
                </h3>
                <p className="text-gray-600">
                  We're typically busiest during lunch (12:00-14:00) and dinner (19:00-21:00), 
                  especially on weekends. For a quieter experience, consider visiting during off-peak hours.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you cater events or parties?
                </h3>
                <p className="text-gray-600">
                  Yes! We offer catering services for special events and parties. Contact us directly 
                  to discuss your needs and we'll create a custom package for you.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Is parking available?
                </h3>
                <p className="text-gray-600">
                  Yes, there is street parking available on Avenue Mohammed V and nearby streets. 
                  Our location is also easily accessible by public transportation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            We Can't Wait to Serve You!
          </h2>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Whether you're craving authentic tacos, looking for a great place to dine with friends, 
            or planning a special celebration, TACO, Safi is here for you.
          </p>
          <a 
            href="tel:+212524123456" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Call Now: +212 524-123-456
          </a>
        </div>
      </section>
    </div>
  );
}