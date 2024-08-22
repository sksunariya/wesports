import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/userComponents/Login';
import Signup from './components/userComponents/Signup';
import SportsChoice from './components/userComponents/SportsChoice';
import Home from './components/common/Home';
import Courts from './components/courtComponents/Courts';
import Connect from './components/connectComponents/Connect';
import Profile from './components/userComponents/Profile';
import CreateMatch from './components/connectComponents/CreateMatch';
import CreateCourt from './components/courtComponents/CreateCourt';
import CourtActions from './components/courtComponents/CourtActions';
import ConnectActions from './components/connectComponents/ConnectActions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sports-choice" element={<SportsChoice />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courts" element={<CourtActions/>} />
        <Route path="/courts/see-available-courts" element={<Courts />} />
        <Route path='/connect/see-available-matches' element={<Connect/>} />
        <Route path='/createCourt' element={<CreateCourt/>} />
        <Route path="/connect" element={<ConnectActions/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/connect/createMatch' element={<CreateMatch/>} />
      </Routes>
    </Router>
  );
}

export default App;
