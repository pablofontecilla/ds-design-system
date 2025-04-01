import React, { useState } from 'react';



// export default function SplitButton() {
//     let [isCentered, setIsCentered] = useState(true);

//     let position: any = [
//         { "1": "left" },
//         { "2": "center" },
//         { "3": "right" }
//     ]

//     function CollapseToRight(e: any) {
//         position = "1";
//         isCentered = !isCentered;
//         console.log("isCentered: " + isCentered + " -position: " + position)
//     }

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
//             <><button>3b</button><button onClick={CollapseToRight}>click</button></>
//         )
//     }
// }

// function fillColor(count: number) {
//     var fill = "";
//     if (count === 1) fill = "#E1E0DD";
//     if (count === 2) fill = "#999999";
//     if (count === 3) fill = "#000";
//     return fill;
// }

export default class SplitButton extends React.Component<{}, { count: number, countB: number, cssClass: string }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            count: 1,
            countB: 1,
            cssClass: 'thisClass'
        };
    }

    fillColor(count: any) {
        var fill = "";
        var cssClass = "";
        if (count === 1) {
            fill = "#E1E0DD"
            cssClass="dddd"
        };
        if (count === 2) fill = "#999999";
        if (count === 3) fill = "#000";
        return fill;
    }
    
    handleClick(e: any) {
        var count = this.state.count;
        var cssClass = this.state.cssClass;
        count = count !== 3 ? count + 1 : 0 && cssClass == 'sss';
        // cssClass = "sss"
        
        this.setState({
            count: count,
            cssClass: cssClass
        });

        console.log('cssClass: ' + cssClass)
    }

    fillColorB(countB: any) {
        var cssClass = "";
        if (countB === 1) {
            cssClass = "left";
            return(
                console.log(cssClass)
            )
        };
        if (countB === 2) {
            cssClass = "center";
            console.log(cssClass)
        };
        if (countB === 3) {
            cssClass = "right";
            console.log(cssClass)
        };

        return cssClass;
        console.log(cssClass)
    }
    

    handleClickB(e: any) {
        var countB = this.state.countB;
        var cssClass = this.state.cssClass;
        cssClass = 'cssClass';
        console.log('cssClass: ' + cssClass)
        this.setState({
            countB: countB
        });

        if (countB === 3) {
            cssClass = "right";
            console.log(cssClass)
        };
    }

    render() {
        var fill = this.fillColor(this.state.count)
        return (
            <><button onClick={this.handleClickB.bind(this)}>hh</button><br />
            <button className="switch" onClick={this.handleClick.bind(this)}>
                <svg width="100" height="100">
                    <g>
                        <path id="svg_2" d="m0,38l37,0l11,-38l11,38l37,0l-30,23l11,38l-30,-23l-30,23l11,-38l-30,-23l0,0z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="0" fill={fill} />
                    </g>
                </svg>
            </button></>
        );
    }
}

// const App = () => (
// <div>
//     <Switch checked={ true } />
// </div>
// )

// React.render( <App />, document.getElementById( "page" ) );

