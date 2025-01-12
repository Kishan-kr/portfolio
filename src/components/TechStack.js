import React from 'react'
import {motion} from 'framer-motion'

const skillVariant = {
  hidden: {
    scale : 0
  },
  visible : {
    scale : 1,
    transition : {
      type : 'spring',
      duration : 0.5,
      delay : 0.2
    }
  }
}

const skills = [
  {name:'react js', id:'react'},
  {name:'node js', id:'node'},
  {name:'typescript', id:'ts'},
  {name:'javascript', id:'js'},
  {name:'tailwind css', id:'tailwind'},
  {name:'espress js', id:'ex'},
  {name:'mongo db', id:'mongo'},
  {name:'c++', id:'cpp'},
  {name:'java', id:'java'},
  {name:'socket io', id:'socket'},
  {name:'html', id:'html'},
  {name:'bootstrap', id:'bs'},
  {name:'css', id:'css'},
]

function TechStack() {
  return (
    <div className='tech-stack-section'>
      <div className="head" >
        <h3>Tech Stack</h3>
        <hr className='hr-line'/>
      </div>

      <ul id="tech-container">{
        skills.map((skill)=> {
          return (
            <motion.li 
              key={skill.id}
              className='skill' 
              id={skill.id} 
              variants={skillVariant} 
              initial='hidden' 
              whileInView='visible' 
            > <p>{skill.name}</p>
            </motion.li>
          )
        })
      }</ul>
    </div>
  )
}

export default TechStack;