
// import { ReactComponent as MoveLeft } from '../../../../assets/icons/move-left.svg';
// import { ReactComponent as MoveRight } from '../../../../assets/icons/move-right.svg';

export default function Center(props: { handleClick: (arg0: string) => void; }) {

  return (
    <>
      {/* <div className= "App">
      <div id="leftPanel" className="left-panel">
        
      </div>
      <div id="leftPanel" className="left-panel">
        
      </div>
      </div> */}

      <div className="position-center">
        <button className="ds-icon" onClick={() => props.handleClick('left')}>
          {/* <MoveLeft /> */}
        </button>
        <button className="ds-icon" onClick={() => props.handleClick('right')}>
          {/* <MoveRight /> */}
        </button>
      </div>
    </>
  )
}