import '../css/Default.css'
import '../css/Main.css'
import { NavBar } from "../components/Navbar/Navbar";
import { Home } from "../components/Home/Home";
import { About } from "../components/About/About";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import { Resume } from "../pages/Resume";
import { Projects } from "../pages/Projects";





function Main() {
  return (
    <div className="App">
      <NavBar />
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
