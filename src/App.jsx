// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Search/Search'
import Lounge from './Components/Lounge/Lounge'
import Footer from './Components/Footer/Footer'
import Support from './Components/Support/Support'
import Travelers from './Components/Travelers/Travelers'
import Info from './Components/Info/Info'
import Subscibers from './Components/Subscribers/Subscribers'
// import main from './main.css'
const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscibers />
      <Footer /> */}

    </div>
  )
}

export default App