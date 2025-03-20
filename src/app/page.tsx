import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestmonialCards from "@/components/TestmonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <HeroSection/>
   <FeaturedCourses/>
   <WhyChooseUs/>
   <TestmonialCards/>
   </>
  );
}
