import React from "react";
import Image from "next/image";
import { 
  MapPin, 
  Calendar, 
  HeartPulse, 
  Syringe, 
  DollarSign, 
  PawPrint 
} from "lucide-react"
import { getPetById } from "@/utils/actions";
import PetAdoptionForm from "@/Components/PetDetails/PetAdoptionForm";

const PetDetailsPage = async({ params }) => {
  const { id } = await params;
  const pet = await getPetById(id);
  // const allRequests = await 
  // console.log(pet)

  // Handle case where pet is not found
  if (!pet) {
    return (
      <div className="min-h-screen -mt-25 pt-35 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold font-(family-name:--font-lilita) text-gray-800 mb-4">
            Pet Not Found
          </h1>
          <p className="text-gray-600">Sorry, we couldn&apos;t find the pet you&apos;re looking for.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen -mt-25 pt-35 bg-gray-50 pb-20">
      <div className="container mx-auto max-w-300 px-6 pt-10">
        
        {/* --- Breadcrumbs (Simple) --- */}
        <div className="text-sm text-gray-500 mb-8 font-(family-name:--font-open-sans)">
          <span className="hover:text-[#193EAC] cursor-pointer">Home</span> / 
          <span className="hover:text-[#193EAC] cursor-pointer mx-1">All Pets</span> / 
          <span className="text-[#193EAC] font-bold ml-1">{pet.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* --- LEFT COLUMN: Pet Details (Spans 2 columns) --- */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Main Image */}
            <div className="relative w-full h-100 md:h-125 rounded-3xl overflow-hidden shadow-xl bg-white">
              <Image
                src={pet.image}
                alt={pet.name}
                fill
                className="object-cover"
                priority
              />
              
            </div>

            {/* Info Cards */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-(family-name:--font-lilita) text-[#193EAC] mb-2">
                    {pet.name}
                  </h1>
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin size={18} />
                    <span className="font-(family-name:--font-open-sans)">{pet.location}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-wide">Adoption Fee</p>
                  <p className="text-3xl font-bold text-[#F0AA38]">${pet.adoptionFee}</p>
                </div>
              </div>

              <hr className="border-gray-100 mb-6" />

              {/* Grid Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <PawPrint className="mx-auto text-[#193EAC] mb-2" />
                  <p className="text-xs text-gray-400 uppercase font-bold">Species</p>
                  <p className="font-bold text-gray-800">{pet.species}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <span className="block text-2xl mb-1">🐾</span>
                  <p className="text-xs text-gray-400 uppercase font-bold">Breed</p>
                  <p className="font-bold text-gray-800">{pet.breed}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <Calendar className="mx-auto text-[#193EAC] mb-2" />
                  <p className="text-xs text-gray-400 uppercase font-bold">Age</p>
                  <p className="font-bold text-gray-800">{pet.age}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <span className="block text-2xl mb-1">⚧️</span>
                  <p className="text-xs text-gray-400 uppercase font-bold">Gender</p>
                  <p className="font-bold text-gray-800">{pet.gender}</p>
                </div>
              </div>

              {/* Health & Vaccination */}
              <div className="flex gap-4 mb-8">
                <div className="flex-1 bg-green-50 p-4 rounded-xl flex items-center gap-3">
                  <HeartPulse className="text-green-600" />
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Health</p>
                    <p className="text-sm font-bold text-gray-800">{pet.healthStatus}</p>
                  </div>
                </div>
                <div className="flex-1 bg-blue-50 p-4 rounded-xl flex items-center gap-3">
                  <Syringe className="text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Vaccination</p>
                    <p className="text-sm font-bold text-gray-800">{pet.vaccinationStatus}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-bold font-(family-name:--font-lilita) text-[#F85C72] mb-3">
                  About {pet.name}
                </h3>
                <p className="text-gray-600 font-(family-name:--font-open-sans) leading-relaxed">
                  {pet.description}
                </p>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Adoption Form (Sticky) --- */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-(family-name:--font-lilita) text-[#193EAC]">
                  Adopt {pet.name}
                </h2>
                <p className="text-sm text-gray-500 mt-2">Fill out the form to request adoption.</p>
              </div>
              <PetAdoptionForm pet={pet}/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PetDetailsPage;