import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Kitchens from './pages/Kitchens';
import VendorRegister from './pages/VendorRegister';
import VendorLogin from './pages/VendorLogin';

export default function App() {
  return (
    <BrowserRouter>
      <nav className="fade-in">
        <Link to="/">Home</Link> |{' '}
        <Link to="/register">User Register</Link> |{' '}
        <Link to="/login">User Login</Link> |{' '}
        <Link to="/vendor/register">Vendor Register</Link> |{' '}
        <Link to="/vendor/login">Vendor Login</Link> |{' '}
        <Link to="/kitchens">Kitchens</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vendor/register" element={<VendorRegister />} />
        <Route path="/vendor/login" element={<VendorLogin />} />
        <Route path="/kitchens" element={<Kitchens />} />
      </Routes>
    </BrowserRouter>
  );
}
