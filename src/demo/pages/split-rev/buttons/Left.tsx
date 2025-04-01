
export default function Left(props: { handleClick: (arg0: string) => void; }) {

    return (
      <div className="position-left">
        <button className="pf-icon" onClick={ () => props.handleClick('center')}>
        </button>
      </div>
    )
  }
  
