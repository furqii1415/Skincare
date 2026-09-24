import { Star, MapPin, MessageCircle, Sparkles } from 'lucide-react';


const items = [
  { icon: Star, value: '4.5 / 5', label: 'Rating' },
  { icon: MessageCircle, value: '24', label: 'Reviews' },
  { icon: MapPin, value: 'DHA Phase 6', label: 'Lahore' },
  { icon: Sparkles, value: 'Skin & Beauty', label: 'Care Experience' },
];

export default function TrustBar() {
  return (
    <section className="border-y border-cocoa/10 bg-ivory">
      <div className="section-padding py-8 lg:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex items-center justify-center gap-3 lg:px-8 ${
                i < items.length - 1 ? 'lg:border-r border-cocoa/10' : ''
              }`}
            >
              <item.icon className="w-5 h-5 text-champagne flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="font-serif text-lg lg:text-xl text-cocoa leading-none">{item.value}</p>
                <p className="text-xs uppercase tracking-widest text-cocoa/50 mt-1">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
