import { auth } from '@/lib/auth';
import { getPetsByUserId } from '@/utils/actions';
import { headers } from 'next/headers';
import MyListingCard from '@/Components/Listings/MyListingCard';
import { Plus } from 'lucide-react';

const MyListingsPage = async() => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const userId = session.user.id;
    const pets = await getPetsByUserId(userId);

    // Calculate Stats
    const totalListings = pets.length;
    const availablePets = pets.filter(p => p.status === 'available').length;
    const adoptedPets = pets.filter(p => p.status === 'adopted').length;

    return (
        <div className="p-6 md:p-10 bg-gray-50 min-h-100 mt-20 mb-10 rounded-3xl">
            
            {/* Header & Stats */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold font-(family-name:--font-lilita) text-[#193EAC]">
                        My Listings
                    </h1>
                    <p className="text-gray-500 font-(family-name:--font-open-sans) mt-1">
                        Manage your pets and adoption requests.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 w-full md:w-auto">
                    <div className="bg-[#193EAC] text-white p-4 rounded-2xl shadow-lg text-center min-w-25">
                        <p className="text-2xl font-bold font-(family-name:--font-lilita)">{totalListings}</p>
                        <p className="text-xs font-(family-name:--font-open-sans) opacity-90">Total</p>
                    </div>
                    <div className="bg-white text-green-600 p-4 rounded-2xl shadow-sm border border-gray-100 text-center min-w-25">
                        <p className="text-2xl font-bold font-(family-name:--font-lilita)">{availablePets}</p>
                        <p className="text-xs font-(family-name:--font-open-sans) text-gray-500">Available</p>
                    </div>
                    <div className="bg-white text-[#F0AA38] p-4 rounded-2xl shadow-sm border border-gray-100 text-center min-w-25">
                        <p className="text-2xl font-bold font-(family-name:--font-lilita)">{adoptedPets}</p>
                        <p className="text-xs font-(family-name:--font-open-sans) text-gray-500">Adopted</p>
                    </div>
                </div>
            </div>

            {/* Add Pet Button (Mobile/Desktop) */}
            <div className="mb-8 flex justify-end">
                <a 
                    href="/dashboard/add-pet"
                    className="bg-[#193EAC] hover:bg-[#2a52d6] text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-all shadow-lg font-(family-name:--font-open-sans)"
                >
                    <Plus size={20} /> Add New Pet
                </a>
            </div>

            {/* Pets Grid */}
            {pets && pets.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pets.map((pet) => (
                        <MyListingCard key={pet._id} pet={pet} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-dashed border-gray-300">
                    <p className="text-gray-500 font-(family-name:--font-open-sans) text-lg">No listings found.</p>
                    <a href="/dashboard/add-pet" className="text-[#193EAC] font-bold underline mt-2 inline-block">Add your first pet</a>
                </div>
            )}

        </div>
    );
};

export default MyListingsPage;