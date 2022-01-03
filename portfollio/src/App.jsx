import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Portfolio/>
       <Works/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
