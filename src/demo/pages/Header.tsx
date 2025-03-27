import { NavLink } from "react-router";
import DsIcon from "../components/icons/DsIcon";
import NavbarTopB from "./NavbarTopB";

export default function Header
() {
  return (
    <div className="ds-header">
      <div className='ds-icon ds-icon--24'>
        {/* <DsIcon /> */}
        <NavLink to="/homepage"><DsIcon /></NavLink>
      </div>
      
      <h1 className='brand'>
          UI Toolkit
          <span className="small text-op60 p-l-10">v 0.1</span>
        </h1>
        <NavbarTopB/>
    </div>
  )
}
