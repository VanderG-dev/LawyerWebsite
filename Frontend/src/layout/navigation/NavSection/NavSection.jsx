import { useState } from "react";
import "./NavSection.css";
import Nav from "../Nav/Nav";
import NavInfo from "../NavInfo/NavInfo";

function NavSection() {
  const [section, setSection] = useState(true);

  return <>{section ? <Nav setWindow={setSection} /> : <NavInfo />}</>;
}

export default NavSection;
