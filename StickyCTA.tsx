import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function StickyCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col gap-3">
      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-white shadow-lg border border-neutral-100 flex items-center justify-center text-neutral-600 hover:text-primary-600 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Call button */}
      <a
        href="tel:+919876543210"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary-600 shadow-lg shadow-primary-600/30 flex items-center justify-center text-white hover:bg-primary-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>

      {/* WhatsApp button */}
      <a
        href="https://wa.me/919876543210?text=Hi! I'd like to place an order from Jyothi Kirana Store."
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 flex items-center justify-center text-white hover:bg-[#1da851] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 animate-bounce-gentle"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    </div>
  );
}
