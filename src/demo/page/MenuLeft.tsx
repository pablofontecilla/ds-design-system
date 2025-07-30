import { Link } from "react-router";
import IcnComponents from "../../assets/svg/IcnComponents";
import IcnElements from "../../assets/svg/IcnElements";
import IcnLayout from "../../assets/svg/IcnLayout";
import Tooltip from "../../components/Tooltip";
import { useState } from "react";


export default function MenuLeft() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='ds-menu-left'>
      <ul className="width-full">
        <li className={`${isActive ? 'active' : ''}`}>
          <Link to="/pages/examples">
            <button className="btn-icon-menu-left" onClick={handleClick}>
              <IcnLayout />
              <Tooltip text="Layout" />
            </button>
          </Link>
        </li>
        <li>
          <button className="btn-icon-menu-left" onClick={handleClick}>
            <IcnElements />
            <Tooltip text="Elements" />
          </button>
        </li>
        <li>
          <button className="btn-icon-menu-left" onClick={handleClick}>
            <IcnComponents />
            <Tooltip text="Components" />
          </button>
        </li>
      </ul>
    </div>
  )
}

