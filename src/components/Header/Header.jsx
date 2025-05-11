import React from 'react';
import "./Header.css";
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <div className='header flex flex-col' id = "header">
        <Navbar />

        <div className='container flex'>
            <div className='header-content'>
                <h2 className='text-uppercase text-black op-01 fw-6 ls-2'>Welcome to my Personal Portfolio</h2>
                <h1 className='text-white fw-6 header-title'>Ni Hao Woshi Dunggai an IT student UI/UX Designer with a soft spot for all things feline. </h1>
                <div className='btn-groups flex'>
                  <button type = "button" className='btn-item bg-pink
                  '>See Works</button>
                  <button type = "button" className='btn-item bg-dark fw-4 ls-2'>Contact Me</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header