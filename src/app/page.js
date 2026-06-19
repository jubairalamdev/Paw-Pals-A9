import HomeBanner from "@/components/homepage/Banner";
import FeaturedPets from "@/components/homepage/Featured";
import HowItWorks from "@/components/homepage/HowItWorks";
import PetCareTips from "@/components/homepage/PetCareTips";
import SuccessStories from "@/components/homepage/SuccessStories";
import Testimonials from "@/components/homepage/Testimonials";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <FeaturedPets />
      <WhyChooseUs />
      <HowItWorks />
      <PetCareTips />
      <SuccessStories />
    </>
  );
}
