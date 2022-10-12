import { About } from "../pages/About";
import { Resume } from "../pages/Resume";
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
      <Projects />
      <Contact />
      <Footer />


    </div>
  );
}

export default Main
