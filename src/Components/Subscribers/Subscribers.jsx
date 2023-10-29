import React, { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Subscribers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="subscribers section">
      <div className="sectionContainer container">
        <h2 data-aos='fade-left' data-aos-duration='2500'>Subscribe Newsletters & get Latest News</h2>
        <div data-aos='fade-up' data-aos-duration='2500' className="inputDiv">
          <input className='text' type="text" placeholder='Enter your email address' />
          <button className='btn'>Subscribers</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribers