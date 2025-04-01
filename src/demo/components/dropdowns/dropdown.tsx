import { useState } from "react";

import { NavLink } from "react-router";

const DropdownObject = () => {
  return (
    <ul className="ds-dropdown">
      <li className="ds-dropdown__list no-margin">
        <NavLink to="/pages/examples">
          <button className="ds-btn">Overview</button>
        </NavLink>
      </li>

    </ul>
  )
}



const Dropdown = () => {
  const [open, setOpen] = useState(true);
  const [mobile, setMobile] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    setMobile(!mobile);
  };

  return (
    <>
      <div className="ds-dropdown__ctn">
        {/* <button className="hamburger" onClick={handleOpen}><Hamburger /></button> */}
        {open ? <div className="nav is-mobile"><DropdownObject /></div> : <div className="nav"><DropdownObject /></div>}
      </div>
    </>
  );
};

export default Dropdown;




;