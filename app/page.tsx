import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Timeline/>
      <Faq/>
      <Footer/>
    </div>
  );
}
