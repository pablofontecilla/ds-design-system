
import React, { useState, useEffect } from 'react';
import Hamburger from '../../components/icons/Hamburger';

// import { ReactComponent as MoveLeftSvg } from '../../../../assets/icons/move-left.svg';
// import MoveLeftSvg from '../../../../assets/icons/move-left.svg';
// import MoveLeftSvg from '../../../../assets/icons/move-left.svg';
// import { ReactComponent as MoveLeftSvg } from '../../../../assets/icons/move-left.svg';


export default function Left(props: { handleClick: (arg0: string) => void; }) {

    return (
      <div className="position-left">
        {/* <h3>Left</h3> */}
        <button className="ds-icon" onClick={ () => props.handleClick('center')}>
          {/* <MoveLeftSvg /> */}
          <Hamburger />
        </button>
      </div>
    )
  }
  
