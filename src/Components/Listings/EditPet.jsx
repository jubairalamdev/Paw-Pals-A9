import { updatePet } from '@/utils/actions';
import { Edit } from 'lucide-react';
import { refresh } from 'next/cache';
import React from 'react';
import { toast } from 'react-toastify';

const EditPet = ({ pet }) => {

    const updateUserWrapper = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        console.log(pet, formData)
        const result = await updatePet(pet._id, formData);
        if (result && result.modifiedCount) {
            toast.success("Pet Updated successfully!");
        } else {
            toast.error("Failed to update pet.");
        }
    }
    return (
        <>
            <label
                htmlFor="my_modal_30000000001"
                className="flex items-center justify-center gap-1 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-600 text-xs font-bold font-(family-name:--font-open-sans) transition-colors"
            >
                <Edit size={14} /> Edit
            </label>
            <input type="checkbox" id="my_modal_30000000001" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box bg-white min-w-200 text-gray-800">
                    <form className="bg-white rounded-3xl p-8 space-y-6 text-gray-800 mb-10" onSubmit={(e) => updateUserWrapper(e)}>

                        {/* Header */}
                        <div className="mb-6 text-center">
                            <h1 className="text-3xl font-(family-name:--font-lilita) text-[#193EAC]">
                                Edit {pet.name}
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
                                    defaultValue={pet.name}
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
                                    defaultValue={pet.species}
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
                                    defaultValue={pet.breed}
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
                                    defaultValue={pet.age}
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
                                    defaultValue={pet.gender}
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
                                    defaultValue={pet.image}
                                    type="url"
                                    name="image"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#193EAC] outline-none font-(family-name:--font-open-sans)"
                                    placeholder="https://..."
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
                                    defaultValue={pet.healthStatus}
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
                                    defaultValue={pet.vaccinationStatus}
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
                                    defaultValue={pet.location}
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
                                    defaultValue={pet.adoptionFee}
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
                                defaultValue={pet.description}
                                name="description"
                                required
                                rows="4"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#193EAC] outline-none font-(family-name:--font-open-sans) resize-none"
                                placeholder="Tell us about the pet..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className='flex gap-2'>

                            <button
                                type="submit"
                                className="flex-1 bg-[#F0AA38] hover:bg-[#d9921f] text-white text-2xl font-bold py-3 rounded-xl transition-colors font-(family-name:--font-open-sans) shadow-md"
                            >
                                Save
                            </button>
                            <label htmlFor="my_modal_30000000001" className="bg-black text-center rounded-xl text-white text-2xl py-3 flex-1">Close</label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditPet;