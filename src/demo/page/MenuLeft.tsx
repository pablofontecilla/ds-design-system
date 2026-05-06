import { NavLink } from "react-router-dom";
import IcnComponents from "../../assets/svg/IcnComponents";
import IcnElements from "../../assets/svg/IcnElements";
import IcnLayout from "../../assets/svg/IcnLayout";
import Tooltip from "../../components/Tooltip";

export default function MenuLeft() {


  return (
    <div className='ds-menu-left'>
      <ul className="width-full">
        <NavLink to="/pages/examples">
        <li>
          <button className="btn-icon-menu-left">
            <IcnLayout />
            <Tooltip text="Layout" />
          </button>
        </li>
        </NavLink>

        <NavLink to="/pages/elements">
          <li>
            <button className="btn-icon-menu-left">
              <IcnElements />
              <Tooltip text="Elements" />
            </button>
          </li>
        </NavLink>

        <NavLink to="/pages/components">
          <li>
            <button className="btn-icon-menu-left">
              <IcnComponents />
              <Tooltip text="Components" />
            </button>
          </li>
        </NavLink>
      </ul>
    </div>
  )
}


