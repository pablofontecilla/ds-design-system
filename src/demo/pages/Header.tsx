import DsIcon from "../components/icons/DsIcon";
import NavbarTopB from "./NavbarTopB";

export default function Header
() {
  return (
    <div className="ds-header">
      <div className='ds-icon ds-icon--24'>
        <DsIcon />
      </div>
      
      <h1 className='brand'>
          Simple UI Toolkit
        </h1>
        <NavbarTopB/>
    </div>
  )
}
