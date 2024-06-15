import Image from "next/image";
import { AppHero } from "./_components/hero";
import { CategoriesSection } from "./_components/categories";
import { AboutUs } from "./_components/aboutUs";

export default function Home() {
  return (
    <main className="flex flex-col items-center ">
    <AppHero/>
    <CategoriesSection/>
    <AboutUs/>
    </main>
  );
}
