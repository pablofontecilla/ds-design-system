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
