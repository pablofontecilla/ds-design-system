import { Component } from 'react';
import Dropdown from '../components/dropdowns/dropdown';

type Props = {}

type State = {
  isMobile: true;
}


export default class NavbarTopB extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {isMobile: true};
  }

  render() {
    return (
      <>
        <Dropdown />
      
    </>
    )
  }
}


