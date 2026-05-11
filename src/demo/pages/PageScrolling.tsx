import React from 'react';
import Header from './Header'
import FooterFlex from '../page/FooterFlex'
import SectionA from './PageScrolling/SectionA'
import SectionB from './PageScrolling/SectionB'
// import shortid from 'shortid';

// import useIntersectionObserver from './PageScrolling/UseIntersectionObserver';
import SectionC from './PageScrolling/SectionC';
// import { observe } from 'react-intersection-observer';
import gsap from 'gsap';


// const sections = document.querySelectorAll('.section');


// const sections = [
//   { id: 'sectionA', ref: useRef<HTMLDivElement | null>(null) },
//   { id: 'sectionB', ref: useRef<HTMLDivElement | null>(null) },
//   { id: 'sectionC', ref: useRef<HTMLDivElement | null>(null) },
// ];

const options = {
  rootMargin: '0px',
  threshold: 0.5
}

const callback = () => {

}

export default function PageScrolling() {


// const sections = [
//   { id: 'sectionA', ref: useRef<HTMLDivElement | null>(null) },
//   { id: 'sectionB', ref: useRef<HTMLDivElement | null>(null) },
//   { id: 'sectionC', ref: useRef<HTMLDivElement | null>(null) },
// ];

// const sections = document.querySelectorAll('.section');


// const observer = new IntersectionObserver((entries) => {
//   console.log('Observer callback:', entries);
// }, { threshold: 0.1 });

// observer.observe(sections[0]);
// observer.observe(sections[1]);
// observer.observe(sections[2]);
  const observer = new IntersectionObserver(callback, options);

  React.useEffect(() => {
    const sectionElements = document.querySelectorAll('.section');
    sectionElements.forEach(section => observer.observe(section));

    return () => {
    };
  }, []);


  return (
    <>
      <div className="ds-page-flex">
        <Header />
        <div className='sections-ctn'>
          <section className="section section-a">
            {/* <div className="top">
          <div className="intro-ctn intro-ctn-a">
              <h1 id="introA" className="h1-homepage">
                <div className='intro-a-btn-list'>
                  <span className='intro-btn-list-text'>Time machines</span>
                  <span className='intro-btn-list-label'></span>
                </div>
                <span className="intro-btn-separator">.</span>
                <div className='intro-a-btn-list'>
                  <span className='intro-btn-list-text'>Clocks 3D</span>
                  <span className='intro-btn-list-label'></span>
                </div>
              </h1>
              <br />

              <h1 id="introB" className="h1-homepage">

                <div className='intro-a-btn-list'>
                  <span className='intro-btn-list-text'>Horizontal revolving doors</span>
                  <span className='intro-btn-list-label'></span>
                </div>
                <span className="intro-btn-separator">.</span>
                <div className='intro-a-btn-list'>
                  <span className='intro-btn-list-text'>Need an invention?</span>
                  <span className='intro-btn-list-label'></span>
                </div>
              </h1>
              <br />

              <h1 id="introC" className="h1-homepage">
                <div className='intro-a-btn-list tooltip'>
                  <span className="tooltiptext">Under construction</span>
                  <span className='intro-btn-list-text inactive-b'>And more</span>
                </div>
              </h1>

            </div>
          
        </div> */}
            <SectionA />
            </section>
          <section className="section section-b"><SectionB /></section>
          <section  className="section section-c"><SectionC /></section>

        </div>

        <FooterFlex />
      </div>
    </>
  )
}

function moveIntroA() {
  gsap.to("#introA", { translateX:  '100px', opacity: 1, duration: 1, ease: "power4.out" });
}
function moveIntroB() {
  gsap.to("#introB", { translateX:  '100px', opacity: 1, duration: 1, ease: "power4.out" });
}
function moveIntroC() {
  gsap.to("#introC", { translateX:  '100px', opacity: 1, duration: 1, ease: "power4.out" });
}

window.addEventListener("load", () => {
  // gsap.to("#introA", { x: 0, opacity: 1, duration: 1, ease: "power4.out" });
  gsap.delayedCall(.2, moveIntroA);
  gsap.delayedCall(.5, moveIntroB);
  gsap.delayedCall(.9, moveIntroC);
});