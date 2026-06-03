import Image from "next/image";
import Link from "next/link";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-[#f8fafc] pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Fast, Friendly, and Reliable Tech Repairs
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We specialize in fixing phones, tablets, and laptops with a focus on quality service and customer satisfaction. Whether you need a quick screen replacement or have complex hardware issues, you can trust us to get your devices back to their best.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#contact" 
                  className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-bold rounded-lg text-white bg-[#4b6038] hover:bg-[#3d4d2d] transition-colors shadow-md"
                >
                  Get a Quote
                </Link>
                <a 
                  href="https://maps.google.com/?q=2A+The+Gill,+Ulverston+LA12+7BJ,+UK" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center px-6 py-3 border-2 border-[#4b6038] text-base font-bold rounded-lg text-[#4b6038] hover:bg-gray-50 transition-colors"
                >
                  Visit Us Today
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/image_a0a9ce.png"
                alt="TechMend Storefront"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                unoptimized
                priority
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Reviews Section */}
      <Reviews />

      {/* Contact Section */}
      <Contact />

    </div>
  );
}