
import Intro from "@/components/intro";
import Devider from "@/components/devider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experiences from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {

  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Devider />
      <About />
      <Projects />
      <Skills />
      <Experiences />
      <Contact />
    </main>
  )
}
