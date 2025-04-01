
import React, { useState, useEffect } from 'react';

// import { ReactComponent as MoveLeftSvg } from '../../../../assets/icons/move-left.svg';


export default function Left(props: { handleClick: (arg0: string) => void; }) {

    return (
      <div className="position-left">
        {/* <h3>Left</h3> */}
        <button className="pf-icon" onClick={ () => props.handleClick('center')}>
          {/* <MoveLeftSvg /> */}
        </button>
      </div>
    )
  }
  
