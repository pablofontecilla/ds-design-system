
import Hamburger from '../../components/icons/Hamburger';

export default function Left(props: { handleClick: (arg0: string) => void; }) {

    return (
      <div className="position-left">
        <button className="ds-icon" onClick={ () => props.handleClick('center')}>
          <Hamburger />
        </button>
      </div>
    )
  }
  
