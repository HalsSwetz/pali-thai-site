'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Menu', href: '/menu' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
  <nav className="container-custom">
    <div className="flex justify-between items-center h-16 md:h-20">
      <Link href="/" className="flex items-center">
        <span className="text-2xl md:text-3xl font-bold text-thai-red font-thai">
          Pali Thai <span className="text-lg text-thai-blue ml-2">ปาลี ไทย</span>
        </span>
      </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-charcoal hover:text-thai-red transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            
            <Link
              href="/order"
              className="text-thai-blue hover:text-thai-red transition-colors font-semibold border-2 border-thai-blue hover:border-thai-red px-4 py-2 rounded transition-all"
            >
              Online Order
            </Link>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <p className="text-sm text-gray-500 italic py-2 border-b border-gray-200">
                East Meets West
              </p>
              
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-charcoal hover:text-thai-red transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/order"
                className="text-thai-blue hover:text-thai-red border-2 border-thai-blue hover:border-thai-red px-6 py-3 rounded font-semibold text-center transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Online Order
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}