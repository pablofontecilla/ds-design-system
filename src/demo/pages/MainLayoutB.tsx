
export default function MainWithSplitter() {
  // const [isCentered, setIsCentered] = useState(true);
  // const [isFullLeft, setIsFullLeft] = useState(false);
  // const [isFullRight, setIsFullRight] = useState(false);
  // const [isDragging, setIsDragging] = useState(false);
  // const [leftPanel, setLeftPanel] = useState(null);
  // const [leftPanelWidth, setLeftPanelWidth] = useState(null);
  // const [rightPanel, setRightPanel] = useState(null);
  // const [rightPanelWidth, setRightPanelWidth] = useState(null);
  // const [splitterX, setSplitterX] = useState(0);

  // function onMouseDownB(e: any) {
  //   setIsDragging(true);
  //   let pEle = e.target.previousElementSibling;
  //   let nEle = e.target.nextElementSibling;
  //   setLeftPanel(pEle);
  //   setRightPanel(nEle);
  //   setLeftPanelWidth(pEle.offsetWidth);
  //   setRightPanelWidth(nEle.offsetwidth);
  //   setSplitterX(e.pageX);

  // };

  return (
    <div className="splitter-ctn">
      <div id="leftPanel" className="left-panel">
        <div>
        </div>
        <div className='content'>
          <p className="emphasis m-b-30" style={{ marginBottom: "50px" }}>
            UI Toolkit  - DS Design System
          </p>
          <p className="text-op80 all-caps">
          Objectivesss
          </p>
          <p>
          <span className="text-op80 p-r-20">1</span> 
          <span className="text-op60">Develop a custom UI toolkit, to be shared among different projects.</span>

          </p>
          <p>
          <span className="text-op80 p-r-20">2</span> 
          <span className="text-op60">Evolve it into a full fledged Design System.</span>
          </p>
          <p className="columns-2 text-op60">
            Overall personal objective is to revisit & re-examine the building blocks of user interfaces. For most developers, front-end development starts with some framework (Bootstrap, Material Design, other). Developers are mostly concerned about functional implementation, so they just need a UI framework that works. As a designer I have collaborated in a few projects using Bootstrap, lately React-Bootstrap & I have trained myself customizing it. But every designer dreams starting with a clean sheet, and that is just what I am doing here. For now, an incomplete set of tools that will grow regularly.
          </p>
          <p className="text-op60">
            Published as an Open Source project (Apache-2.0 license): Repository.
          </p>
          <p className="text-op60">
            If you have comments, want to get involved or just get notified, please drop me a line.
          </p>



        </div>
      </div>
      <div className="splitter-row"></div>
      <div id="rightPanel" className="right-panel">
        <div className="splitter-btns-bar right">
        </div>
      </div>
    </div>
  )
}
