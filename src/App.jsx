import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./compopnents/Navbar";
import Hero from "./compopnents/Hero";
import Cocktails from "./compopnents/Cocktails";
import About from "./compopnents/About";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </main>
  );
};

export default App;
