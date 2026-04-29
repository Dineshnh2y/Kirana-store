import { ShoppingBasket, PenTool, CupSoda, IceCream, Candy, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const categories = [
  {
    icon: ShoppingBasket,
    title: 'Groceries',
    description: 'Fresh produce, rice, dal, spices, oil, and all your daily kitchen needs.',
    color: 'primary',
    items: '200+ items',
    image: 'https://images.pexels.com/photos/2255800/pexels-photo-2255800.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    icon: PenTool,
    title: 'Stationery',
    description: 'Notebooks, pens, art supplies, and everything for school and office.',
    color: 'accent',
    items: '80+ items',
    image: 'https://images.pexels.com/photos/6938441/pexels-photo-6938441.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    icon: CupSoda,
    title: 'Cool Drinks',
    description: 'Chilled beverages, juices, sodas, and refreshing drinks for every season.',
    color: 'primary',
    items: '50+ items',
    image: 'https://images.pexels.com/photos/544965/pexels-photo-544965.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    icon: IceCream,
    title: 'Ice Creams',
    description: 'Popular brands and flavors to cool you down on any day.',
    color: 'accent',
    items: '30+ items',
    image: 'https://images.pexels.com/photos/1352251/pexels-photo-1352251.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    icon: Candy,
    title: 'Chocolates',
    description: 'From everyday treats to premium chocolates, we have it all.',
    color: 'primary',
    items: '40+ items',
    image: 'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const colorMap: Record<string, { bg: string; iconBg: string; iconText: string; border: string }> = {
  primary: {
    bg: 'bg-primary-50',
    iconBg: 'bg-primary-100',
    iconText: 'text-primary-600',
    border: 'border-primary-100',
  },
  accent: {
    bg: 'bg-accent-50',
    iconBg: 'bg-accent-100',
    iconText: 'text-accent-600',
    border: 'border-accent-100',
  },
};

export default function Categories() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section id="categories" className="section-padding bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      <div ref={ref} className="container-max">
        <div className={`text-center mb-12 sm:mb-16 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="section-label justify-center mb-4">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            What We Offer
          </div>
          <h2 className="section-title mb-4">
            Everything You Need, <span className="gradient-text">Under One Roof</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Browse through our wide range of products. From daily groceries to special treats,
            we stock it all at prices that make you smile.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat, i) => {
            const colors = colorMap[cat.color];
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className={`card-hover group overflow-hidden ${
                  isInView ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white bg-white/20 backdrop-blur-sm`}>
                      {cat.items}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl ${colors.iconBg} ${colors.iconText} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 text-lg">{cat.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-4">{cat.description}</p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 group-hover:gap-2.5 transition-all"
                  >
                    Browse items
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
