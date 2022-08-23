import '../css/Main.css'
import '../css/Default.css'
import { NavBar } from "../components/Navbar/Navbar";
import { Home } from "../components/Home/Home";
import { About } from "../components/About/About";
import { Resume } from "../components/Resume/Resume";
import { Projects } from "../components/Projects/Projects";
import { Contact } from "../components/Contact/Contact";

function Main() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default Main
