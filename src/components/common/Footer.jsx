import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaXTwitter, FaYoutube,   } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#193EAC] text-white pt-16 pb-8">
      {/* Background Pattern Image (Same as Banner) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src="/images/banner-bg.png"
          alt="Footer Background Pattern"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="container mx-auto max-w-[1280px] px-6 relative z-10">
        
        {/* --- Logo Area --- */}
        <div className="flex flex-col items-center justify-center mb-12">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-80 h-16">
              <Image
                src="/images/logo-white.png"
                alt="Paw Pals Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <p className="mt-4 text-center text-blue-100 max-w-md font-(family-name:--font-open-sans)">
            Connecting loving hearts with paws in need. Adopt, {"don't"} shop.
          </p>
        </div>

        {/* --- 4 Columns Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Keep Updated (Subscription) */}
          <div className="space-y-4">
            <h3 className="text-xl font-(family-name:--font-lilita) text-[#F0AA38]">
              Keep Updated
            </h3>
            <p className="text-sm text-blue-100">
              Subscribe to our newsletter to get the latest news about our furry friends.
            </p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-blue-200 focus:outline-none focus:border-[#F0AA38]"
              />
              <button className="bg-[#F0AA38] hover:bg-[#d9921f] text-[#193EAC] font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                Subscribe <Send size={16} />
              </button>
            </div>
          </div>

          {/* Column 2: Other Pages */}
          <div className="space-y-4">
            <h3 className="text-xl font-(family-name:--font-lilita) text-[#F0AA38]">
              Other Pages
            </h3>
            <ul className="space-y-2 font-(family-name:--font-open-sans)">
              <li><Link href="#" className="hover:text-[#F0AA38] hover:translate-x-1 transition-all inline-block">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#F0AA38] hover:translate-x-1 transition-all inline-block">Our Team</Link></li>
              <li><Link href="#" className="hover:text-[#F0AA38] hover:translate-x-1 transition-all inline-block">Success Stories</Link></li>
              <li><Link href="#" className="hover:text-[#F0AA38] hover:translate-x-1 transition-all inline-block">Pet Care Tips</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl  font-(family-name:--font-lilita) text-[#F0AA38]">
              Quick Links
            </h3>
            <ul className="space-y-2 font-(family-name:--font-open-sans)">
              <li><Link href="#" className="hover:text-[#F0AA38] hover:translate-x-1 transition-all inline-block">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#F0AA38] hover:translate-x-1 transition-all inline-block">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-[#F0AA38] hover:translate-x-1 transition-all inline-block">Support Center</Link></li>
              <li><Link href="#" className="hover:text-[#F0AA38] hover:translate-x-1 transition-all inline-block">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Our Store (Contact) */}
          <div className="space-y-4">
            <h3 className="text-xl  font-(family-name:--font-lilita) text-[#F0AA38]">
              Contact Us
            </h3>
            <ul className="space-y-3 font-(family-name:--font-open-sans)">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#F0AA38] shrink-0 mt-1" />
                <span>123 Puppy Lane, Pet City, NY 10012</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#F0AA38] shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#F0AA38] shrink-0" />
                <span>support@pawpals.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* --- Bottom Bar --- */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-blue-200 font-(family-name:--font-open-sans)">
            &copy; 2025 Paw Pals. All rights reserved by Jubair Alam
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F0AA38] hover:text-[#193EAC] transition-all">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F0AA38] hover:text-[#193EAC] transition-all">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F0AA38] hover:text-[#193EAC] transition-all">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F0AA38] hover:text-[#193EAC] transition-all">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;