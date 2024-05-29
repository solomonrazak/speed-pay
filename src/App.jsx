import { useState } from 'react'

import './App.css'
import {Route, Routes, Link} from 'react-router-dom';
import AdminLogin from './AdminLogin';
import ImplantLogin from './ImplantLogin';
import Home from './Home'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/adminlogin" element={<AdminLogin />}/>
      <Route path="/implantlogin" element={<ImplantLogin />}/>
      
    </Routes>
   </div>
  )
}

export default App
