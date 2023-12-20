import React from 'react'
import { Link } from 'react-router-dom'

function StartProject() {

  return (
    <div className='start-project bg-air-blue text-white'>
      <h3>Start a project</h3>
      <p>Interested in working together? We should queue up a time to chat.</p>
      <Link to={'/contact'} className='btn-outline'>
        <i className='fa-regular fa-hand-peace'></i>
         Let's Do This
      </Link>
    </div>
  )
}

export default StartProject