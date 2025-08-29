import SkillsSection from "@/app/components/SkillsSection";
import Portfolio from "@/app/components/Protfolio";
import ProjectSection from "@/app/components/ProjectSection";
import About from "@/app/components/About";
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";


export default function Home(){
  return (
    <div>
      <NavBar />
      <Portfolio />
      <About />
      <ProjectSection />
      <SkillsSection />
      <Footer />
    </div>
  );
}
