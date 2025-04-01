export default function Right(props: { handleClick: (arg0: string) => void; }) {

    return (
      <div className="position-right"> 
        <button onClick={ () => props.handleClick('center')}>back to center</button>
      </div>
    )
  }
  