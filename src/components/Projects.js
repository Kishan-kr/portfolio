import React, { useRef } from 'react'
import allProjects from '../data/projects';

import onNotebook from '../sc/onNotebook.svg'
import WeatherForecast from '../sc/weatherForecast.svg'
import Babble from '../sc/babble.svg'
import Mellow from '../sc/mellow.svg';
import TypeRush from '../sc/typeRush.svg';
import TextEase from '../sc/textEase.svg';
import Calculator from '../sc/calculator.svg';
import { motion, useScroll, useSpring } from "framer-motion";
import TechStack from './TechStack';
import Project from './Project';
import useMediaQuery from '../hooks/useMediaQuery';
import StartProject from './StartProject';


export default function Projects({variant}) {

  const container = useRef(null);
  const isLandscape = useMediaQuery("(min-width: 768px)");
  const { scrollYProgress, scrollXProgress } = useScroll({ container });

  const X = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const Y = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  const images = [
    onNotebook,
    Babble,
    WeatherForecast,
    Mellow,
    TypeRush,
    Calculator,
    TextEase,
  ]

  return (
    <motion.div
      variants={variant}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <section>
        <div className="head">
          <h3>Some Projects I've Built</h3>
          <hr className='hr-line' />
        </div>
        <motion.div
          className="progress bg-air-blue"
          style={isLandscape ? { scaleX: Y } : { scaleX: X }} />
        <div id="proj-container" ref={container} > {
          allProjects.map((project, idx) => {
            return (<Project
              key={project.title}
              thumbnail={images[idx]}
              title={project.title}
              desc={project.desc}
              techStack={project.techStack}
              link={project.link}
              container={container}
            />)
          })
        }</div>

        <TechStack />
      </section>
      <StartProject />
    </motion.div>
  )
}
