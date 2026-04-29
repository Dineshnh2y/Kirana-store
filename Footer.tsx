import { ShoppingBag, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-lg text-white leading-tight">Jyothi</p>
                <p className="text-[10px] text-neutral-400 tracking-wide">Kirana & General Store</p>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
              Your trusted neighborhood store for quality groceries, stationery,
              cool drinks, ice creams, and chocolates.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {['Home', 'Categories', 'Best Sellers', 'Deals', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Categories</h4>
            <ul className="space-y-2.5">
              {['Groceries', 'Stationery', 'Cool Drinks', 'Ice Creams', 'Chocolates'].map((cat) => (
                <li key={cat}>
                  <a
                    href="#categories"
                    className="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-neutral-400">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  Main Road, Near Bus Stand, City
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-500">
            &copy; {currentYear} Jyothi Kirana and General Store. All rights reserved.
          </p>
          <p className="text-xs text-neutral-500 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> for our community
          </p>
        </div>
      </div>
    </footer>
  );
}
