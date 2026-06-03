import Image from "next/image";
import Link from "next/link";
import { Phone, Wrench } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-[#4b6038] p-1.5 rounded-lg flex items-center justify-center">
                <Image
                  src="/image_a0a997.png"
                  alt="TechMend Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="font-extrabold text-2xl text-[#4b6038] tracking-tight">
                TECH<span className="font-light">MEND</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-[#4b6038] font-medium transition-colors">Services</Link>
            <Link href="#reviews" className="text-gray-600 hover:text-[#4b6038] font-medium transition-colors">Reviews</Link>
            <Link href="#contact" className="text-gray-600 hover:text-[#4b6038] font-medium transition-colors">Contact Us</Link>
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+441229403127" 
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-bold rounded-lg text-white bg-[#4b6038] hover:bg-[#3d4d2d] transition-all shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4 mr-2" />
              +44 1229 403127
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}