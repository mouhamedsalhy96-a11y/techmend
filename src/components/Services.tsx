import { Smartphone, Laptop, Tablet, Gamepad2, Battery, RefreshCw } from "lucide-react";

const services = [
  {
    title: "Phone Repair",
    description: "Screen replacements, battery issues, and hardware fixes for all major smartphone brands.",
    icon: <Smartphone className="w-8 h-8 text-[#4b6038]" />,
  },
  {
    title: "Laptop & MacBook",
    description: "Complex hardware and software problems resolved, returning your device in perfect condition.",
    icon: <Laptop className="w-8 h-8 text-[#4b6038]" />,
  },
  {
    title: "Tablet & iPad",
    description: "Quick fixes for charging ports, broken screens, and power issues on all tablets.",
    icon: <Tablet className="w-8 h-8 text-[#4b6038]" />,
  },
  {
    title: "Console Maintenance",
    description: "Deep cleaning and thermal repairs for overheating consoles like the PS5.",
    icon: <Gamepad2 className="w-8 h-8 text-[#4b6038]" />,
  },
  {
    title: "Battery Upgrades",
    description: "Fast and reliable battery replacements to give your older devices new life.",
    icon: <Battery className="w-8 h-8 text-[#4b6038]" />,
  },
  {
    title: "Buy & Sell",
    description: "We evaluate used phones and devices, offering fair prices for your unwanted tech.",
    icon: <RefreshCw className="w-8 h-8 text-[#4b6038]" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Our Tech Repair Services
          </h2>
          <p className="text-lg text-gray-600">
            From quick screen fixes to complex hardware diagnostics, our expert team is equipped to handle all your tech needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#f8fafc] p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6 border border-gray-100">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}