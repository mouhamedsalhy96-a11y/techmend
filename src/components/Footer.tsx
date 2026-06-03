import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="font-extrabold text-2xl text-white tracking-tight mb-4 inline-block">
              TECH<span className="font-light text-[#4b6038]">MEND</span>
            </span>
            <p className="text-gray-400 mb-4 max-w-xs leading-relaxed">
              Your go-to destination for fast, friendly, and reliable tech repairs in Ulverston.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#services" className="hover:text-[#4b6038] transition-colors">Services</Link></li>
              <li><Link href="#reviews" className="hover:text-[#4b6038] transition-colors">Reviews</Link></li>
              <li><Link href="#contact" className="hover:text-[#4b6038] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal / Copyright */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Business Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li><span className="text-gray-500">Tue - Fri:</span> 10:00 AM - 5:00 PM</li>
              <li><span className="text-gray-500">Sat - Mon:</span> Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} TechMend. All rights reserved.</p>
          <p>Designed for local tech support.</p>
        </div>
      </div>
    </footer>
  );
}