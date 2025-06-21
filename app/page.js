import Image from "next/image";
import Hero from "./components/Hero";
import CallToActionCards from "./components/CallToActionCards";
import SectorsWeServe from "./components/SectorsWeServe";
import LaunchpadSection from "./components/LaunchpadSection";
import TransformationStats from "./components/TransformationStats";
import EcosystemSlider from "./components/EcosystemLogos";

export default function Home() {
  return (
    <>
      <Hero />
      <EcosystemSlider />
      <CallToActionCards />
      <SectorsWeServe />
      <TransformationStats />
      <LaunchpadSection />
    </>
  );
}
