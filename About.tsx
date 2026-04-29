import { Heart, Award, Users, Calendar } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const stats = [
  { icon: Users, value: '500+', label: 'Happy Families' },
  { icon: Award, value: '5+', label: 'Years of Service' },
  { icon: Calendar, value: '15', label: 'Hours Open Daily' },
  { icon: Heart, value: '100%', label: 'Quality Assured' },
];

export default function About() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      <div ref={ref} className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className={`relative ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Inside Jyothi Kirana and General Store"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 sm:w-40 sm:h-40 bg-primary-100 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-warm-100 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Right - Content */}
          <div className={`space-y-6 ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="section-label">
              <span className="w-2 h-2 bg-primary-500 rounded-full" />
              Our Story
            </div>
            <h2 className="section-title">
              More Than a Store.{' '}
              <span className="gradient-text">A Part of Your Family.</span>
            </h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                Jyothi Kirana and General Store started with a simple belief: every
                neighborhood deserves a store they can trust. What began as a small
                shop has grown into a place where families know they will always find
                quality products at fair prices.
              </p>
              <p>
                We handpick every item on our shelves. From the freshest groceries to
                the finest stationery, we make sure nothing substandard ever reaches
                your hands. Our store is clean, well-organized, and designed so you
                can find what you need in seconds.
              </p>
              <p>
                But what truly sets us apart is the warmth. We know our customers by
                name, remember their preferences, and always greet them with a smile.
                At Jyothi, you are not just a customer - you are family.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center p-4 rounded-2xl bg-neutral-50">
                    <Icon className="w-5 h-5 text-primary-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
                    <p className="text-xs text-neutral-500 mt-0.5">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
