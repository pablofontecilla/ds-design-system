import React, { useState } from 'react'
import Playing from './buttons/Left'
import Center from './buttons/Center'
import Right from './buttons/Right'
import Left from './buttons/Left'

export default function SplitButtoCxxxx() {
  const [position, setPosition] = useState('center')
  const [isFullLeft, setIsFullLeft] = useState(false);


  const handleClick = (positionState: React.SetStateAction<string>) => {
    setPosition(positionState);
    setIsFullLeft(isFullLeft => !isFullLeft);
    console.log(position)
  }

  return (
    <div className="splitter-btns-bar">

      {(() => {
        switch (position) {
          case 'left':
            return <Left handleClick={handleClick} />
          // case 'center':
          //   return <Center handleClick={handleClick} />
          case 'right':
            return <Right handleClick={handleClick} />
          
          default:
            return null
        }
      })()}

    </div>
  )
}
