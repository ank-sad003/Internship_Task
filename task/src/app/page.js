//components
import Navbar from "./components/Navbar";
import Emotions from "./components/Emotions";
import Manifesto from "./components/Manifesto";
import WorkWithUs from "./components/WorkWithUs";
import OpenVacancies from "./components/OpenVacancies";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="">
      
      <Navbar />
      <Emotions />
      <Manifesto/>
      <WorkWithUs/>
      <OpenVacancies/>
      <Footer/>
    </main>
  )
}
