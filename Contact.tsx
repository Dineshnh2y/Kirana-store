import { MapPin, Phone, Clock, MessageCircle, Navigation, Mail } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const storeInfo = {
  address: 'Main Road, Near Bus Stand, Your Area, City - 500001',
  phone: '+91 98765 43210',
  whatsapp: '+91 98765 43210',
  email: 'jyothikirana@gmail.com',
  hours: [
    { day: 'Monday - Saturday', time: '7:00 AM - 10:00 PM' },
    { day: 'Sunday', time: '8:00 AM - 9:00 PM' },
  ],
};

export default function Contact() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section id="contact" className="section-padding bg-neutral-50 relative">
      <div ref={ref} className="container-max">
        <div className={`text-center mb-12 sm:mb-16 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="section-label justify-center mb-4">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            Get in Touch
          </div>
          <h2 className="section-title mb-4">
            Visit Us or <span className="gradient-text">Place an Order</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Walk into our store anytime or reach out via phone or WhatsApp.
            We are always happy to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Cards */}
          <div className={`space-y-4 ${isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
            {/* Map */}
            <div className="card overflow-hidden">
              <div className="aspect-video bg-neutral-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4!2d78.47!3d17.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIzJzI0LjAiTiA3OMKwMjgnMTIuMCJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Store Location"
                  className="absolute inset-0"
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <MapPin className="w-4 h-4 text-primary-600" />
                  {storeInfo.address}
                </div>
                <a
                  href="https://www.google.com/maps/search/kirana+store+near+me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Directions
                </a>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href={`tel:${storeInfo.phone.replace(/\s/g, '')}`}
                className="card-hover p-5 flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">Call Us</p>
                  <p className="text-sm text-neutral-500 mt-0.5">{storeInfo.phone}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${storeInfo.whatsapp.replace(/\s/g, '').replace('+', '')}?text=Hi! I'd like to place an order from Jyothi Kirana Store.`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover p-5 flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">WhatsApp</p>
                  <p className="text-sm text-neutral-500 mt-0.5">Order directly</p>
                </div>
              </a>

              <a
                href={`mailto:${storeInfo.email}`}
                className="card-hover p-5 flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-accent-100 text-accent-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">Email</p>
                  <p className="text-sm text-neutral-500 mt-0.5">{storeInfo.email}</p>
                </div>
              </a>

              <div className="card p-5 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-warm-100 text-warm-600 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">Store Hours</p>
                  {storeInfo.hours.map((h) => (
                    <p key={h.day} className="text-sm text-neutral-500 mt-0.5">
                      {h.day}: {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Order Form */}
          <div className={`${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="card p-6 sm:p-8 h-full">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-neutral-900 mb-2">
                Quick Order
              </h3>
              <p className="text-sm text-neutral-500 mb-6">
                Send us your order and we will have it ready for you!
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                  const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
                  const items = (form.elements.namedItem('items') as HTMLTextAreaElement).value;
                  const message = `Hi! I'd like to place an order:%0A%0AName: ${name}%0APhone: ${phone}%0AItems: ${items}`;
                  window.open(
                    `https://wa.me/${storeInfo.whatsapp.replace(/\s/g, '').replace('+', '')}?text=${message}`,
                    '_blank'
                  );
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="items" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    What do you need?
                  </label>
                  <textarea
                    id="items"
                    name="items"
                    required
                    rows={4}
                    placeholder="E.g., 2kg Toor Dal, 1kg Basmati Rice, 5 Classmate Notebooks, Amul Ice Cream..."
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none"
                  />
                </div>
                <button type="submit" className="btn-whatsapp w-full text-base py-3.5">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.032-.967-.273-.099-.473-.048-.672.149-.199.198-.758.771-.927.927-.169.149-.339.223-.636.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.672-1.623-.922-2.223-.242-.587-.489-.497-.672-.497-.174 0-.371-.025-.568-.025s-.521.075-.795.371c-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.274 9.274 0 01-4.732-1.297l-.339-.201-3.514.923.937-3.428-.218-.347a9.233 9.233 0 01-1.415-4.931c0-5.098 4.147-9.234 9.256-9.234 2.472 0 4.798 1.022 6.543 2.845a9.182 9.182 0 012.713 6.542c-.002 5.098-4.147 9.234-9.257 9.234m7.885-17.12A12.966 12.966 0 0012.05 0C5.395 0 .029 5.364.027 12.02c0 2.11.55 4.17 1.595 5.99L0 24l6.135-1.61A12.88 12.88 0 0012.05 24.04c6.657 0 12.023-5.364 12.025-12.02a11.94 11.94 0 00-3.514-8.494z"/>
                  </svg>
                  Send Order via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
