import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GlobalSidebars from "@/components/GlobalSidebars";
import Scroll3DWrapper from "@/components/Scroll3DWrapper";

export default function Home() {
  return (
    <main className="bg-transparent text-white relative">
      <GlobalSidebars />
      <Navbar />
      <Hero />
      <Scroll3DWrapper>
        <About />
      </Scroll3DWrapper>
      <Scroll3DWrapper>
        <Projects />
      </Scroll3DWrapper>
      <Scroll3DWrapper>
        <Contact />
      </Scroll3DWrapper>
      <Footer />
    </main>
  );
}
