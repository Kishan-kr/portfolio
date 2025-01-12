import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion'


function Contact({setAlert, variant}) {

  const [formData, setFormData ] = useState({ name: '', email: '', phone: '', message: ''});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(formData.name.length < 3) {
      setAlert({
        isOn: true,
        type: 'danger',
        msg: 'Name must be of 3 letters!'
      })
    }
    else if(formData.email.length < 3 && formData.email.includes('@')) {
      setAlert({
        isOn: true,
        type: 'danger',
        msg: 'Please provide a valid email!'
      })
    }
    else if(formData.message.length < 4 ) {
      setAlert({
        isOn: true,
        type: 'danger',
        msg: 'Please type in some message!'
      })
    }
    else {
      setLoading(true);
      emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      ).then((response) => {
        setAlert({
          isOn: true,
          type: 'success',
          msg: 'Form has been submitted successfully'
        });
        console.log(response);
        setFormData({ name: '', email: '', message: ''})
      }).catch((err) => {
        setAlert({
          isOn: true,
          type: 'danger',
          msg: err
        })
        console.log('FAILED...', err);
      }).finally(()=>{
        setLoading(false);
      });
    }
  };

  return (
    <motion.section 
      className='contact' 
      variants={variant}
      initial='hidden'
      animate='visible' 
      exit='hidden'
    >
      <div className="text-group">
        <p id="get-in-touch">Get in touch</p>
        <p id="would-love">I would love to hear from you!</p>
      </div>
      <form 
        className="form" 
        onSubmit={handleSubmit}
      >
        <div className="name">
          <input 
            type="text" 
            id='name' 
            name='name' 
            placeholder='Name' 
            required 
            value={formData.name} 
            onChange={handleChange}
          />
        </div>
        <div className="email">
          <input 
            type="email" 
            id='email' 
            name='email' 
            placeholder='Email' 
            required 
            value={formData.email} 
            onChange={handleChange}
          />
        </div>
        <div className="message">
          <textarea 
            rows="12" 
            type="text" 
            name='message' 
            id='message' 
            placeholder='Type your message...' 
            required 
            value={formData.message} 
            onChange={handleChange} 
          />
        </div>
        {/* <div className="captcha">
          <input type="checkbox" id="captcha" />
          <label htmlFor="captcha">reCaptcha</label>
        </div> */}
        <input type="submit" value={loading ? "Submitting..." : "Submit"} />
      </form>
    </motion.section>
  )
}

export default Contact