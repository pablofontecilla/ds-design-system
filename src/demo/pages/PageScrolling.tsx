import React, { useEffect, useRef, useState } from 'react';
import Header from './Header'
import FooterFlex from '../page/FooterFlex'
import SectionA from './PageScrolling/SectionA'
import SectionB from './PageScrolling/SectionB'
import shortid from 'shortid';

import useIntersectionObserver from './PageScrolling/UseIntersectionObserver';
import SectionC from './PageScrolling/SectionC';
import { observe } from 'react-intersection-observer';


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

export default function PageScrolling({ componentsToShow }: { componentsToShow: string[] }) {


const sections = [
  { id: 'sectionA', ref: useRef<HTMLDivElement | null>(null) },
  { id: 'sectionB', ref: useRef<HTMLDivElement | null>(null) },
  { id: 'sectionC', ref: useRef<HTMLDivElement | null>(null) },
];

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
        <div className='sections-ctn' id="scrollArea">
          <section className="section sectionA show"><SectionA /></section>
          <section className="section sectionB"><SectionB /></section>
          <section  className="section sectionC"><SectionC /></section>

        </div>

        <FooterFlex />
      </div>
    </>
  )
}

// function importView(componentName: string) {
//   const componentMap: { [key: string]: React.ComponentType<any> } = {
//     // BoxesArtists: lazy(() => import('./drawer-right/ArtBoxes')),
//     // ArtCabinetsB: lazy(() => import('./drawer-right/ArtCabinets-B')),
//     // SectionB: lazy(() => import('./homepage/SectionB')),
//   };
//   // alert(componentName)
//   return componentMap[componentName] || null;
// }