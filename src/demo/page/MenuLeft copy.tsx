import IcnComponents from "../../assets/svg/IcnComponents";
import IcnElements from "../../assets/svg/IcnElements";
import IcnLayout from "../../assets/svg/IcnLayout";
import Tooltip from "../../components/Tooltip";

// let tooltipDelay: any = document.querySelector(".tooltip");

// function tooltipMouseIn() {
//   console.log(tooltipDelay);
//   tooltipDelay.className = "tooltip display-block";
//     }

//     function tooltipMouseOut() {
//   tooltipDelay.className = "tooltip";
//     }

// setTimeout(tooltipMouseIn, 1000); // Pass the function reference, not its execution

export default function MenuLeft() {
  return (
    <div className='ds-menu-left'>
      <ul>
        <li>
          <button className="btn-icon-menu-left" onMouseEnter={tooltipMouseIn} onMouseOut={tooltipMouseOut}>
            <IcnLayout />
            <Tooltip text="Layout" />
          </button>
        </li>
        <li>
          <button className="btn-icon-menu-left" onMouseEnter={tooltipMouseIn} onMouseOut={tooltipMouseOut}>
            <IcnElements />
            <Tooltip text="Elements" />
          </button>
        </li>
        <li>
          <button className="btn-icon-menu-left" onMouseEnter={tooltipMouseIn} onMouseOut={tooltipMouseOut}>
            <IcnComponents />
            <Tooltip text="Components" />
          </button>
        </li>
      </ul>
    </div>
  )
}

// let tooltipDelay: any = document.querySelector(".btn-icon-menu-left");

function tooltipMouseIn() {
  // let tooltipDelay: any = "tooltip";
  // tooltipDelay.className = "tooltip display-block";
}

function tooltipMouseOut() {
  // tooltipDelay.className = "tooltip";
}

// setTimeout(tooltipMouseIn, 1000); 
// Pass the function reference, not its execution

// console.log(tooltipDelay); 
// Debugging log