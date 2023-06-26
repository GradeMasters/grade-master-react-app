import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from './utils/constants';
// import './Navbar.css'; // don't import css files directly, have a css folder that sits under src as well, 
// then create a main css file to import all of the css files into, them import the main css into the index js file
// import pic from '.public/img/grademaster';

//  THIS IS NOT GOING TO WORK - GOING TO HAVE TO USE ROUTES INSTEAD OF HREF
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
            <img />
            </a>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to={Routes.LOGIN}>Home</Link>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};