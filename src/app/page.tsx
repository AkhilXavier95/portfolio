import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { NAV_ITEMS_FOR_HOME } from "@/constants";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <NavBar scrollOffset={72} items={[...NAV_ITEMS_FOR_HOME]} />
      <Hero />
      <Services />
      <Projects />
      <Work />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
