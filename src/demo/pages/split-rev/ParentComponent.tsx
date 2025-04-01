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
// export default function ParentComponent() {
//   const HelloWorld = "Hello"

//   return (
//     <div>
//       < ChildComponent someText={HelloWorld} />
//     </div>
//   )
// }


// export default function ParentComponent() {
//   const HelloWorld = "Hello"

        
//         return (
//             <div>
//                  {/* <Child1/>            //no data to send              */}
//                  <ChildComponent someText = {HelloWorld} />
//             </div>
//         );    
// }
