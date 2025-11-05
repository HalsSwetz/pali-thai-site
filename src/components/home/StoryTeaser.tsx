import Image from 'next/image';
import Link from 'next/link';

export default function StoryTeaser() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070"
              alt="Chef preparing Thai food"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-thai-red font-semibold text-lg mb-2">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              From Thailand to Colorado
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Pali Thai began in the fall of 2020 at the Palisade Farmer's Market, 
              born from a simple mission: bringing authentic Thai cuisine to our community.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Chef Pam, raised in the Aranyaprathet Region of Thailand, learned to 
              create traditional dishes using time-honored methods and fresh, local ingredients. 
              Her recipes celebrate the diverse regions of Thailand with the hope of 
              sharing the beauty and love of her native country.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Today, we operate from our food truck, serving the Palisade and Grand Junction 
              area with the same passion that started it all. We're excited to announce 
              our upcoming restaurant, where we'll continue this journey with expanded 
              seating and an enhanced dining experience.
            </p>
            <Link
              href="/about"
              className="inline-block bg-colorado-green text-white px-6 py-3 rounded-full hover:bg-colorado-sage transition-colors font-medium"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}