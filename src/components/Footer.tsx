import Link from 'next/link';
import { contactInfo, restaurantHours } from '@/lib/menu-data';

const Footer = () => {
  const today = new Date().toLocaleDateString('en', { weekday: 'long' });
  const todayHours = restaurantHours.find(h => h.day === today);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold text-red-500">TACO</div>
              <div className="text-lg text-gray-300">Safi</div>
            </div>
            <p className="text-gray-400 mb-4">
              Authentic Mexican cuisine in the heart of Safi, Morocco. 
              Fresh flavors, traditional recipes, warm hospitality.
            </p>
            <div className="flex gap-3">
              <a 
                href={contactInfo.socialMedia.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a 
                href={contactInfo.socialMedia.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact & Reservations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <div>
                <div className="font-medium text-white mb-1">Address</div>
                <div className="text-sm">
                  {contactInfo.address.street}<br />
                  {contactInfo.address.city}, {contactInfo.address.country}
                </div>
              </div>
              <div>
                <div className="font-medium text-white mb-1">Phone</div>
                <a href={`tel:${contactInfo.phone}`} className="text-red-400 hover:text-red-300">
                  {contactInfo.phone}
                </a>
              </div>
              <div>
                <div className="font-medium text-white mb-1">Email</div>
                <a href={`mailto:${contactInfo.email}`} className="text-red-400 hover:text-red-300">
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            {todayHours && (
              <div className="mb-3 p-2 bg-red-600 rounded-lg">
                <div className="text-sm font-medium">Today ({today})</div>
                <div className="text-sm">
                  {todayHours.isClosed ? 'Closed' : `${todayHours.open} - ${todayHours.close}`}
                </div>
              </div>
            )}
            <div className="text-sm text-gray-400">
              <div>Mon-Wed: 11:00 - 22:00</div>
              <div>Thu: 11:00 - 22:30</div>
              <div>Fri-Sat: 11:00 - 23:00</div>
              <div>Sun: 12:00 - 21:00</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 TACO, Safi. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Made with ❤️ in Safi, Morocco
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;