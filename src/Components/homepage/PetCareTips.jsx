import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Dummy Data for Tips
const tips = [
  {
    id: 1,
    title: "First Week with a New Puppy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCICj00oIn6Re96ll6Kpt06FKhWJx9K8xuJg&s",
    desc: "Essential tips on crate training, feeding schedules, and bonding."
  },
  {
    id: 2,
    title: "Cat Nutrition Basics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxZ21bmkDPPuMlsoe0Mjh4eyXdc12TYDENQ&s",
    desc: "Understanding what your feline friend needs for a healthy diet."
  },
  {
    id: 3,
    title: "Keeping Your Rabbit Active",
    image: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3NodXR0ZXJzdG9jay0yNDk5NDI4Njk1LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6IjEyMDAifX19",
    desc: "Fun toys and exercises to keep your bunny hopping happily."
  }
];

const PetCareTips = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-300 px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl   font-(family-name:--font-lilita) text-[#F85C72] mb-4">
            Pet Care Tips
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-(family-name:--font-open-sans)">
            Expert advice to keep your new companion healthy and happy.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <Link 
              href="#" 
              key={tip.id}
              className="group block bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={tip.image}
                  alt={tip.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl   font-(family-name:--font-lilita) text-[#193EAC] mb-2 group-hover:text-[#F0AA38] transition-colors">
                  {tip.title}
                </h3>
                <p className="text-sm text-gray-500 font-(family-name:--font-open-sans) mb-4">
                  {tip.desc}
                </p>
                <span className="inline-flex items-center text-[#193EAC]   text-sm font-(family-name:--font-open-sans)">
                  Read More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PetCareTips;