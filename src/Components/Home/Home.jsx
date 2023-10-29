import { useEffect } from 'react'
import video from '../../assets/v5.mp4'
import planee from '../../assets/img2.png'
import Search from '../Search/Search'

//import AOS ==============>
import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (

    <div className="home flex container">

      <div className='mainText'>
        <h1 className='h1' data-aos='fade-up' data-aos-duration='2500'>Create Ever-lasting Memories With Us</h1>
      </div>
      <div className="homeImage flex">
        <div data-aos='fade-left' data-aos-duration='2500' className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
        </div>

        <img data-aos='fade-right' data-aos-duration='2500' src={planee} className='plane' />
      </div>
      <Search/>
    </div>
  )
}

export default Home