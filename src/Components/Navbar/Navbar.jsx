import {useState}from 'react'
import { Link } from 'react-router-dom';

import { SiConsul } from 'react-icons/si';
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CgMenuGridR } from 'react-icons/cg';
 //image import
import logo from '../../assets/img7.png';


const Navbar = () => {

  const[active,setActive]=useState("navBarMenu")
  const showNavBar =()=>{
    setActive('navBarMenu showNavBar')
  }
  const removeNavBar =()=>{
    setActive('navBarMenu')
  }

  const[noBg,addBg]=useState("navBarMenu")
  const addBgColor =()=>{
    if(window.scrollY >= 10){
      addBg('navBarTwo navbar_With_Bg')
    }
    else{
      addBg('navBarTwo ')
    }
  }
  window.addEventListener('scroll',addBgColor)

  return (
    <div className='navBar flex'>
        <div className='navBarOne flex'>
            <div>
            <SiConsul className='icon'/>
            </div>
            <div className='flex'>
               <li className='flex'><BsPhoneVibrate className='icon'/>Support</li>
               <li className='flex'><AiOutlineGlobal className='icon'/>Languages</li>
            </div>

          <div className='atb flex'>
                <span className='sp'>Sign In</span>
                <span className='sp'>Sign Out</span>

          </div>


        </div>
        <div className={noBg}>
          <div className='logoDiv'>
            <img src={logo} className='Logo'/>

          </div>
         <div onClick={showNavBar} className="toggleIcon">
              <CgMenuGridR className='icon'/>
            </div>  
          <div className={active}>
            <ul className="menu flex">
              <Link to='/'><li onClick={removeNavBar} className="listIteam">Home</li></Link>
              <Link to='Info'><li onClick={removeNavBar} className="listIteam">About</li></Link>
              <Link to='Travelers'><li onClick={removeNavBar} className="listIteam">Offers</li></Link>
              <Link to='Subscibers'><li onClick={removeNavBar} className="listIteam">Subscibers</li></Link>
              <li onClick={removeNavBar} className="listIteam">Destination</li>
              
            </ul>
            
           

          </div>
        </div>
    </div>
  )
}

export default Navbar