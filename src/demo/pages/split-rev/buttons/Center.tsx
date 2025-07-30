
export default function Center(props: { handleClick: (arg0: string) => void; }) {

  return (
    <>


      <div className="position-center">
        <button className="pf-icon" onClick={() => props.handleClick('left')}>
        </button>
        <button className="pf-icon" onClick={() => props.handleClick('right')}>
        </button>
      </div>
    </>
  )
}