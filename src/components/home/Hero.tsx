import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=2070"
          alt="Thai food background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      <div className="relative z-10 container-custom text-white">
        <div className="max-w-3xl">
          <p className="text-thai-gold text-xl md:text-2xl font-medium mb-4 tracking-wide">
            East Meets West
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Authentic Thai Cuisine
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Award-winning food truck bringing the flavors of Thailand to Colorado
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/menu"
              className="bg-thai-red text-white px-8 py-4 rounded-full hover:bg-thai-orange transition-colors font-medium text-lg text-center"
            >
              View Menu
            </Link>
            <Link
              href="/schedule"
              className="bg-white text-charcoal px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-medium text-lg text-center"
            >
              Find Us Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}