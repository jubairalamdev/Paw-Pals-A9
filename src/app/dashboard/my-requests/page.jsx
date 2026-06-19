import { auth } from '@/lib/auth';
import { getRequestByUserId } from '@/utils/actions'; // Assuming this is your util path
import { headers } from 'next/headers';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, FileText, MapPin, ExternalLink } from "lucide-react";
import RequestCard from '@/Components/Requests/Requestcard';

const MyRequestsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const userId = session.user.id;
    const requests = await getRequestByUserId(userId);

    return (
        <div className="p-2 md:p-6 mb-10 bg-gray-50 min-h-98.75 mt-20 rounded-3xl">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-(family-name:--font-lilita) text-[#193EAC]">
                    My Requests
                </h1>
                <p className="text-gray-500 font-(family-name:--font-open-sans) mt-2">
                    Track the status of your adoption applications.
                </p>
            </div>

            {/* Content */}
            {requests && requests.length > 0 ? (
                <div className="space-y-4">
                    {requests.map((request) => (
                        <RequestCard key={request._id} request={request}/>
                    ))}
                </div>
            ) : (
                /* Empty State */
                <div className="flex flex-col items-center justify-center py-4 bg-white rounded-3xl shadow-sm border border-dashed border-gray-300 h-fit">
                    <div className="relative w-100 h-48 mb-6">
                        <Image
                            src="/images/sad-cat.png"
                            alt="No requests"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h3 className="text-2xl font-bold font-(family-name:--font-lilita) text-gray-800 mb-2">
                        No Requests Found
                    </h3>
                    <p className="text-gray-500 font-(family-name:--font-open-sans) mb-6 max-w-md text-center">
                        You haven&apos;t submitted any adoption requests yet. Start looking for your new best friend!
                    </p>
                    <Link
                        href="/all-pets"
                        className="bg-[#193EAC] hover:bg-[#2a52d6] text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg font-(family-name:--font-open-sans)"
                    >
                        Browse Pets
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MyRequestsPage;