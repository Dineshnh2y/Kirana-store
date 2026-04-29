import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Categories', href: '#categories' },
  { label: 'Best Sellers', href: '#bestsellers' },
  { label: 'Deals', href: '#deals' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-md group-hover:bg-primary-700 transition-colors">
              <ShoppingBag className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl text-neutral-900 leading-tight">
                Jyothi
              </span>
              <span className="text-[10px] sm:text-xs text-neutral-500 font-medium -mt-0.5 tracking-wide">
                Kirana & General Store
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 xl:px-4 py-2 text-sm font-medium text-neutral-600 hover:text-primary-700 rounded-lg hover:bg-primary-50 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-primary-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
            <a href="#contact" className="btn-primary text-sm py-2.5 px-5">
              Order Now
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-neutral-700 hover:bg-neutral-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-neutral-100 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 text-neutral-700 font-medium rounded-xl hover:bg-primary-50 hover:text-primary-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 pb-1 flex flex-col gap-2">
            <a
              href="tel:+919876543210"
              className="btn-outline text-sm py-2.5"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
            <a href="#contact" className="btn-primary text-sm py-2.5">
              Order Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
