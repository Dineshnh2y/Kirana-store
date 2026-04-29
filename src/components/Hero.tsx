import { ArrowRight, MapPin, Clock, Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Hero() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-warm-50" />
      <div className="absolute top-20 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-primary-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-warm-200/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-accent-200/20 rounded-full blur-3xl" />

      <div ref={ref} className="container-max section-padding pt-24 sm:pt-28 lg:pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-6 sm:space-y-8 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="section-label">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse-soft" />
              Trusted by 500+ families
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-neutral-900 leading-[1.1]">
              Your Daily Essentials,{' '}
              <span className="gradient-text">Delivered with Care</span>
            </h1>

            <p className="section-subtitle text-neutral-600">
              From fresh groceries to your favorite chocolates, everything you need
              is right around the corner. Quality products, fair prices, and a
              smile that makes every visit special.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#categories" className="btn-primary text-base py-3.5 px-8">
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#contact" className="btn-whatsapp text-base py-3.5 px-8">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.032-.967-.273-.099-.473-.048-.672.149-.199.198-.758.771-.927.927-.169.149-.339.223-.636.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.672-1.623-.922-2.223-.242-.587-.489-.497-.672-.497-.174 0-.371-.025-.568-.025s-.521.075-.795.371c-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.274 9.274 0 01-4.732-1.297l-.339-.201-3.514.923.937-3.428-.218-.347a9.233 9.233 0 01-1.415-4.931c0-5.098 4.147-9.234 9.256-9.234 2.472 0 4.798 1.022 6.543 2.845a9.182 9.182 0 012.713 6.542c-.002 5.098-4.147 9.234-9.257 9.234m7.885-17.12A12.966 12.966 0 0012.05 0C5.395 0 .029 5.364.027 12.02c0 2.11.55 4.17 1.595 5.99L0 24l6.135-1.61A12.88 12.88 0 0012.05 24.04c6.657 0 12.023-5.364 12.025-12.02a11.94 11.94 0 00-3.514-8.494z"/>
                </svg>
                Order on WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6 pt-2">
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <MapPin className="w-4 h-4 text-primary-600" />
                <span>Right in your neighborhood</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <Clock className="w-4 h-4 text-primary-600" />
                <span>Open 7 AM - 10 PM</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <Star className="w-4 h-4 text-warm-500 fill-warm-500" />
                <span>4.8 rated by locals</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className={`relative ${isInView ? 'animate-fade-in animate-delay-300' : 'opacity-0'}`}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/10">
                <img
                  src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Jyothi Kirana Store - Fresh groceries and daily essentials"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating cards */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-neutral-100 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 fill-primary-600" />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900 text-sm sm:text-base">4.8 Rating</p>
                    <p className="text-xs sm:text-sm text-neutral-500">500+ happy families</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-neutral-100 animate-float animate-delay-500">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-warm-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-warm-600" />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900 text-sm sm:text-base">15 Hrs</p>
                    <p className="text-xs sm:text-sm text-neutral-500">Open daily</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
