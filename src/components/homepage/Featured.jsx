import Link from "next/link";
import PetCard from "@/components/common/PetCard";
import pets from "@/data/pets.json";
import { ArrowRight } from "lucide-react";

const FeaturedPets = () => {
  // Slice the first 6 pets for the featured section
  const featuredPets = pets.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-[1280px] px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl  font-(family-name:--font-lilita) text-[#193EAC]">
            Featured Pets
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-(family-name:--font-open-sans) text-lg">
            Meet some of our adorable friends who are looking for a forever home. 
            They are healthy, vaccinated, and ready to play!
          </p>
        </div>

        {/* Pets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPets.map((pet) => (
            <PetCard key={pet._id} pet={pet} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link 
            href="/all-pets"
            className="w-fit mx-auto border-2 flex gap-2 border-[#193EAC] text-[#193EAC] hover:bg-[#193EAC] hover:text-white font-bold font-(family-name:--font-open-sans) py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            View All Pets
            <ArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedPets;