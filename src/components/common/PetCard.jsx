import Link from "next/link";
import Image from "next/image";

const PetCard = ({ pet }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-2">
      {/* Image Wrapper */}
      <div className="relative w-full h-64 overflow-hidden bg-gray-100">
        <Image
          src={pet.image}
          alt={pet.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Species Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-[#193EAC] shadow-sm">
          {pet.species}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-start mb-2">
          {/* Name */}
          <h3 className="text-2xl font-(family-name:--font-lilita) text-[#193EAC] group-hover:text-[#F0AA38] transition-colors">
            {pet.name}
          </h3>
        </div>
        
        {/* Meta Info */}
        <div className="text-sm text-gray-500 font-(family-name:--font-open-sans) mb-4 space-y-1">
          <p className="flex items-center gap-2">
            <span>Breed:</span> 
            <span className="font-medium text-gray-800">{pet.breed}</span>
          </p>
          <p className="flex items-center gap-2">
            <span>Location:</span> 
            <span className="font-medium text-gray-800">{pet.location}</span>
          </p>
        </div>

        {/* Price / Fee */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 uppercase font-bold">Adoption Fee</p>
            <p className="text-xl font-bold text-[#F0AA38]">${pet.adoptionFee}</p>
          </div>
          
          {/* View Details Button */}
          <Link 
            href={`/pet-details/${pet._id}`}
            className="bg-[#193EAC] hover:bg-[#2a52d6] text-white font-bold font-(family-name:--font-open-sans) py-2 px-5 rounded-full transition-colors duration-300 shadow-md"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetCard;