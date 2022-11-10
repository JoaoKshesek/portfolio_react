import { About } from "../pages/About";
import { Resume } from "../pages/Resume";
import { Technologies } from "../pages/Technologies";
import { Projects } from "../pages/Projects";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Footer } from "../pages/Footer";

import { Navbar } from "../pages/Navbar";








function Main() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />


    </div>
  );
}

export default Main
