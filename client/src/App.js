import {
  FAG,
  Home,
  Blog,
  About,
  Works,
  Sliders,
  Contacts,
  Navbar,
} from './Exports';
import './App.css';
//import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { useGSAP } from '@gsap/react'



gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)

function App() {

  const wrapper = useRef(null);

  useGSAP(() => {
    wrapper.current = ScrollSmoother.create({
      smooth: 1.5,
      wrapper: '.wrapper',
      content: '.content',
      effects: true
    });

    ScrollTrigger.create({
      trigger: '.wrapper',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
    });

    gsap.fromTo('.header-section', {transition: 1, opacity: 1}, {
      opacity: 0,
      transition: 1,
      scrollTrigger: {
        trigger: '.header-section',
        start: 'center',
        scrub: true,
        end: '820'
      }
    })

    gsap.fromTo('.about-me-title-box', { opacity: 0, transform: 'translateX(-100%)'}, {
      opacity: 1,
      transform: 'translateX(0)',
      scrollTrigger: {
        trigger: '.header-section', 
        start: 'top', 
        scrub: true,
        end: '1100'
      }
    })

    gsap.fromTo('.about-me-icon', { opacity: 0, transform: 'translateX(-100%'}, {
      opacity: 1,
      transform: 'translateX(0)',
      delay: 2,
      //transition: '1s',
      scrollTrigger: {
        trigger: '.header-section',
        start: 'top',
        scrub: true,
        end: 'center',
      }
    })

  })

  return (
    <div className='wrapper container m-auto'>
      <div className='content'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/fag' element={<FAG />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Works />} />
          <Route path='/sliders' element={<Sliders />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
