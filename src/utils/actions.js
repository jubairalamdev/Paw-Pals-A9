"use server"

import { auth } from "@/lib/auth";
import { refresh, revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export const getAllPets = async () => {
    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${process.env.NEXT_SERVER_URL}/pets`, {
        headers:{
            authorization: `Bearer ${token}`
        }
    });
    // console.log("this is the token here: ", token)
    return res.json()
}

export const getPetById = async (petId) => {
    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${process.env.NEXT_SERVER_URL}/pets/${petId}`, {
        headers:{
            authorization: `Bearer ${token}`
        }
    });
    return res.json()
}

export const handleAdoption = async (adoptionData) => {
    // console.log(adoptionData)
    const res = await fetch(`${process.env.NEXT_SERVER_URL}/requests`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(adoptionData)
    })
    const data = await res.json()
    // console.log(data)
    if (data.insertedId) {
        return data
    }
    else if (data.error === "You have already submitted a request for this pet.") {
        return "Pet Already Added"
    }
    else {
        return "Something went Wrong"
    }
}

export const getRequestByUserId = async (userId) => {
    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    try {
        const res = await fetch(`${process.env.NEXT_SERVER_URL}/requests/${userId}`, {
            cache: 'no-store', // Prevents caching stale request data
            headers:{
            authorization: `Bearer ${token}`
        }
        });
        // console.log(res)
        const data = await res.json();
        // console.log(data)

        // Convert to a deeply pure plain array before sending to the client tier
        return JSON.parse(JSON.stringify(data));
    } catch (error) {
        console.error("Server Action Fetch Error:", error);
        return [];
    }
};

export const getRequestByPetId = async (petId) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    try {
        const res = await fetch(`${process.env.NEXT_SERVER_URL}/requests/pets/${petId}`, {
            cache: 'no-store',
            headers: {
                authorization: `Bearer ${token}`
            }
        });
        // console.log(res)
        const data = await res.json();
        // console.log(data)

        // Convert to a deeply pure plain array before sending to the client tier
        return JSON.parse(JSON.stringify(data));
    } catch (error) {
        console.error("Server Action Fetch Error:", error);
        return [];
    }
};


// Server Action
export const cancelRequest = async (reqId) => {
    try {
        if (!reqId || typeof reqId !== 'string') {
            return { ok: false, error: "Invalid ID type string provided" };
        }

        const response = await fetch(`${process.env.NEXT_SERVER_URL}/requests/${reqId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            return { ok: false, error: "Backend failed to delete document." };
        }

        revalidatePath("/dashboard/my-requests");
        return { ok: true };
    } catch (error) {
        console.error("Server Action deletion failed:", error);
        return { ok: false, error: "Connection error" };
    }
};

export const deletePet = async (petId) => {
    try {
        const response = await fetch(`${process.env.NEXT_SERVER_URL}/pets/${petId}`, {
            method: 'DELETE',
        });
        refresh("/dashboard/my-listings")
        return { ok: response.ok };
    } catch (error) {
        return { ok: false, error: "Something went wrong" };
    }
};


export const handleAddPet = async (petData) => {

    // console.log(petData)
    const res = await fetch(`${process.env.NEXT_SERVER_URL}/pets`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(petData)
    })
    const data = await res.json()
    // console.log(data)
    if (data.insertedId) {
        return data
    }
    else if (data.error) {
        return "error"
    }
    else {
        return "error"
    }
}

export const getPetsByUserId = async (userId) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`${process.env.NEXT_SERVER_URL}/pets/listings/${userId}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    );
    return res.json()
}

export const getRequestsByPetId = async (petId) => {
    const res = await fetch(`${process.env.NEXT_SERVER_URL}/requests/pets/${petId}`);
    return res.json()
}

export const updatePet = async (petId, formData) => {
    'use server';
    try {
        // 1. Convert the FormData to a plain object so JSON.stringify doesn't send "{}"
        const updatedPet = Object.fromEntries(formData.entries());

        // Convert number fields if your backend expects numbers instead of strings
        if (updatedPet.age) updatedPet.age = Number(updatedPet.age);
        if (updatedPet.adoptionFee) updatedPet.adoptionFee = Number(updatedPet.adoptionFee);

        // 2. Add http:// to prevent the "failed to fetch" network route crash
        const res = await fetch(`${process.env.NEXT_SERVER_URL}/pets/${petId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedPet)
        });

        if (!res.ok) return { success: false };

        const data = await res.json();
        // console.log(data, res)

        refresh("/dashboard/my-listings")
        return data;
    } catch (error) {
        console.error("Fetch failed error:", error);
        return { success: false };
    }
}