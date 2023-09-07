import React from 'react';
import './App.css';
import Navbar from './assets/components/Navbar';
import Home from './assets/pages/Home';
import Services from './assets/pages/Services';
import About from './assets/pages/About';
import Contacts from './assets/pages/Contacts';
import Login from './assets/pages/Login';
import Signup from './assets/pages/Signup';
import AdminDashboard from './assets/pages/AdminDashboard';
import ScrollToTop from './assets/components/ScrollToTop';
import UserDashboard from './assets/components/UserDashboard';
import CustomersList from './assets/components/CustomersList';
import OrdersList from './assets/components/OrdersList';
import MessagesList from './assets/components/MessagesList';
import PageNotFound from './assets/components/PageNotFound';
import SubscribersList from './assets/components/SubscribersList';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  const navbarPaths = ["/", "/services", "/about", "/contacts"];

  return (
    <>
    <Router scrollRestoration="auto">
      <ScrollToTop/>
      {navbarPaths.includes(window.location.pathname) && <Navbar />}
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/services" element={<Services/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contacts" element={<Contacts/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/admin" element={<AdminDashboard/>}>
              <Route index element={<UserDashboard/>}></Route>
              <Route path="customers-list" element={<CustomersList/>}></Route>
              <Route path="orders-list" element={<OrdersList/>}></Route>
              <Route path="messages-list" element={<MessagesList/>}></Route>
              <Route path="subscribers-list" element={<SubscribersList/>}></Route>
            </Route>
            <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
    </Router>
    </>
  );
};

export default App;
