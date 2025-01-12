import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
// import useParallax from '../hooks/useParallax'
// import useMediaQuery from '../hooks/useMediaQuery';

function Project({ container, thumbnail, title, desc, techStack, link }) {

  const thumb = useRef(null);

  // const isLandscape = useMediaQuery("(min-width: 768px)");

  // const { scrollYProgress } = useScroll({container, target: thumb});
  // const rotate = useParallax(scrollYProgress, 10);
  // const y = useParallax(scrollYProgress, 100);

  return (
    <div className="project" ref={thumb} >
      <motion.div 
        className="thumbnail" 
        >
        <div className="view-project">
          <Link to={link} className='btn-outline'>View Project</Link>
        </div>
        <img src={thumbnail} alt="" />
        
      </motion.div>
      <motion.div className="desc-side" >
        <h4 className="title">{title}</h4>
        <div className="detail">
          <p className="desc">{desc}</p>
          <div className="tech-used">{
            techStack.map((tech) => {
              return (<span key={tech}>{tech}</span>)
            })
          }</div>
        </div>
        <Link to={link} className='mobile-view-project'>
          View Project <i className='fa-solid fa-arrow-right' />
        </Link>
      </motion.div>
    </div>
  )
}

export default Project