"use client"

import { cancelRequest } from '@/utils/actions';
import { Calendar, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-toastify';

const RequestCard = ({ request }) => {

    const getStatusBadge = (status) => {
        switch (status) {
            case 'available':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'adopted':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    // Safely extract a pure string ID regardless of how MongoDB structures it
    const plainStringId = request?._id?.toString() || request?._id || request?.id;
    // Create a dynamic unique ID for this card's modal toggle 
    const uniqueModalId = `modal_${plainStringId}`;

    const handleCancelRequest = async (requestIdToDelete) => {
        if (!requestIdToDelete || typeof requestIdToDelete !== 'string') {
            toast.error("Unable to resolve a valid string ID for this request.");
            return;
        }

        // console.log("🚀 Sending clean text hex string to Server Action:", requestIdToDelete);

        const res = await cancelRequest(requestIdToDelete);
        
        if (res && res.ok) {
            // Close the modal programmatically by unchecking the hidden input toggle
            const checkbox = document.getElementById(uniqueModalId);
            if (checkbox) checkbox.checked = false;

            toast.success("Request cancelled successfully!");
        } else {
            toast.error(res?.error || "Failed to cancel request");
        }
    };

    return (
        <div
            key={plainStringId}
            className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-center transition-all hover:shadow-md"
        >
            {/* Pet Info (Left) */}
            <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                    <Image
                        src={request?.petImage || "/images/logo.png"} 
                        alt={request?.petName || "Request Image"}
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <div className='flex gap-2'>
                        <h3 className="text-2xl font-(family-name:--font-lilita) text-[#193EAC]">
                            {request?.petName || "Unknown Pet"}
                        </h3>
                        <span className={`px-2 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border ${getStatusBadge(request.adoptionStatus)}`}>
                            {request.adoptionStatus}
                        </span>
                    </div>
                    <p className="text-sm text-gray-500 font-(family-name:--font-open-sans)">
                        {request?.petLocation} • {request?.petSpecies}
                    </p>
                </div>
            </div>

            {/* Vertical Divider (Desktop) */}
            <div className="hidden md:block w-px h-16 bg-gray-200"></div>

            {/* Request Details (Middle) */}
            <div className="flex-1 w-full grid grid-cols-1 gap-4">
                <div className="flex items-center gap-3">
                    <Calendar size={18} className="text-gray-400" />
                    <div>
                        <p className="text-xs text-gray-400 uppercase font-bold">Request Date</p>
                        <p className="text-sm font-bold text-gray-800">{request.adoptionDate}</p>
                    </div>
                </div>
            </div>

            {/* Status & Action (Right) */}
            <div className="flex flex-col items-end gap-2 w-full md:w-auto">
                <Link
                    href={`/pet-details/${request.petId}`}
                    className="btn btn-primary text-white rounded-full font-bold text-sm hover:underline flex items-center gap-1"
                >
                    View Details <ExternalLink size={14} />
                </Link>
                <label
                    htmlFor={uniqueModalId}
                    className="btn btn-error rounded-full text-white font-bold text-sm hover:underline flex items-center gap-1"
                >
                    Cancel Request
                </label>
                
                <input type="checkbox" id={uniqueModalId} className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box bg-white text-gray-800">
                        <h3 className="text-lg font-bold">Cancel Adoption Request?</h3>
                        <p className="py-4">Are you sure you want to cancel Adoption for {request.petName}?</p>
                        <div className="modal-action">
                            <label htmlFor={uniqueModalId} className="btn">Close!</label>
                            <button 
                                className="btn btn-error text-white" 
                                // Explicitly call using arrow notation and pass string ID variable down
                                onClick={() => handleCancelRequest(plainStringId)}
                            >
                                Confirm Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestCard;