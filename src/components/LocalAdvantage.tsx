import { MapPin, Clock, Shield, Heart, ThumbsUp, Zap } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const advantages = [
  {
    icon: MapPin,
    title: 'Right Next Door',
    description: 'No long drives or waiting for delivery. Walk in, grab what you need, and be on your way.',
    color: 'bg-primary-100 text-primary-600',
  },
  {
    icon: Zap,
    title: 'Zero Waiting Time',
    description: 'Skip the queues of big supermarkets. Quick billing, friendly service, and you are out in minutes.',
    color: 'bg-warm-100 text-warm-600',
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Every product is hand-picked and checked. We never compromise on freshness or quality.',
    color: 'bg-accent-100 text-accent-600',
  },
  {
    icon: Heart,
    title: 'Trusted by Locals',
    description: '500+ families trust us for their daily needs. We have been part of this neighborhood for years.',
    color: 'bg-primary-100 text-primary-600',
  },
  {
    icon: ThumbsUp,
    title: 'Fair Pricing Always',
    description: 'No inflated MRP or hidden charges. Honest prices that keep your monthly budget happy.',
    color: 'bg-warm-100 text-warm-600',
  },
  {
    icon: Clock,
    title: 'Open 15 Hours Daily',
    description: 'From early morning to late night, we are here when you need us. 7 AM to 10 PM, every day.',
    color: 'bg-accent-100 text-accent-600',
  },
];

export default function LocalAdvantage() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-warm-50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div ref={ref} className="container-max relative z-10">
        <div className={`text-center mb-12 sm:mb-16 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="section-label justify-center mb-4">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            Why Choose Us
          </div>
          <h2 className="section-title mb-4">
            The <span className="gradient-text">Local Advantage</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Big stores have big aisles. We have big hearts. Here is why your
            neighborhood chooses Jyothi every day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {advantages.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className={`card-hover p-6 sm:p-8 ${
                  isInView ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-2xl ${adv.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-neutral-900 text-lg mb-2">{adv.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{adv.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
