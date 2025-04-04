import { NavLink } from "react-router";
import DsIcon from "../components/icons/DsIcon";
import NavbarTopB from "./NavbarTopB";

export default function Header
  () {
  return (
    <div className="ds-header">
      <div className='ds-icon ds-icon--24'>
        <NavLink to="/homepage">
          <DsIcon />
        </NavLink>
      </div>

      <h1 className='brand'>
        React UI Toolkit
        <span className="smallx2 text-op60 p-l-10">v 0.1</span>
      </h1>
      <h1 className='brand mobile'>
        UI Toolkit
      </h1>
      <NavbarTopB />
    </div>
  )
}
