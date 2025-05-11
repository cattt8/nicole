import React, {useRef, useState} from 'react';
import "./About.css";
import images from "../../constants/images";
import {about_stats} from "../../constants/data";


const About = () => {
    
   
  return (
    <div className='about section-p'>
        <div className='container'>
            <div className='about-content'>
                <div className='about-grid grid'>
                    <img src = {images.About_Alex} alt = "" className='about-img mx-auto' />
                    <div className='section-title'>
                        <h3 className='text-dark'>I'm <span className='text-pink'>Angelica Nicole</span></h3>
                        <p className='text mx-auto'>a second-year BSIT student at Dalubhasaan ng Lungsod ng Lucena 
           with a knack for both coding and cuddling cats. I'm passionate about sinking my claws into new 
           technologies, sharpening my skills in programming and web development, and pouncing on innovative 
           solutions in the IT field. Eager to gain hands-on experience, I'm ready to leap into challenging 
           projects that will help me grow.</p>
                    </div>
                </div>

                <div className='about-grid grid'>
                    {
                        about_stats.map((about_stat, index) => {
                            return (
                                <div className='about-item text-center flex' key = {index}>
                                    <div className='about-item-icon'>
                                        <img src = {about_stat.image} alt = "" />
                                    </div>
                                    <div className='about-item-text text-left'>
                                        <h3 className='fs-24 ls-2'>{about_stat.value}</h3>
                                        <p className='text'>{about_stat.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    </div>
  )
}

export default About