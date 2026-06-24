import Navbar from "./components/Navbar";
import Ticker from "./components/Ticker";
import Hero from "./components/Hero";
import WdaShowcase1 from "./components/WdaShowcase1";
import Education from "./components/Education";
import WdaShowcase2 from "./components/WdaShowcase2";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Ticker />
        <Hero />
        <WdaShowcase1 />
        <Education />
        <WdaShowcase2 />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
