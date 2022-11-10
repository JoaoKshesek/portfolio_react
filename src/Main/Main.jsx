import { About } from "../pages/About";
import { Resume } from "../pages/Resume";
import { Technologies } from "../pages/Technologies";
import { Projects } from "../pages/Projects";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Footer } from "../pages/Footer";
import { Loading } from "../pages/Loading";


import { Navbar } from "../pages/Navbar";

import React, {useState, useEffect} from "react";

function Main() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
  // Wait for 3 seconds
  setTimeout(() => {
    setIsLoading(false);
  }, 3300);
}, []);
  return isLoading ? < Loading isLoading={isLoading} /> :
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
  ;
}

export default Main

