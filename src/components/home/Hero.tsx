'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function SplitHero() {
  return (
    <section className="relative">
      <div className="absolute top-0 left-0 right-0 z-20 text-center pt-8 md:pt-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg tracking-wide font-thai">
        East Meets West
        </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] md:min-h-[85vh] lg:min-h-[90vh]">
        
        <Link
          href="/menu"
          className="relative group overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=2070"
              alt="Thai cuisine"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-thai-red/30 transition-all duration-500 group-hover:bg-thai-red/50" />
          </div>

          <div className="absolute inset-0 border-4 border-transparent transition-all duration-500 group-hover:border-thai-blue" />

          <div className="relative h-full flex items-center justify-center p-8 md:pt-24">
            <div className="text-center text-white">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg font-thai">
  Explore Our Menu
</h3>
              <p className="text-xl md:text-2xl drop-shadow-md">
                Authentic Thai flavors
              </p>
            </div>
          </div>
        </Link>

        <Link
          href="/schedule"
          className="relative group overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070"
              alt="Colorado landscape"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-colorado-green/30 transition-all duration-500 group-hover:bg-colorado-sage/50" />
          </div>

          <div className="absolute inset-0 border-4 border-transparent transition-all duration-500 group-hover:border-colorado-peach" />

          <div className="relative h-full flex items-center justify-center p-8 md:pt-24">
            <div className="text-center text-white">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                Find Us Today
              </h3>
              <p className="text-xl md:text-2xl drop-shadow-md">
                Follow the truck
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
        <Link
          href="/order"
          className="bg-thai-gold hover:bg-thai-orange text-white px-12 py-4 rounded-full shadow-2xl transition-all transform hover:scale-105 font-bold text-xl"
        >
          Place Online Order
        </Link>
      </div>
    </section>
  );
}