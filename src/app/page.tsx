import NavBar from "@/components/NavBar";
import Work from "@/components/sections/Work";
import { NAV_ITEMS_FOR_HOME } from "@/constants";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
// import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <NavBar scrollOffset={80} items={[...NAV_ITEMS_FOR_HOME]} />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Projects />
    </main>
  );
}
