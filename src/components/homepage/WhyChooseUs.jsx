import Image from "next/image";
import { ShieldCheck, Heart, Clock, MessageCircle } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[600px]">
      
      {/* --- Left Column: Content (Bg: #E7F0F7) --- */}
      <div className="w-full md:w-1/2 bg-[#E7F0F7] flex items-center justify-center p-10 md:p-20">
        <div className="max-w-md w-full space-y-8">
          
          {/* Section Title */}
          <div>
            <h2 className="text-3xl md:text-4xl font-(family-name:--font-lilita) text-[#193EAC] mb-2">
              Why Choose Us?
            </h2>
            <div className="h-1 w-20 bg-[#F0AA38] rounded-full"></div>
            <p className="mt-4 text-gray-600 font-(family-name:--font-open-sans)">
              We provide a safe and loving environment for every pet, ensuring they find the perfect forever home.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Feature 1 */}
            <div className="flex flex-col gap-3 group">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#F85C72] shadow-sm group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="font-bold text-[#193EAC] font-(family-name:--font-open-sans)">
                  Verified Pets
                </h3>
                <p className="text-xs text-gray-500">Health checked & vaccinated.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-3 group">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#F85C72] shadow-sm group-hover:scale-110 transition-transform">
                <Heart size={24} />
              </div>
              <div>
                <h3 className="font-bold text-[#193EAC] font-(family-name:--font-open-sans)">
                  Loving Care
                </h3>
                <p className="text-xs text-gray-500">Raised in safe environments.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col gap-3 group">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#F85C72] shadow-sm group-hover:scale-110 transition-transform">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-[#193EAC] font-(family-name:--font-open-sans)">
                  Fast Process
                </h3>
                <p className="text-xs text-gray-500">Quick & easy adoption steps.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col gap-3 group">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#F85C72] shadow-sm group-hover:scale-110 transition-transform">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3 className="font-bold text-[#193EAC] font-(family-name:--font-open-sans)">
                  24/7 Support
                </h3>
                <p className="text-xs text-gray-500">We help you every step.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- Right Column: Background Image --- */}
      <div className="w-full md:w-1/2 relative h-[400px] md:h-auto bg-gray-200">
        <Image
          src="/images/home-about.png"
          alt="Why Choose Us Background"
          fill
          className="object-cover"
          priority
        />
      </div>

    </section>
  );
};

export default WhyChooseUs;