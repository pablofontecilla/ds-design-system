import React from 'react'

export default function SectionA() {
  return (
    <>

        <div className="top">
          <div className="intro-ctn intro-ctn-a">
              <h1 id="introA" className="h1-homepage">
                <div className='intro-a-btn-list'>
                  <span className='intro-btn-list-text'>Time machines</span>
                </div>
                <span className="intro-btn-separator">.</span>
                <div className='intro-a-btn-list'>
                  <span className='intro-btn-list-text'>Clocks 3D</span>
                </div>
              </h1>
              <br />

              <h1 id="introB" className="h1-homepage">

                <div className='intro-a-btn-list'>
                  <span className='intro-btn-list-text'>Horizontal revolving doors</span>
                </div>
                <span className="intro-btn-separator">.</span>
                <div className='intro-a-btn-list'>
                  <span className='intro-btn-list-text'>Need an invention?</span>
                </div>
              </h1>
              <br />

              <h1 id="introC" className="h1-homepage">
                <div className='intro-a-btn-list'>
                  <span className='intro-btn-list-text inactive-b'>And more</span>
                </div>
              </h1>

            </div>
          
        </div>
        <div className="bottom">
          <h2>If you see this page you must know that it is under construction</h2>
        </div>
    </>
  )
}

// function moveIntroA() {
//   gsap.to("#introA", { x: 0, opacity: 1, duration: 1, ease: "power4.out" });
// }
// function moveIntroB() {
//   gsap.to("#introB", { x: 0, opacity: 1, duration: 1, ease: "power4.out" });
// }
// function moveIntroC() {
//   gsap.to("#introC", { x: 0, opacity: 1, duration: 1, ease: "power4.out" });
// }

// window.addEventListener("load", () => {
//   gsap.to("#introA", { x: 0, opacity: 1, duration: 1, ease: "power4.out" });
//   gsap.delayedCall(.2, moveIntroA);
//   gsap.delayedCall(.5, moveIntroB);
//   gsap.delayedCall(.9, moveIntroC);
// });
