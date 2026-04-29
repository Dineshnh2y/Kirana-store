import { TrendingUp, BadgePercent } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const products = [
  {
    name: 'Toor Dal',
    category: 'Groceries',
    price: 145,
    originalPrice: 160,
    unit: '/kg',
    badge: 'Best Seller',
    image: 'https://images.pexels.com/photos/725998/pexels-photo-725998.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Basmati Rice',
    category: 'Groceries',
    price: 180,
    originalPrice: 200,
    unit: '/kg',
    badge: 'Popular',
    image: 'https://images.pexels.com/photos/13065480/pexels-photo-13065480.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Classmate Notebook',
    category: 'Stationery',
    price: 45,
    originalPrice: 50,
    unit: '',
    badge: 'Student Pick',
    image: 'https://images.pexels.com/photos/6938441/pexels-photo-6938441.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Coca-Cola',
    category: 'Cool Drinks',
    price: 40,
    originalPrice: 45,
    unit: '/2L',
    badge: 'Chilled',
    image: 'https://images.pexels.com/photos/544965/pexels-photo-544965.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Amul Ice Cream',
    category: 'Ice Creams',
    price: 60,
    originalPrice: 70,
    unit: '',
    badge: 'Refreshing',
    image: 'https://images.pexels.com/photos/1352251/pexels-photo-1352251.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Dairy Milk Silk',
    category: 'Chocolates',
    price: 80,
    originalPrice: 90,
    unit: '',
    badge: 'Treat',
    image: 'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function BestSellers() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section id="bestsellers" className="section-padding bg-gradient-to-b from-neutral-50 to-white relative">
      <div ref={ref} className="container-max">
        <div className={`text-center mb-12 sm:mb-16 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="section-label justify-center mb-4">
            <TrendingUp className="w-4 h-4" />
            Most Popular
          </div>
          <h2 className="section-title mb-4">
            Best Sellers & <span className="gradient-text">Daily Essentials</span>
          </h2>
          <p className="section-subtitle mx-auto">
            The items our customers reach for every day. Fresh, affordable, and always in stock.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`card-hover group text-center ${
                isInView ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="relative aspect-square overflow-hidden rounded-t-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-accent-500 text-white shadow-sm">
                    <BadgePercent className="w-3 h-3" />
                    {product.badge}
                  </span>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-[10px] sm:text-xs font-medium text-primary-600 mb-0.5">{product.category}</p>
                <h3 className="font-bold text-neutral-900 text-sm sm:text-base mb-1.5">{product.name}</h3>
                <div className="flex items-center justify-center gap-1.5">
                  <span className="font-bold text-neutral-900 text-sm sm:text-lg">
                    ₹{product.price}
                  </span>
                  <span className="text-neutral-400 text-xs sm:text-sm line-through">
                    ₹{product.originalPrice}
                  </span>
                  <span className="text-neutral-500 text-xs">{product.unit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-10 sm:mt-12 ${isInView ? 'animate-slide-up animate-delay-700' : 'opacity-0'}`}>
          <a href="#contact" className="btn-outline">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
