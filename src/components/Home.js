import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import avatar from '../avatar.png'
import StartProject from './StartProject'

function Home({variant}) {
  const [quote, setQuote] = useState({content: "If you tell the truth, you don't have to remember anything.", author: 'Mark Twain'});

  async function getQuote() {
    try {
      const response = await fetch('https://api.quotable.io/random?maxLength=120');
      const data = await response.json();
      if (data) {
        setQuote(data);
      }
    } catch (error) {
      console.error('Error fetching quote: ', error);
    }
  }
  
  useEffect(() => {
    getQuote();

  }, [])
  
  return (
    <motion.div 
      variants={variant}
      initial='hidden'
      animate='visible' 
      exit='hidden'
    >
    <main className='home'>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <p className='my-name text-tiffany' >Hello my name is</p>
      <p className='name'>Kishan Kumar.</p>
      <div className='prof-container'>
        <div className="text-wrap">
          <span id='push'>Push &#40; </span>
          <span className="animation">
            <span>
              <div id='fullstack'>Fullstack</div>
              <div id='backend'>Backend</div>
              <div id='frontend'>Frontend</div>
            </span>
          </span>

        </div>

      </div>
      <p className="desc">I am able to develop <span>clean</span>, <span>efficient</span>, and <span>scalable</span> code using a variety of programming languages and frameworks, and I am skilled at integrating databases and third-party APIs.</p>
      <div className="quote">
        <p id="quote"><span className="quotation">“</span>
          {quote?.content? quote.content: "Loading..."}
          <span className="quotation">”</span>
        </p>
        <p className="writer text-charcoal">― {quote.author}</p>
      </div>
    </main>
    <StartProject />
    </motion.div>
  )
}

export default Home