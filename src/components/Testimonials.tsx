import { Star, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    name: 'Lakshmi R.',
    role: 'Regular Customer',
    text: 'I have been buying groceries from Jyothi store for over 5 years. The quality is always top-notch and the prices are very reasonable. The owner remembers my usual items!',
    rating: 5,
  },
  {
    name: 'Ravi Kumar',
    role: 'College Student',
    text: 'Best stationery shop nearby! They have everything I need for my studies. The notebooks and pens are always in stock, and the uncle is so friendly.',
    rating: 5,
  },
  {
    name: 'Priya M.',
    role: 'Mother of Two',
    text: 'My kids love the ice cream and chocolate section. It is our go-to store for evening snacks. Clean, well-organized, and the billing is super quick.',
    rating: 5,
  },
  {
    name: 'Suresh Babu',
    role: 'Daily Shopper',
    text: 'What I love most is the convenience. No long drives, no parking issues. Just walk in, get what I need, and leave. The store is always clean and well-stocked.',
    rating: 4,
  },
];

export default function Testimonials() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section className="section-padding bg-neutral-50 relative">
      <div ref={ref} className="container-max">
        <div className={`text-center mb-12 sm:mb-16 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="section-label justify-center mb-4">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            What People Say
          </div>
          <h2 className="section-title mb-4">
            Loved by <span className="gradient-text">Our Neighbors</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Do not just take our word for it. Hear from the families and friends
            who trust us every day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`card p-6 sm:p-8 relative ${
                isInView ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-primary-100 mb-3" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${
                      j < t.rating
                        ? 'text-warm-400 fill-warm-400'
                        : 'text-neutral-200'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed mb-5">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-700">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">{t.name}</p>
                  <p className="text-xs text-neutral-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-10 sm:mt-12 ${isInView ? 'animate-fade-in animate-delay-700' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-sm border border-neutral-100">
            <div className="flex -space-x-2">
              {['S', 'L', 'R', 'P'].map((initial, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-primary-100 flex items-center justify-center"
                >
                  <span className="text-xs font-bold text-primary-700">{initial}</span>
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="font-bold text-neutral-900 text-sm">500+ Happy Families</p>
              <p className="text-xs text-neutral-400">and counting every day</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
