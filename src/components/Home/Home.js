import React from 'react'
import './style.css';
import asset2 from './../../assets/asset2.jpg'
import {Link, NavLink} from 'react-router-dom'

function Home() {
  return (
    <div>
        <section class="hero-section">
      <div class="hero">
        <h2>Mobile App Development</h2>
        <p>
        ESP (Experience Sharing Platform) is a community-driven site where users share
         detailed experiences about coding rounds of various companies. It offers 
         insights on interview questions, coding challenges, and company-specific 
         hiring processes. Users can browse or contribute by posting their own 
         experiences, offering tips, and discussing strategies. 
        </p>
        <div class="buttons">
          <Link to='/register' class="join">Join Now</Link>
          <Link to="/explore">Explore</Link>
        </div>
      </div>
      <div class="img">
        <img src={asset2} alt="hero image" />
      </div>
    </section>
    </div>
  )
}

export default Home