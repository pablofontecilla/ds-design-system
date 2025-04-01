import React, { useState, useEffect } from 'react';

import Left from './split-rev/buttons/Left';
import Center from './split-rev/buttons/Center';
import Right from './split-rev/buttons/Right';

export default function PfPageD() {
  const [isCentered, setIsCentered] = useState(true);
  const [isFullLeft, setIsFullLeft] = useState(false);
  const [isFullRight, setIsFullRight] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [leftPanel, setLeftPanel] = useState<HTMLElement | null>(null);
  const [leftPanelWidth, setLeftPanelWidth] = useState<number | null>(null);
  const [rightPanel, setRightPanel] = useState<HTMLElement | null>(null);
  const [rightPanelWidth, setRightPanelWidth] = useState(null);
  const [splitterX, setSplitterX] = useState(0);
  const [stateVariable, setStateVariable] = useState('');

  // const onMouseDown = ((e: any) => [
  //   setIsDragging(true),
  //   console.log(e),
  // ]);

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

  let leftPaneContent: any = document.querySelector("body");
  leftPaneContent.className = "ds-theme ds-theme--dark";


  // document.addEventListener('DOMContentLoaded', function () {
  //   document.querySelector('leftPanel').classList.add('content-current');
  //   alert('sss')
  // });           

  // function moveToLeft(e: any) {
  //   let mx = e.pageX - splitterX;
  //   setIsFullLeft(true);
  //   setSplitterX(e.pageX);
  //   e.stopPropagation();
  // };

  // function CollapseToLeft() {
  //   setIsFullLeft(isFullLeft => !isFullLeft);
  //   setIsCentered(isFullLeft => !isFullLeft);
  // }

  // function CollapseToRight(e: any) {
  //   let isGoal = 2;
  //   setIsFullRight(!isFullRight);
  //   setIsCentered(!isCentered);
  //   console.log(isCentered)
  // }

  function onMouseMove(e: any) {
    let mx = e.pageX - splitterX;
    if (leftPanel) {
      if (leftPanelWidth !== null) {
        leftPanel.style.width = (leftPanelWidth + mx) + 'px';
      }
    }
    if (rightPanel) {
      if (rightPanelWidth !== null) {
        rightPanel.style.width = (rightPanelWidth - mx) + 'px';
      }
    }
    setSplitterX(e.pageX);
    e.stopPropagation()

  };

  const onMouseUp = ((e: any) => [
    setIsDragging(false)
  ]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }
  }, [isDragging]);

  // function testIsCentered() {
  //   setIsFullLeft(!isFullLeft)
  //   console.log("setIsFullLeft: " + isCentered + "setIsCentered: " + isFullLeft)
  // }


  return (
    <>
      <div className="splitter-ctn">
        <div id="leftPanel" className="left-panel">
          <header className='header-level-2'>
            <h4>Pane Left</h4>
          </header>
          <div className='content d-block'>

            <ul className='text-op60 no-dot'>
              <li>Flex layout with draggable splitter.</li>
              <li>Components: Header, MenuLeft, Footer, MainSplitter</li>
              <li>MainSplitter: PaneLeft, SplitterCol, PaneRight</li>
            </ul>
          </div>

        </div>
        <div className="splitter-row" onMouseDown={onMouseDownB} ></div>
        <div id="rightPanel" className="right-panel">
          <header className='header-level-2'>
            <h4>Pane Right</h4>
          </header>
          <div className='content d-block'>
          <p className="text-op60">
            PageFlex.tsx
          </p>

          <ul className='text-op60' style={{ marginLeft: "40px" }}>
            <li className='small'>Header.tsx</li>
            <li className='small'>MenuLeft.tsx</li>
            <li>Footer.tsx</li>
            <li className='small'>
              MainWithSplitter.tsx
              <ul>
                <li className='small'>Paneleft</li>
                <li className='small'>PaneRight</li>
              </ul>
              
              </li>
          </ul>
          </div>
        </div>
      </div>
    </>
  )
}


export function SplitButtonC() {
  const [position, setPosition] = useState('center');
  const [isFullLeft, setIsFullLeft] = useState(false);
  const [isFullRight, setIsFullRight] = useState(false);


  const switchToLeft = (positionState: React.SetStateAction<string>) => {
    setPosition(positionState);
    setIsFullLeft(!isFullLeft)
    console.log(position)
  }

  // const switchToCenter = (positionState: React.SetStateAction<string>) => {
  //   setPosition(positionState);
  //   console.log(position)
  // }

  const switchToRight = (positionState: React.SetStateAction<string>) => {
    setPosition(positionState);
    setIsFullRight(true)
    console.log("isFullRight: " + isFullRight);
    console.log('dd')
  }

  return (
    <div className="splitter-btns-bar">

      {(() => {
        switch (position) {
          case 'left':
            return <Left handleClick={switchToLeft} />

          case 'right':
            return <Right handleClick={switchToRight} />

          default:
            return <Center handleClick={switchToLeft} />
        }
      })()}

    </div>
  )
}
