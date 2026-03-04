import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowTo from "./components/HowTo";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-beige">
      <Navbar />
      <Hero />
      <Features />
      <HowTo />
      <Footer />
    </div>
  );
}
