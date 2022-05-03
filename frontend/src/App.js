import React from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Header from './Header';
import {BrowserRouter as Router, Route,Routes, Link} from 'react-router-dom';
function App() {
  return (
  <>
    <Router>
      <div className='container'>
        <Header/>
        <Routes>
         <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          </Routes>
      </div>
      </Router>
  </>
  )
  
}
export default App;


