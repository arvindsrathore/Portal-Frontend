import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from './components/Layout/Layout.js';
import Explore from './components/Explore/Explore.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js'
import Register from './components/Register/Register.js';
import Login from './components/Login/Login.js';
import Post from './components/Post/Post.js';
import CompanyDetails from './components/CompanyDetails/CompanyDetails.js';
import Home from './components/Home/Home.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='home' element={<Home />} />
      <Route path='explore' element={<Explore />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route path='post' element={<Post />} />
      <Route path='details/:companyId' element={<CompanyDetails />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>;
  </React.StrictMode>
);