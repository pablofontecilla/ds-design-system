

export default function Center(props: { handleClick: (arg0: string) => void; }) {

  return (
    <>


      <div className="position-center">
        <button className="ds-icon" onClick={() => props.handleClick('left')}>
        </button>
        <button className="ds-icon" onClick={() => props.handleClick('right')}>
        </button>
      </div>
    </>
  )
}