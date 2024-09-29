"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import { ReactLenis } from "@studio-freight/react-lenis";

import Timeline2 from "./components/Timeline2";
export default function Home() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.04,
        duration: 1.5,
        smoothWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
      }}
    >
      <div>
        <Navbar />
        <Hero />
        <Timeline2 />
        {/* <Timeline /> */}
        <Faq />
        <Footer />
      </div>
    </ReactLenis>
  );
}
