import { useState } from "react";
import Left from "../splitter/buttons/Left";
import Right from "../splitter/buttons/Right";
import Center from "../splitter/buttons/Center";
import ChildComponent from "../splitter/ChildComponent";

type ListItem = {
  name: string;
  id: number;
  isActive: boolean;
  release?: string[];
};

const listItems: ListItem[]  = [
  {
    name: "Layout",
    id: 1,
    isActive: true,
    release: ["Dev"]
  },
  {
    name: "Dropdowns",
    id: 2,
    isActive: false,
    release: [""]
  },
  {
    name: "Buttons",
    id: 3,
    isActive: false,
    release: [""]
  },
  {
    name: "Inputs",
    id: 4,
    isActive: false,
    release: [""]
  },
  {
    name: "Accordeon",
    id: 5,
    isActive: false,
    release: [""]
  },
  {
    name: "Modals",
    id: 6,
    isActive: false,
    release: [""]
  }
]

export default function MainExamples() {
  const [isCentered, setIsCentered] = useState(true);
  const [isFullLeft, setIsFullLeft] = useState(false);
  const [isFullRight, setIsFullRight] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [leftPanel, setLeftPanel] = useState(null);
  const [leftPanelWidth, setLeftPanelWidth] = useState(null);
  const [rightPanel, setRightPanel] = useState(null);
  const [rightPanelWidth, setRightPanelWidth] = useState(null);
  const [splitterX, setSplitterX] = useState(0);

  function onMouseDownB(e: any) {
    setIsDragging(true);
    let pEle = e.target.previousElementSibling;
    let nEle = e.target.nextElementSibling;
    setLeftPanel(pEle);
    setRightPanel(nEle);
    setLeftPanelWidth(pEle.offsetWidth);
    setRightPanelWidth(nEle.offsetwidth);
    setSplitterX(e.pageX);

  };

  return (
    <><div className="ds-main-ctn">
      <div className="flex-table projects-list">
        <div className="row">
          <div className="cell">
          </div>
          <div className="cell">
          <p className="text-op85 txt-size-08">Dev</p>
          </div>
          <div className="cell flex">
          <p className="text-op85 txt-size-08">Pre-release</p>
          </div>
          <div className="cell flex">
          <p className="text-op85 txt-size-08">Prod</p>
          </div>
        </div>
        {listItems.map((item) => (
          <div  key={item.id} className={`slide ${item.isActive ? 'row active' : 'row'}`}>
            <div className="cell">
              <a href="/pages/layout" className="text-op85">{item.name}</a>
            </div>
            <div className="cell flex">
              {item.isActive && (
                                <div className={`dot ${item.release}`}></div>
                                )}
            </div>
            <div className="cell flex">
              
            {item.isActive && (
                                <div className={`dot ${item.release}`}></div>
                                )}
            </div>
            <div className="cell flex">
             
            {item.isActive && (
                                <div className={`dot ${item.release}`}></div>
                                )}
            </div>
          </div>
        ))}
      </div>

    </div>
      {/* <div className="flex-table projects-list">
        <div className="row">
          <div className="cell">
            <a href="" className="text-op85">Layout</a>
          </div>
          <div className="cell">
            <p className="text-op60 txt-size-09 m-b-10 m-t-10">

            </p>
          </div>
        </div>

        <div className="row">
          <div className="cell">
            <a href="" className="text-op85 disabled">Dropdown</a>
          </div>
          <div className="cell flex">
            <div className="dot"></div>
          </div>
        </div>

        <div className="row">
          <div className="cell">
            <a href="" className="text-op85 disabled">Buttons</a>
          </div>
          <div className="cell flex">
            <div className="dot"></div>
          </div>
        </div>

        <div className="row">
          <div className="cell">
            <a href="" className="text-op85 disabled">Inputs</a>
          </div>
          <div className="cell flex">
            <div className="dot"></div>
          </div>
        </div>

        <div className="row">
          <div className="cell">
            <a href="" className="text-op85 disabled">Accordeon</a>
          </div>
          <div className="cell">

            <p className=" m-b-10 m-t-10">
              <span className="txt-size-09 text-op60"></span>
            </p>
          </div>
        </div>
      </div> */}
    </>
  )
}
