import '../css/Default.css'
import '../css/Main.css'
import { NavBar } from "../components/Navbar/Navbar";
import { Home } from "../components/Home/Home";
import { About } from "../components/About/About";
import { Resume } from "../components/Resume/Resume";
import { Projects } from "../components/Projects/Projects";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";



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
