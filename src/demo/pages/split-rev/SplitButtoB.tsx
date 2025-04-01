import React, { useState } from 'react';

export default class SplitButtonB extends React.Component<{}, { count: number }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            count: 1,
        };
    }

    fillColor(count: any) {
        var fill = "";
        if (count === 1) {
            fill = "left";
        };
        if (count === 2) fill = "center";
        if (count === 3) fill = "#right";
        return fill;
    }
    
    handleClick(e: any) {
        var count = this.state.count;
        count = count !== 3 ? count + 1 : 0 ;
        
        this.setState({
            count: count,
        });
    }

    render() {
        var fill = this.fillColor(this.state.count)

        return (
            <>
            <button className={fill} onClick={this.handleClick.bind(this)}>
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

