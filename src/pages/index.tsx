import dynamic from "next/dynamic";
import { Poppins } from "next/font/google";

import AboutSection from "~/components/AboutSection";
import ContactSection from "~/components/ContactSection";
import Footer from "~/components/Footer";
import HeroSection from "~/components/HeroSection";
import Navbar from "~/components/Navbar";
import ProjectSection from "~/components/ProjectSection";
import TechnologySection from "~/components/TechnologySection";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const DynamicBackground = dynamic(() => import("~/components/Background"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <div className={`${poppins.variable} relative bg-black font-sans text-white`}>
      <DynamicBackground />

      <Navbar />
      <main className={"relative z-40"}>
        <HeroSection />
        <AboutSection />
        <TechnologySection />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
