import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <link
          href="https://unpkg.com/nes.css@latest/css/nes.min.css"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Hero />

      {/* <Timeline /> */}
      <Faq />
      {/* <Footer /> */}
    </div>
  );
}
