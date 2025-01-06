import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Safety from './components/Safety';
import Shop from './components/Shop';
import Navbars from './components/Navbars'
import { Route, Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/Safety' element={<Safety/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
      </Routes>
    </>
  )
}

export default App
