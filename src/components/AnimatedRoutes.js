import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import useWindowWidth from '../hooks/useWindowWidth';
import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes({setAlert}) {

  const width = useWindowWidth();
  const pageVariant = {
    hidden: {
      opacity: 0,
      x: -width,
      transition : {
        duration: 0.3
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition : {
        duration: 0.3,
        delay: 0.1, 
        type: 'spring' , 
        stiffness: 90, 
        damping: 14
      }
    }
  }

  const location = useLocation();

  return (
    <AnimatePresence >
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home variant={pageVariant}/>} />
      <Route path='/projects' element={<Projects variant={pageVariant}/>} />
      <Route path='/about' element={<About variant={pageVariant}/>} />
      <Route path='/contact' element={<Contact setAlert={setAlert} variant={pageVariant}/>} />
    </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes