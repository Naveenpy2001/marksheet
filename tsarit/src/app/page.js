// import ClimateTransitionCarousel from "./components/ClimateTransitionCarousel";
import ProductSlider from "./components/ProductSlider";
import About from "./components/About";
import ClientFeedback from "./components/ClientFeedback";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LifeAtTSAR from "./components/LifetAtTSAR";
import Services from "./components/Services";
import SmoothProductSlider from "./components/SmoothProductSlider";

export default function Home() {
  return (
    <>
    {/* <div className="app">
      <ProductSlider />
    </div> */}
    <div className="app pt-15">
    <SmoothProductSlider />
    </div>
    <About />
      <Services />
      <Clients />
      <ClientFeedback />
      <LifeAtTSAR />
      <Contact />
      <Footer />
    </>
  );
}
