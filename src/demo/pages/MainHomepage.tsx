
export default function MainHomepage() {

  return (
    <div className='ds-main-ctn'>
      <div className="ds-main" >
        <div>
        </div>
        <div className='content'>
          <p className="emphasis m-b-30" style={{ marginBottom: "50px" }}>
            UI Toolkit  - DS Design System
          </p>
          <p className="text-op80 all-caps">
          Objectives
          </p>
          <p>
          <span className="text-op80 p-r-20">1</span> 
          <span className="text-op60">Develop a custom React UI toolkit, to be shared among different projects.</span>

          </p>
          <p>
          <span className="text-op80 p-r-20">2</span> 
          <span className="text-op60">Evolve it into a full fledged Design System.</span>
          </p>
          <p className="homepage-outlined">
            Overall personal objective is to revisit & re-examine the building blocks of user interfaces. For most developers, front-end development starts with a UI framework -Bootstrap, Material Design or other; developers are mostly concerned about functional implementation, so they just need a UI framework that works. As a designer I have collaborated in a few projects using Bootstrap, lately React-Bootstrap & I have trained myself customizing it. But every designer dreams starting with a clean sheet, and that is just what I am doing here. For now, it’s published as a playground providing a consistent UI to different projects, and presented as an incomplete set of tools that will grow regularly.          </p>
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
