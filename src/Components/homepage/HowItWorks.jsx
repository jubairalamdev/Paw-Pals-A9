import { Search, FileText, Heart, Home } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search size={32} />,
      number: "01",
      title: "Browse Pets",
      desc: "Look through our available pets and find the one that steals your heart."
    },
    {
      icon: <FileText size={32} />,
      number: "02",
      title: "Apply Online",
      desc: "Fill out a simple adoption form to express your interest in a specific pet."
    },
    {
      icon: <Heart size={32} />,
      number: "03",
      title: "Meet & Greet",
      desc: "Visit our shelter or arrange a meet-up to get to know your future companion."
    },
    {
      icon: <Home size={32} />,
      number: "04",
      title: "Welcome Home",
      desc: "Complete the adoption paperwork and bring your new best friend home!"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-300 px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl   font-(family-name:--font-lilita) text-[#F85C72] mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-(family-name:--font-open-sans)">
            Adopting a pet is easy. Follow these 4 simple steps to find your new family member.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group flex flex-col items-center text-center p-6 rounded-3xl hover:bg-blue-50/50 transition-colors duration-300"
            >
              {/* Step Number (Absolute Background) */}
              <span className="absolute top-2 right-8 text-8xl font-black text-gray-100 font-(family-name:--font-lilita) -z-10 group-hover:text-blue-100 transition-colors">
                {step.number}
              </span>

              {/* Icon Circle */}
              <div className="w-20 h-20 bg-[#193EAC] text-white rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl   font-(family-name:--font-lilita) text-[#193EAC] mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 font-(family-name:--font-open-sans) leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;