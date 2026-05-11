
import { useState } from 'react';
import { NavLink } from 'react-router';

export default function MainHomepage() {
  const [isVisible, setIsVisible] = useState(false); // Initial state: hidden
  // const toggleVisibility = () => {
  //   setIsVisible(!isVisible); // Toggle visibility state
  //   console.log('Toggling visibility: ', isVisible);
  // };

  return (
    <div className='ds-main-ctn'>
      <div className="ds-main" >
        <div className='content'>
          <p className="emphasis m-b-30">
            UI Toolkit  - <span style={{ opacity: '.5' }}>Design System</span>
          </p>
          <p className="text-op60">A simple UI Toolkit build with React. Main objectives are:</p>
          <p>
            <span className="text-op30 p-r-20 bold"><b>1</b></span>
            <span className="text-op60">Develop a custom React UI toolkit, to be shared among different projects.</span>
          </p>
          <p>
            <span className="text-op30 p-r-20 bold">2</span>
            <span className="text-op60">Evolve it into a full fledged Design System.</span>
          </p>
          {/* <p className="text-op60">
            For now, an incomplete set of tools that will grow regularly. 

            <button className="btn-text m-l-20" onClick={toggleVisibility}>{isVisible ? 'Less' : 'More'}
            </button>
          </p> */}
          {isVisible && (
            <p className="homepage-outlined-ctn">
              <p className="homepage-outlined">
                Overall personal objective is to revisit & re-examine the building blocks of user interfaces. For most developers, front-end development starts with a UI framework -Bootstrap, Material Design or other; developers are mostly concerned about functional implementation, so they just need a UI framework that works.
              </p>
              <p className="homepage-outlined">
                As a designer I have collaborated in a few projects using Bootstrap, lately React-Bootstrap & I have trained myself customizing it. But every designer dreams starting with a clean sheet, and that is just what I am doing here. For now, it is published as a playground providing a consistent UI to different projects, and presented as an incomplete set of tools that will grow regularly.
              </p>
            </p>
          )}

          <p className="text-op60 m-t-50">
            Latest addition:  
            <NavLink to="/pages/examples"> Layout</NavLink>
          </p>
          <p className="text-op60">
            Repository: <a href="github.com/pablofontecilla/ds-design-system">github.com/pablofontecilla/ds-design-system</a>
          </p>
          <p className="text-op60">
            If you have comments or want to be notified about coming releases, <a className="txt-size-09" href="mailto:pablorfontecilla@gmail.com?subject=DS Design System">drop me a line.</a>
          </p>
        </div>
      </div>

    </div>
  )
}
