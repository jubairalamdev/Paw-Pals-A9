import Link from "next/link";
import Image from "next/image";
import testimonials from "@/data/testimonialsData.json";
import { Quote } from "lucide-react";

const SuccessStories = () => {
  // Show first 3 stories
  const stories = testimonials.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto max-w-300 px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-(family-name:--font-lilita) text-[#F85C72] mb-4">
            Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-(family-name:--font-open-sans)">
            Real stories from families who found their new best friends at Paw Pals.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div 
              key={story.id} 
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <Quote className="text-[#F0AA38] mb-4" size={32} />
              <p className="text-gray-600 font-(family-name:--font-open-sans) italic mb-6 grow leading-relaxed">
                &quot;{story.quote}&ldquo;
              </p>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#193EAC] font-(family-name:--font-lilita)">
                    {story.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-(family-name:--font-open-sans) uppercase tracking-wide">
                    {story.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SuccessStories;