import { useState } from "react";

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

  return (
    <div className="ds-main-ctn">
      <div className="ds-main">
        <div>
          <p className="text-op60">
            Simple flex layout..
          </p>
          <p className="text-op60">
            Components: Header, Menu, Main, Footer.
          </p>
          <br />
          <p className="text-op60">
            Main component acts as splitter between pane left and pane right.
          </p>
          <p className="text-op60">
            Simple splitter, resized with the cursor.
          </p>
        </div>
      </div>
      <div className="splitter-row" onMouseDown={onMouseDownB} ></div>
      <div className="ds-main-pane-right">
        Pane Right
      </div>

    </div>
  )
}
