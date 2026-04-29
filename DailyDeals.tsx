import { Flame, Clock, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const deals = [
  {
    title: 'Morning Essentials Combo',
    description: 'Milk + Bread + Eggs - Start your day right!',
    price: 120,
    originalPrice: 150,
    savings: 30,
    validTill: 'Today Only',
    image: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Student Stationery Pack',
    description: '5 Notebooks + Pen Set + Pencil Box',
    price: 199,
    originalPrice: 280,
    savings: 81,
    validTill: 'This Week',
    image: 'https://images.pexels.com/photos/6938441/pexels-photo-6938441.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Weekend Treat Box',
    description: 'Ice Cream + Chips + Cool Drink + Chocolate',
    price: 249,
    originalPrice: 340,
    savings: 91,
    validTill: 'Weekend Special',
    image: 'https://images.pexels.com/photos/1352251/pexels-photo-1352251.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function DailyDeals() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section id="deals" className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-warm-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent-400 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="container-max relative z-10">
        <div className={`text-center mb-12 sm:mb-16 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-warm-400 mb-4">
            <Flame className="w-4 h-4" />
            Limited Time Offers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-4">
            Today's Special Deals
          </h2>
          <p className="text-lg sm:text-xl text-primary-200 leading-relaxed max-w-2xl mx-auto">
            Grab these combo offers before they are gone. Fresh deals every day!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {deals.map((deal, i) => (
            <div
              key={deal.title}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/15 transition-all duration-300 group ${
                isInView ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-accent-500 text-white shadow-lg">
                    Save ₹{deal.savings}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-white/20 text-white backdrop-blur-sm">
                    <Clock className="w-3 h-3" />
                    {deal.validTill}
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-bold text-white text-lg mb-1">{deal.title}</h3>
                <p className="text-sm text-primary-200 mb-4">{deal.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-warm-400">₹{deal.price}</span>
                    <span className="text-sm text-primary-300 line-through">₹{deal.originalPrice}</span>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-warm-400 hover:text-warm-300 transition-colors"
                  >
                    Grab Deal
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
