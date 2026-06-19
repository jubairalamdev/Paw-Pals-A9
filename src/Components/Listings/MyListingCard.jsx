"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Edit, MessageSquare, ExternalLink } from "lucide-react";
import { toast } from "react-toastify";
import RequestsButton from "./RequestsButton";
import { deletePet } from "@/utils/actions";
import EditPet from "./EditPet";

const MyListingCard = ({ pet }) => {
  // Convert MongoDB ObjectId seamlessly into a plain string identifier
  const plainPetId = pet?._id?.toString() || pet?._id || pet?.id;
  
  // Construct a completely distinct modal identifier string for this unique listing entry
  const uniqueDeleteModalId = `delete_modal_${plainPetId}`;

  const handleDelete = async () => {
    if (!plainPetId) {
      toast.error("Failed to target a valid Pet identifier.");
      return;
    }

    try {
      const res = await deletePet(plainPetId);
      
      // Close the specific target modal window using the toggle input checkbox reference
      const checkbox = document.getElementById(uniqueDeleteModalId);
      if (checkbox) checkbox.checked = false;

      toast.success("Pet listing deleted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to complete the pet listing deletion.");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-md transition-all">

      {/* Image */}
      <div className="relative w-full h-48 bg-gray-100">
        <Image
          src={pet.image || "/images/logo.png"}
          alt={pet.name || "Pet image"}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Status Badge */}
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-white shadow-md ${pet.status === 'available' ? 'bg-green-500' : 'bg-[#F85C72]'
          }`}>
          {pet.status}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold font-(family-name:--font-lilita) text-[#193EAC] line-clamp-1">
            {pet.name}
          </h3>
          <span className="text-lg font-bold text-[#F0AA38] font-(family-name:--font-open-sans)">
            ${pet.adoptionFee}
          </span>
        </div>

        <p className="text-sm text-gray-500 font-(family-name:--font-open-sans) mb-4 line-clamp-1">
          {pet.breed} • {pet.species}
        </p>

        {/* Actions Grid */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          {/* View Details */}
          <Link
            href={`/pet-details/${plainPetId}`}
            className="flex items-center justify-center gap-1 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold font-(family-name:--font-open-sans) transition-colors"
          >
            <ExternalLink size={14} /> View
          </Link>

          {/* Requests Component */}
          <RequestsButton pet={pet} />

          {/* Edit Component */}
          <EditPet pet={pet}/>

          {/* Delete Button Label Trigger */}
          <label
            htmlFor={uniqueDeleteModalId}
            className="flex items-center justify-center gap-1 py-2 rounded-lg border border-red-200 hover:bg-red-50 text-red-600 text-xs font-bold font-(family-name:--font-open-sans) transition-colors cursor-pointer"
          >
            <Trash2 size={14} /> Delete
          </label>
          
          {/* Unique Modal Checkbox Controls */}
          <input type="checkbox" id={uniqueDeleteModalId} className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box bg-white text-gray-800">
              <h3 className="text-lg font-bold">Delete Pet?</h3>
              <p className="py-4">Are you sure you want to delete {pet.name}?</p>
              <div className="modal-action">
                <label htmlFor={uniqueDeleteModalId} className="btn">Close!</label>
                <button 
                  className="btn btn-error text-white" 
                  onClick={handleDelete}
                >
                  Confirm Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListingCard;