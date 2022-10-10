import '../css/Default.css'
import '../css/Main.css'
import { NavBar } from "../components/Navbar/Navbar";
import { About } from "../pages/About";
import { Resume } from "../pages/Resume";
import { Projects } from "../pages/Projects";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";







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
