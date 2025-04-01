import { useState } from "react";
import PaneLeft from "./Paneleft";

export default function MainLayout() {
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

  let leftPaneContent: any = document.querySelector("body")!;
  leftPaneContent.className = "pf-theme pf-theme--dark";


  document.addEventListener('DOMContentLoaded', function () {
    const leftPanelElement = document.querySelector('.leftPanel'); // Use the correct selector
    if (leftPanelElement) {
      leftPanelElement.classList.add('content-current');
    } else {
      console.warn("Element with class 'leftPanel' not found.");
    }
  }); 

  document.addEventListener('DOMContentLoaded', function () {
    const leftPanelElement = document.querySelector('.leftPanel'); // Ensure the selector is correct
    if (leftPanelElement) {
      leftPanelElement.classList.add('content-current');
    } else {
      console.warn("Element with class 'leftPanel' not found.");
    }
  });    

  

  // splitter-ctn is the parent of the left and right panes
// splitter-row is the splitter between the left and right panes
  return (
    
    // <div className="ds-main-ctn" id="root">
    //   <div className={isFullRight ? "App right-closed" : "App"}>
    //   <div id="leftPanel" className={isFullLeft ? "left-panel closed" : "left-panel"}>
    //   <Paneleft width="35%" />
    //       <p className="text-op60">
    //         Simple flex layout..
    //       </p>
    //       <p className="text-op60">
    //         Components: Header, Menu, Main, Footer.
    //       </p>
    //       <br />
    //       <p className="text-op60">
    //         Main component acts as splitter between pane left and pane right.
    //       </p>
    //       <p className="text-op60">
    //         Simple splitter, resized with the cursor.
    //       </p>
    //     </div>
    //   </div>
    //   <div className="splitter-row" onMouseDown={onMouseDownB} ></div>
    //   <div id="rightPanel" className={isFullRight ? "right-panel closed" : "right-panel"}>
    //     Pane Right
    //   </div>
    // </div>
    <div className="App">
      <div className="left-panel"></div>
      <PaneLeft width={""}/>
      <div className="splitter-row"></div>
      <div className="right-panel"></div>
    </div>
  )
}
