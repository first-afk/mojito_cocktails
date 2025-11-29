import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./compopnents/Navbar";
import Hero from "./compopnents/Hero";
import Cocktails from "./compopnents/Cocktails";
import About from "./compopnents/About";
import Art from "./compopnents/Art";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </main>
  );
};

export default App;
