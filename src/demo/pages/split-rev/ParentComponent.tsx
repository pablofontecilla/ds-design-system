import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

export default class ParentComponent extends React.Component<{}, { width: string }> {
  render() {
    return (
      <div>
        <ChildComponent  width = "50%"/>
      </div>
    )
  }
}

