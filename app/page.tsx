import Image from "next/image";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
//import Grid from "@/components/Grid"
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients"
import Footer from "@/components/Footer";
import Experience from "@/components/Skills";
import Positions from "@/components/Positions";

export default function Home() {
  return (
     <main className = "relative bg-black flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip"> 
      <div className = "max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Positions />
        <Experience />
        <RecentProjects />
        <Clients />
        <Footer />
      </div>
     </main>    
  );
}
