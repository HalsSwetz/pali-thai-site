import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-2xl font-bold text-thai-gold mb-4">Pali Thai</h3>
            <p className="text-gray-300">
              Authentic Thai cuisine meets Colorado hospitality
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-thai-gold transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-gray-300 hover:text-thai-gold transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-thai-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-thai-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <p className="text-gray-300 mb-2">Palisade, Colorado</p>
            <p className="text-gray-300 mb-4">Phone: (555) 123-4567</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-thai-gold transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-thai-gold transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Pali Thai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}