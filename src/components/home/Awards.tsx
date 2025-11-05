import Image from 'next/image';

export default function Awards() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-thai-gold rounded-full flex items-center justify-center">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">2024</p>
                <p className="text-lg md:text-xl font-semibold text-white">Food Truck</p>
                <p className="text-lg md:text-xl font-semibold text-white">of the Year</p>
              </div>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Award-Winning Excellence
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-4">
              Pali Thai was honored with the{' '}
              <span className="text-thai-red font-semibold">
                Colorado Restaurant Association's Food Truck of the Year
              </span>{' '}
              award in November 2024.
            </p>
            <p className="text-lg text-gray-600">
              This recognition celebrates our commitment to authentic Thai cuisine, 
              local ingredients, and exceptional service to our community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}