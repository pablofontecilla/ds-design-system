import React, { useEffect, useRef, useState } from 'react';
import Header from './Header'
import FooterFlex from '../page/FooterFlex'
import SectionA from './PageScrolling/SectionA'
import SectionB from './PageScrolling/SectionB'
import shortid from 'shortid';

import useIntersectionObserver from './PageScrolling/UseIntersectionObserver';
import SectionC from './PageScrolling/SectionC';

const options = {
  rootMargin: '0px',
  threshold: 0.5
}

const callback = () => {


}

export default function PageScrolling({ componentsToShow }: { componentsToShow: string[] }) {
const [, setViews] = useState<React.ReactElement[]>([]);
  // const { i18n } = useTranslation();

  useEffect(() => {
    async function loadViews() {
      const componentPromises = componentsToShow.map(async data => {
        const View = await importView(data.toString());
        return <View key={shortid.generate()} data={data} />;
      });
      Promise.all(componentPromises).then(setViews);
    }

    loadViews();
  }, [componentsToShow]);



  const { targetRef, isVisible } = useIntersectionObserver(options);

  // Function to run when intersecting
  useEffect(() => {
    if (isVisible) {
      console.log(targetRef + 'is visible?');
      // e.g., lazy load data or trigger animation
    } else {
      console.log(targetRef.current + 'Element is not visible.');
    }
  }, [isVisible]);

  const [activeItem, setActiveItem] = useState<number | null>(null);
  const goToSection = (index: number) => {
    setActiveItem(index);
  };

  const sectionARef = useRef<HTMLDivElement | null>(null);
  const sectionBRef = useRef<HTMLDivElement | null>(null);
  const sectionCRef = useRef<HTMLDivElement | null>(null);
  const sectionDRef = useRef<HTMLDivElement | null>(null);

  const observer = new IntersectionObserver(callback, options);


  React.useEffect(() => {
    const sectionElements = document.querySelectorAll('.section-rev');
    sectionElements.forEach(section => observer.observe(section));

    return () => {
    };
  }, []);

  const handleSection = (_sectionId: string) => {
    switchHeader();
  };


  function handleClickB2() {
    window.location.href = '/page/art-cabinets';
  };



  // intersectObserver //////////////////////////////
  // const numSteps = 20.0;
  const boxElement = document.querySelector("#box");
  let prevRatio = 0.0;

  createObserver();
  function createObserver() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    if (boxElement) {
      observer.observe(boxElement);
    }
  }

  function handleIntersect(entries: any[]) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > prevRatio) {
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
      prevRatio = entry.intersectionRatio;
    });
  }

  function switchHeader() {
  }

  return (
    <>
      <div className="ds-page-flex">
        <Header />
        <div className='sections-ctn id="scrollArea"'>
          <section ref={sectionARef} className="section sectionA section-rev"><SectionA /></section>
          <section ref={sectionBRef} className="section sectionB section-rev"><SectionB /></section>
          <section ref={sectionCRef} className="section sectionC section-rev"><SectionC /></section>

        </div>

        <FooterFlex />
      </div>
    </>
  )
}

function importView(componentName: string) {
  const componentMap: { [key: string]: React.ComponentType<any> } = {
    // BoxesArtists: lazy(() => import('./drawer-right/ArtBoxes')),
    // ArtCabinetsB: lazy(() => import('./drawer-right/ArtCabinets-B')),
    // SectionB: lazy(() => import('./homepage/SectionB')),
  };
  // alert(componentName)
  return componentMap[componentName] || null;
}