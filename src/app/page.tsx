import {
  AboutSection,
  ContactSection,
  Footer,
  HeroSection,
  Navbar,
  ProjectSection,
  TechnologySection,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={"relative z-40"}>
        <HeroSection />
        <AboutSection />
        <TechnologySection />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
