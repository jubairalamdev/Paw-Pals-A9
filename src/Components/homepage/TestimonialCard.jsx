import Image from 'next/image';

const TestimonialCard = ({item}) => {
    return (
        <div className="w-80 md:w-96 bg-white rounded-2xl p-8 mb-10 shadow-md mx-4 flex flex-col gap-4 border-t-4 border-[#F85C72] relative overflow-hidden group">
            {/* Quote Icon */}
            <div className="text-[#F85C72]/30 text-5xl font-serif leading-none">
                &ldquo;
            </div>

            {/* Text */}
            <p className="text-[#1a535c]/80 text-base leading-relaxed font-medium">
                {item.quote}
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4 mt-2">
                <Image
                    src={item.image}
                    width={50}
                    height={50}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#1a535c]/20 bg-[#f7fff7] p-1"
                />
                <div>
                    <h4 className="text-[#1a535c] font-bold text-sm">
                        {item.name}
                    </h4>
                    <p className="text-[#F85C72] text-xs font-medium uppercase tracking-wide">
                        {item.role}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;