"use client";

import { getRequestByPetId } from '@/utils/actions';
import { MessageSquare } from 'lucide-react';
import React, { useState } from 'react';

const RequestsButton = ({ pet }) => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasFetched, setHasFetched] = useState(false);

    // Fetch data dynamically ONLY when the user clicks the open button
    const handleOpenModal = async () => {
        // If we already fetched data for this modal, don't refetch unless needed
        if (hasFetched) return;

        setLoading(true);
        try {
            const data = await getRequestByPetId(pet._id);
            // console.log(data)
            setRequests(Array.isArray(data) ? data : []);
            setHasFetched(true);
        } catch (error) {
            console.error("Error fetching requests:", error);
        } finally {
            setLoading(false);
        }
    };

    const modalId = `modal_${pet._id}`;

    return (
        <>
            <label
                htmlFor={modalId}
                onClick={handleOpenModal}
                className="flex items-center justify-center gap-1 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#193EAC] text-xs font-bold font-(family-name:nt-open-sans) transition-colors cursor-pointer"
            >
                <MessageSquare size={14} /> Requests
            </label>

            <input type="checkbox" id={modalId} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box bg-white text-gray-800">
                    <h3 className="text-xl font-bold">Adoption Requests for {pet.name}</h3>
                    <p className="mt-5 font-bold mb-3">Users who Requested: </p>

                    {loading ? (
                        <p className="text-sm text-gray-400 animate-pulse">Loading requests...</p>
                    ) : requests.length === 0 ? (
                        <p className="text-sm text-gray-500 italic">No adoption requests found.</p>
                    ) : (
                        <div className="space-y-3">
                            {requests.map((req,index) => (
                                <div className="flex  items-center gap-3 p-2 border border-gray-400 rounded-lg" key={req._id}>
                                    <span className="font-bold text-gray-950"> {index+1}. {req.userName}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="modal-action">
                        <label htmlFor={modalId} className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 border-none">Close!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RequestsButton;