import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Artists from "@/components/Artists";
import Manifesto from "@/components/Manifesto";
import VideoSpotlight from "@/components/VideoSpotlight";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Artists />
      <Manifesto />
      <VideoSpotlight />
      <Footer />
    </main>
  );
}
