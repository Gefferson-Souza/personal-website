import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-term-bg relative bg-grid pt-24 pb-20">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <About />
      </main>
      <Footer />
    </>
  );
}
