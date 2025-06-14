import Image from "next/image";
import Hero from "./components/Hero";
import CallToActionCards from "./components/CallToActionCards";
import SectorsWeServe from "./components/SectorsWeServe";
import LaunchpadSection from "./components/LaunchpadSection";
import TransformationStats from "./components/TransformationStats";

export default function Home() {
  return (
    <>
      <Hero />
      <CallToActionCards />
      <SectorsWeServe />
      <LaunchpadSection />
      <TransformationStats />
    </>
  );
}
