import React, { useState } from 'react';
import { ReactDOM } from 'react';
import { ReactComponent as MoveLeft } from '../../../assets/icons/move-left.svg';
import SplitButton from './SplitButton';







export default function SplitBtnRight() {

    // let [isCentered, setIsCentered] = useState(true);

    // let position: any = [
    //     { "1": "left" },
    //     { "2": "center" },
    //     { "3": "right" }
    // ]
    
    
    // function selectPosition() {
    //     if (position === "1") {
    //         console.log("position: " + position)
    //         return (
    //             <button>1</button>
    //         )
    //     }
    
    //     else if (position === "2") {
    //         console.log("position: " + position)
    //         return (
    //             <button>2</button>
    //         )
    //     }
    
    //     else {
    //         console.log("position: " + position)
    //         return (
    //             <button>3</button>
    //         )
    //     }
    // }
    
    // function setPositionCenter(this: any) {
    //     position = "1"
    //     console.log(position)
    // }

    // function CollapseToRight(e: any) {
    //     position = "1";
    //     isCentered = !isCentered;
    //     console.log("isCentered: " + isCentered + " -position: " + position)
    // }

    return <>
    <SplitButton />
        {/* <selectPosition /> */}
        {/* <button onClick={setPositionCenter}>Center</button> */}
        {/* {setIsCentered && (
            <button onClick={CollapseToRight}>left</button>
        )} */}
    </>;
};