import Link from 'next/link';

const links = [
  {
    title: 'View Menu',
    description: 'Explore our authentic Thai dishes with customizable options',
    href: '/menu',
    color: 'bg-thai-red hover:bg-thai-orange',
  },
  {
    title: 'Find Us',
    description: 'Check our weekly schedule to find where we\'ll be serving',
    href: '/schedule',
    color: 'bg-colorado-green hover:bg-colorado-sage',
  },
  {
    title: 'Order Online',
    description: 'Place your order ahead for quick pickup',
    href: '/order',
    color: 'bg-thai-gold hover:bg-thai-orange',
  },
];

export default function QuickLinks() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-charcoal mb-12">
          Get Started
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`${link.color} text-white p-8 rounded-lg transition-all transform hover:scale-105 shadow-lg`}
            >
              <h3 className="text-2xl font-bold mb-3">{link.title}</h3>
              <p className="text-lg">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}