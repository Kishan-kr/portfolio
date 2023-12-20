import React from 'react'
import { Link } from 'react-router-dom'

function Social() {

  return (
    <div className='social text-white'>
      <div className="links">
        <Link to='https://www.instagram.com/its_kishan_singh/' target='_blank' className='so-item'>
          <i className="fa-brands fa-instagram fa-2x"></i>
        </Link>

        <Link to='https://github.com/Kishan-kr' target='_blank' className='so-item'>
          <i className="fa-brands fa-github fa-2x"></i>
        </Link>

        <Link to='https://www.linkedin.com/in/kishan-k/' target='_blank' className=' so-item' >
          <i className="fa-brands fa-linkedin fa-2x"></i>
        </Link>
        <p id='social-head'></p>
      </div>
      <p id="social-heading">Connect with me on</p>
      <hr id='v-line' />
    </div>
  )
}

export default Social