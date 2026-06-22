import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GlobalSidebars from "@/components/GlobalSidebars";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-white relative">
      <GlobalSidebars />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
