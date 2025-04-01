import React, { Component } from 'react';

interface IMyComponentProps {
  width: string
}

interface IMyComponentState {
  someValue: string
}

export default class ChildComponentm extends React.Component<IMyComponentProps, IMyComponentState> {
  constructor(props : IMyComponentProps) {
      super(props);
      this.state = { someValue: this.props.width };
  }

  public render() {
      return (
          <div style={{width: this.state.someValue, border: "1px solid #8BB6C9"}}>
            <span>Width {this.state.someValue}</span>
            <button>{this.state.someValue}</button> 
              
          </div>
      );
  }
}

// function ChildComponent() {
//   const HelloWorld = "Hello"

//   return (
//     <div>
//       < ChildComponent />
//     </div>
//   )
// }

// const ChildComponent = ({ someText }) => {
//   return (
//     <div>
//       <p>{someText}</p>
//     </div>
//   );
// };


// export default class ChildComponent extends React.Component {
//   render() {
//     return (
//     <>
//     <div>
//     Data from parent is:{this.props.dataFromParent}
//     </div>
//     <img
//       className="avatar"
//       src="https://i.imgur.com/1bX5QH6.jpg"
//       alt="Lin Lanying"
//       width={100}
//       height={100} /></>
//   );
//   }
  
// }