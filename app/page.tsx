import HeroSection from "@/components/HeroSection";
import DefaultLayout from "@/components/Layout";

export default function Home() {
  return (
    <DefaultLayout>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <HeroSection />
      </main>
    </DefaultLayout>
  );
}
