import Image from "next/image";
import { AppHero } from "./_components/hero";
import { CategoriesSection } from "./_components/categories";
import { AboutUs } from "./_components/aboutUs";
import { Location } from "./_components/location";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center ">
    <AppHero/>
    <CategoriesSection/>
    <AboutUs/>
    <Location/>
    </main>
  );
}
