"use client"

import { authClient } from "@/lib/auth-client";
import { handleAdoption } from "@/utils/actions";
import { useState } from "react";
import { toast } from "react-toastify";

const PetAdoptionForm = ({ pet }) => {
    const [adoptionDate, setAdoptionDate] = useState("");
    const { data: session, isPending } = authClient.useSession();
    // console.log(session)
    const user = session?.user;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user) {
            if (adoptionDate === "") {
                toast.error("Please Set a Adoption Date.")
            } else {
                const adoptionData = {
                    userId: user.id,
                    userName: user.name,
                    petImage: pet.image,
                    petId: pet._id,
                    petName: pet.name,
                    petSpecies: pet.species,
                    petLocation: pet.location,
                    adoptionStatus: pet.status,
                    adoptionDate: new Date(adoptionDate)
                }
                const response = handleAdoption(adoptionData)
                console.log(response)
                if (response) {
                    toast.success(`${adoptionData.petName} is Now Adopted!`)
                }
                else {
                    toast.error("Something went Wrong")
                }
            }
        } else {
            toast.error("Please Login to Adopt a pet.")
        }
    }


    return (
        <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
            {/* Pet Name (Read Only) */}
            <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Pet Name</label>
                <input
                    type="text"
                    defaultValue={pet.name}
                    disabled
                    className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 text-gray-600 cursor-not-allowed"
                />
            </div>

            {/* User Name (Dummy) */}
            <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Your Name</label>
                <input
                    type="text"
                    defaultValue={isPending ? "Loading User..." : user ? `${user.name}` : "Guest"}
                    disabled
                    className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 text-gray-600 cursor-not-allowed"
                />
            </div>

            {/* User Email (Dummy) */}
            <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Your Email</label>
                <input
                    type="email"
                    defaultValue={isPending ? "Loading User..." : user ? `${user.email}` : "example@login.com"}
                    disabled
                    className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 text-gray-600 cursor-not-allowed"
                />
            </div>

            {/* Pickup Date */}
            <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Pickup Date</label>
                <input
                    type="date"
                    name="date"
                    value={adoptionDate}
                    onChange={(e) => setAdoptionDate(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-[#193EAC] font-(family-name:--font-open-sans)"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-[#F85C72] hover:bg-[#e04b61] text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-(family-name:--font-open-sans) text-lg"
            >
                Send Adoption Request
            </button>

            <p className="text-xs text-center text-gray-400 mt-4">
                By clicking, you agree to our terms.
            </p>
        </form>
    )
};

export default PetAdoptionForm;