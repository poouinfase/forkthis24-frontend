import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Timeline2 from "./components/Timeline2";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Timeline2 />
      {/* <Timeline /> */}
      <Faq />
      <Footer />
    </div>
  );
}
