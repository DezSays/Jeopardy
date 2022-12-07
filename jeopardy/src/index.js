import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './LandingPage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserLayout from './components/layout/UserLayout.js'
import HostLayout from './components/layout/HostLayout.js'
import GenericLayout from './components/layout/GenericLayout.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserDashboard from './components/dashboards/UserDashboard.js'
import Logout from './components/auth/Logout.js'
import HostDashboard from './components/dashboards/HostDashboard.js'
import CreateGame from './components/CreateGame.js'
import PlayGame from './components/PlayGame.js'
import Login from './components/auth/Login.js'
import Registration from './components/auth/Registration.js'

import App from './App'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />
  // <React.StrictMode>
  //   <LandingPage />
  //   <Router>
  //       <UserLayout>
  //         <Routes>
  //           <Route path='/UserDashboard' element={<UserDashboard />} />
  //           <Route path='/Logout' element={<Logout />} />
  //         </Routes>
  //       </UserLayout>

  //       <HostLayout>
  //         <Routes>
  //           <Route path='/HostDashboard' element={<HostDashboard />} />
  //           <Route path='/CreateGame' element={<CreateGame />} />
  //           <Route path='/PlayGame' element={<PlayGame />} />
  //           <Route path='/Logout' element={<Logout />} />
  //         </Routes>
  //       </HostLayout>

  //       <GenericLayout>
  //         <Routes>
  //           <Route path='/' element={<LandingPage />} />
  //           <Route path='/Login' element={<Login />} />
  //           <Route path='/Registration' element={<Registration />} />
  //         </Routes>
  //       </GenericLayout>
  //   </Router>
  // </React.StrictMode>
);



