import { useState } from 'react'

import './App.css'
import {Route, Routes, Link} from 'react-router-dom';
import AdminLogin from './AdminLogin';
import ImplantLogin from './ImplantLogin';
import Home from './Home'
import AdminPage from './AdminPage';
import AdminLayout from './layout/AdminLayout';
import TellOverview from './components/teller/TellOverview';
import Payments from './components/teller/Payments';
import Generator from './components/teller/Generator';
import TellReports from './components/teller/TellReports';
import TellProfile from './components/teller/TellProfile';
import TellerPage from './TellerPage';
import Overview from './components/admin/Overview';
import Profile from './components/admin/Profile';
import SetupZone from './components/admin/SetupZone';
import Services from './components/admin/Services';
import Reports from './components/admin/Reports';


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/adminlogin" element={<AdminLogin />}/>
      <Route path="/overview" element={<Overview />} />
          <Route path="/setup-zone" element={<SetupZone />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/profile" element={<Profile />} />
      <Route path="/implantlogin" element={<ImplantLogin />}/>
      <Route path="/teller-page" element={<TellerPage />}/>
      <Route path="/tell-overview" element={<TellOverview />}/>
      <Route path="/payments" element={<Payments />}/>
      <Route path="/generator" element={<Generator />}/>
      <Route path="/tell-reports" element={<TellReports />}/>
      <Route path="/tell-profile" element={<TellProfile />}/>
      <Route path="/adminpage" element={<AdminLayout />}><Route path="" element={<AdminPage />}/></Route>
      
    </Routes>
   </div>
  )
}

export default App
