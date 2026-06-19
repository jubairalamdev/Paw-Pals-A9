"use client";

import { useState, useEffect } from "react";
import PetCard from "@/components/common/PetCard";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineSort } from "react-icons/md";
import Image from "next/image";

const AllPetsPage = ({pets}) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [filteredPets, setFilteredPets] = useState(pets);
  console.log(pets)

  // Filter & Sort Logic (Instant update without loading delay)
  useEffect(() => {
    let result = pets.filter((pet) => {
      // MongoDB $regex simulation (Case-insensitive search)
      const matchesSearch = pet.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      // MongoDB $in simulation
      const matchesSpecies =
        selectedSpecies === "All" || pet.species === selectedSpecies;

      return matchesSearch && matchesSpecies;
    });

    // Sorting Logic
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.adoptionFee - b.adoptionFee);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.adoptionFee - a.adoptionFee);
    }

    setFilteredPets(result);
  }, [searchTerm, selectedSpecies, sortBy]);

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* --- Header Section --- */}
      <div className="bg-[#193EAC] text-white pt-45 -mt-25 pb-16 px-6 text-center relative overflow-hidden">
        {/* Background Pattern Opacity */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="w-full h-full bg-[url('/images/banner-bg.png')] bg-cover bg-center"></div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-(family-name:--font-lilita) relative z-10">
          Find Your Perfect Companion
        </h1>
        <p className="mt-4 text-blue-100 max-w-2xl mx-auto font-(family-name:--font-open-sans) relative z-10">
          Browse through hundreds of adorable pets waiting for a loving home.
        </p>
      </div>

      {/* --- Filter Bar (Option A: Horizontal) --- */}
      <div className="container mx-auto max-w-300 px-6 -mt-8 relative z-20">
        <div className="bg-white p-4 rounded-xl shadow-lg flex flex-col md:flex-row gap-4 items-center justify-between border border-gray-100">
          
          {/* Search Input */}
          <div className="relative w-full md:w-1/3">
            <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-[#193EAC] focus:ring-1 focus:ring-[#193EAC] font-(family-name:--font-open-sans) text-gray-700"
            />
          </div>

          {/* Filter Dropdown */}
          <div className="relative w-full md:w-1/4">
            <select
              value={selectedSpecies}
              onChange={(e) => setSelectedSpecies(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-[#193EAC] font-(family-name:--font-open-sans) text-gray-700 appearance-none bg-white cursor-pointer"
            >
              <option value="All">All Species</option>
              <option value="Dog">Dogs</option>
              <option value="Cat">Cats</option>
              <option value="Bird">Birds</option>
              <option value="Rabbit">Rabbits</option>
            </select>
          </div>

          {/* Sort Dropdown */}
          <div className="relative w-full md:w-1/4">
            <MdOutlineSort className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg pointer-events-none" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-[#193EAC] font-(family-name:--font-open-sans) text-gray-700 appearance-none bg-white cursor-pointer"
            >
              <option value="default">Sort By: Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>

        </div>
      </div>

      {/* --- Pets Grid --- */}
      <div className="container mx-auto max-w-300 px-6 mt-12">
        
        {/* Results Count */}
        <p className="text-gray-500 font-(family-name:--font-open-sans) mb-6">
          Showing <span className="font-bold text-[#193EAC]">{filteredPets.length}</span> pets
        </p>

        {/* Grid */}
        {filteredPets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPets.map((pet) => (
              <PetCard key={pet._id} pet={pet} />
            ))}
          </div>
        ) : (
          /* No Results State */
          <main className="flex flex-col justify-center items-center bg-white">
            <Image 
                src="/images/sad-cat.png"
                alt='Sad Cat'
                width={400}
                height={400}
            />
            <h3 className="text-xl md:text-3xl font-(family-name:--font-lilita) font- leading-tight text-[#646464]">
              Uh oh! I {"couldn't"} find any pets for you
            </h3>
        </main>
        )}
      </div>
    </div>
  );
};

export default AllPetsPage;