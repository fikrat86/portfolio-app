import Home from "@/components/sections/home";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Education from "@/components/sections/education";
import Certifications from "@/components/sections/certifications";
import Contact from "@/components/sections/contact";

export default function Page() {
  return (
    <main className="flex flex-col items-center px-4">
      <Home />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Projects />
      <Contact />
    </main>
  );
}
