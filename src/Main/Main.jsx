import '../css/Default.css'
import '../css/Main.css'
import { NavBar } from "../components/Navbar/Navbar";
import { Home } from "../components/Home/Home";
import { About } from "../components/About/About";
import { Resume } from "../components/Resume/Resume";
import { Technologies } from "../components/Technologies/Technologies";
import { Projects } from "../components/Projects/Projects";

function Main() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Resume />
      <Technologies />
      <Projects />
    </div>
  );
}

export default Main
