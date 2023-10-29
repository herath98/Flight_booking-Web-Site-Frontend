
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Travelers from './Components/Travelers/Travelers'
import Info from './Components/Info/Info'
import Subscibers from './Components/Subscribers/Subscribers'

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Info' element={<Info />} />
          <Route path='Travelers' element={<Travelers />} />
          <Route path='Subscibers' element={<Subscibers />} />
        </Routes>
      </main>


      <Footer />

    </div>
  )
}

export default App