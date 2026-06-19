import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = () => {
  return (
    // Section with Background Color and Background Pattern
    <section 
      className="relative w-full bg-[#d3e4f1] pt-10 md:pt-20 overflow-hidden"
    >
      {/* Background Pattern Image */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src="/images/banner-bg.png"
          alt="Background Pattern"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto max-w-300 px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* --- Left Side: Text & Buttons --- */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-(family-name:--font-lilita) font- leading-tight text-[#193EAC]">
              Adopt a Pet & <br />
              <span className="text-[#F0AA38]">Change a Life</span>
            </h1>

            {/* Subtitle/Description */}
            <p className="text-lg text-gray-600 font-open-sans max-w-lg mx-auto md:mx-0">
              Find your new best friend among our loving pets waiting for a home. 
              Give them the love they deserve and start your journey today.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
              {/* Primary Button */}
              <Link 
                href="/all-pets"
                className="bg-[#F0AA38] hover:bg-[#d9921f] text-white font-bold font-open-sans py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Adopt Now
              </Link>
              
              {/* Secondary Button */}
              <Link 
                href="/all-pets" // Linking to a section id for smooth scroll later
                className="text-[#193EAC] font-bold font-open-sans py-3 px-8 rounded-full border-2 border-[#193EAC] hover:bg-[#193EAC] hover:text-white transition-all duration-300 flex gap-2"
              >
                View Pets
                <ArrowRight />
              </Link>
            </div>
          </div>

          {/* --- Right Side: Main Banner Image --- */}
          {/* <div className="w-full md:w-1/2 flex justify-center relative"> */}
            {/* Optional: Floating decorative elements can go here later */}
            <div className="relative h-[600px] w-[500px] ">
              <Image
                src="/images/banner.png"
                alt="Happy Pets"
                fill
                className="object-contain drop-shadow-2xl animate-bounce-slow"
                priority
              />
            </div>
          {/* </div> */}

        </div>
      </div>
    </section>
  );
};

export default HomeBanner;