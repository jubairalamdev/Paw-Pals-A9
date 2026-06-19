import HomeBanner from "@/Components/homepage/Banner";
import FeaturedPets from "@/Components/homepage/Featured";
import HowItWorks from "@/Components/homepage/HowItWorks";
import PetCareTips from "@/Components/homepage/PetCareTips";
import SuccessStories from "@/Components/homepage/SuccessStories";
import Testimonials from "@/Components/homepage/Testimonials";
import WhyChooseUs from "@/Components/homepage/WhyChooseUs";
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
