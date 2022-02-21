import React, { useHistory } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Attendance from './pages/Attendance';
import WorkOrg from './pages/WorkOrg';
import Login from './pages/Login';

// const history = useHistory();
function App() {
  return (
    <>
   
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Login/>} />
          <Route path='profile' element={<Profile/>} />
          <Route path='attendance' element={<Attendance/>} />
          <Route path='workHierarchy' element={<WorkOrg/>} />
          <Route element={<Logout/>} />
        </Routes>
      </Router>
    </>
  );
}
const Logout =()=>({
// history.push("/login");
});

export default App;