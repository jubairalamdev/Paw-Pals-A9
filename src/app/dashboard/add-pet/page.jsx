"use client"

import { authClient } from '@/lib/auth-client';
import { handleAddPet } from '@/utils/actions';
import React from 'react';
import { toast } from 'react-toastify';

const AddPetPage = () => {
  const { data: session, isPending } = authClient.useSession();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const petData = {
            name: formData.get("name"),
            species: formData.get("species"),
            breed: formData.get("breed"),
            age: formData.get("age"),
            gender: formData.get("gender"),
            image: formData.get("image"),
            healthStatus: formData.get("healthStatus"),
            vaccinationStatus: formData.get("vaccinationStatus"),
            location: formData.get("location"),
            adoptionFee: formData.get("adoptionFee"),
            description: formData.get("description"),
            userId: session?.user.id,
            userEmail: session?.user.email
        };
        const result = await handleAddPet(petData);
        if (result && result.insertedId) {
            toast.success("Pet added successfully!");
        } else {
            toast.error("Failed to add pet.");
        }
    };

    return (
        <form className="bg-white rounded-3xl shadow-xl p-8 space-y-6 text-gray-800 mt-20 mb-10" onSubmit={(e) => handleSubmit(e)}>

            {/* Header */}
            <div className="mb-6 text-center">
                <h1 className="text-3xl font-(family-name:--font-lilita) text-[#193EAC]">
                    Add New Pet
                </h1>
                <p className="text-gray-500 font-(family-name:--font-open-sans) text-sm mt-1">
                    Fill in the details to list a pet for adoption.
                </p>
            </div>

            {/* --- Basic Info --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 font-(family-name:--font-open-sans) mb-2">
                        Name *
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#193EAC] focus:ring-1 focus:ring-[#193EAC] outline-none font-(family-name:--font-open-sans)"
                        placeholder="e.g. Coco"
                    />
                </div>

                {/* Species */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 font-(family-name:--font-open-sans) mb-2">
                        Species *
                    </label>
                    <select
                        name="species"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#193EAC] outline-none font-(family-name:--font-open-sans) bg-white"
                    >
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Rabbit">Rabbit</option>
                        <option value="Bird">Bird</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Breed */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 font-(family-name:--font-open-sans) mb-2">
                        Breed *
                    </label>
                    <input
                        type="text"
                        name="breed"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#193EAC] outline-none font-(family-name:--font-open-sans)"
                        placeholder="e.g. Holland Lop"
                    />
                </div>

                {/* Age */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 font-(family-name:--font-open-sans) mb-2">
                        Age *
                    </label>
                    <input
                        type="text"
                        name="age"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#193EAC] outline-none font-(family-name:--font-open-sans)"
                        placeholder="e.g. 6 Months"
                    />
                </div>

                {/* Gender */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 font-(family-name:--font-open-sans) mb-2">
                        Gender *
                    </label>
                    <select
                        name="gender"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#193EAC] outline-none font-(family-name:--font-open-sans) bg-white"
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                {/* Image URL */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 font-(family-name:--font-open-sans) mb-2">
                        Image URL *
                    </label>
                    <input
                        type="url"
                        name="image"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#193EAC] outline-none font-(family-name:--font-open-sans)"
                        placeholder="Image Link"
                    />
                </div>
            </div>

            {/* --- Health & Status --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Health Status */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 font-(family-name:--font-open-sans) mb-2">
                        Health Status *
                    </label>
                    <select
                        name="healthStatus"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#193EAC] outline-none font-(family-name:--font-open-sans) bg-white"
                    >
                        <option value="Healthy">Healthy</option>
                        <option value="Needs Checkup">Needs Checkup</option>
                        <option value="Special Care">Special Care</option>
                    </select>
                </div>

                {/* Vaccination Status */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 font-(family-name:--font-open-sans) mb-2">
                        Vaccination Status *
                    </label>
                    <select
                        name="vaccinationStatus"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#193EAC] outline-none font-(family-name:--font-open-sans) bg-white"
                    >
                        <option value="Up to date">Up to date</option>
                        <option value="Partial">Partial</option>
                        <option value="Not Required">Not Required</option>
                        <option value="N/A">N/A</option>
                    </select>
                </div>

                {/* Location */}
                <div className="md:col-span-1">
                    <label className="block text-sm font-bold text-gray-700 font-(family-name:--font-open-sans) mb-2">
                        Location *
                    </label>
                    <input
                        type="text"
                        name="location"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#193EAC] outline-none font-(family-name:--font-open-sans)"
                        placeholder="e.g. Austin, TX"
                    />
                </div>
                <div className='md:col-span-1'>
                    <label className="block text-sm font-bold text-gray-700 font-(family-name:--font-open-sans) mb-2">
                        Adoption Fee ($) *
                    </label>
                    <input
                        type="number"
                        name="adoptionFee"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#193EAC] outline-none font-(family-name:--font-open-sans)"
                        placeholder="50"
                    />
                </div>
            </div>

            {/* Description */}
            <div>
                <label className="block text-sm font-bold text-gray-700 font-(family-name:--font-open-sans) mb-2">
                    Description *
                </label>
                <textarea
                    name="description"
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#193EAC] outline-none font-(family-name:--font-open-sans) resize-none"
                    placeholder="Tell us about the pet..."
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-[#F0AA38] hover:bg-[#d9921f] text-white text-2xl font-bold py-3 rounded-xl transition-colors font-(family-name:--font-open-sans) shadow-md"
            >
                Add Pet
            </button>

        </form>
    );
};

export default AddPetPage;