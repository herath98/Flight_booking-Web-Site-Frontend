// eslint-disable-next-line no-unused-vars
import React,{useState}from 'react'

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
              <li onClick={removeNavBar} className="listIteam">Home</li>
              <li onClick={removeNavBar} className="listIteam">About</li>
              <li onClick={removeNavBar} className="listIteam">Offers</li>
              <li onClick={removeNavBar} className="listIteam">Seats</li>
              <li onClick={removeNavBar} className="listIteam">Destination</li>
              
            </ul>
            <button className='btn flex btnOne'>
              Contast
            </button>
            <button className='btn flex btnTwo'>
              Contast
            </button>
            

          </div>
        </div>
    </div>
  )
}

export default Navbar