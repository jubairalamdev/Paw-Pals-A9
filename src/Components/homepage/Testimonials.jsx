import Marquee from "react-fast-marquee";
import testimonialsData from "@/data/testimonialsData.json";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {

    return (
        <section className="bg-[#fff] py-20 overflow-hidden">

            {/* Section Title - Primary Color */}
            <div className="text-center mb-16 px-4">
                <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-lilita)] text-[#193EAC] mb-3">
                    Loved by {" "}
                    <span className="">
                        Everyone
                    </span>
                </h2>
                <p className="text-[#1a535c]/60 max-w-xl mx-auto">
                    See what our community members have to say about their experience.
                </p>
            </div>

            {/* Row 1: Left to Right */}
            <div className="">
                <Marquee gradient={false} speed={40} pauseOnHover={true}>
                    {testimonialsData.map(item => (
                        <TestimonialCard key={item.id} item={item} />
                    ))}
                </Marquee>
            </div>

            {/* Row 2: Right to Left */}
            <div className="">
                <Marquee direction="right" gradient={false} speed={40} pauseOnHover={true} className="pb-5">
                    {testimonialsData.map(item => (
                        <TestimonialCard key={item.id} item={item} />
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Testimonials;