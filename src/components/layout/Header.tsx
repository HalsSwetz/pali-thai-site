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
            <span className="text-2xl md:text-3xl font-bold text-thai-red">
              Pali Thai
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-charcoal hover:text-thai-red transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/order"
              className="bg-thai-red text-white px-6 py-2 rounded-full hover:bg-thai-orange transition-colors font-medium"
            >
              Order Now
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
                className="bg-thai-red text-white px-6 py-3 rounded-full hover:bg-thai-orange transition-colors font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Order Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}