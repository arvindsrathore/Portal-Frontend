import React from 'react'
import Home from '../Home/Home'
import axios from '../../axiosInstance.js';
import { useNavigate } from 'react-router-dom';

function Logout() {
  
  const navigate = useNavigate();

  
const handleLogout = async(e) => {
  try{
    const result = await axios.get('/users/logout');
    
    if (result.data.status==="success") {
      navigate('/explore');
    }
    navigate('/explore');
  }
  catch(error) {
    console.log('Failure')
    navigate('/explore');
  }
}
  return (
    <>
    <section class="hero-section d-flex justify-content-center align-items-center">
                <div class="section-overlay"></div>

                <div class="container">
                    <div class="row">

                        <div class="col-lg-6 col-12 mb-5 mb-lg-0">
                            <div class="hero-section-text mt-5">
                                <h6 class="text-white">Are you sure you want to LogOut?</h6>

                                <button onClick={handleLogout} class="custom-btn custom-border-btn btn">Yes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Logout