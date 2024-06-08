import React from 'react'
import { useState, useEffect } from 'react';
import axios from '../../axiosInstance.js';
import { useNavigate } from 'react-router-dom';

function Explore() {
  const [companyNames, setCompanyNames] = useState([]);

  useEffect(() => {
    // Fetch company names from backend API
    axios.get('explore/getCompanies')
      .then(response => {
        console.log(response.data.message);
        const data = response.data.message;
        
        setCompanyNames(data);
      })
      .catch(error => {
        console.error('Error fetching company names:', error);
      });
  }, []);

  const navigate = useNavigate();
  const handleCompanydata = async(companyId) => {
    navigate(`/details/${companyId}`)    
  }
  return (
    <>

      <section class="categories-section section-padding" id="categories-section">
                <div class="container">
                    <div class="row justify-content-center align-items-center">

                        <div class="col-lg-12 col-12 text-center">
                            <h2 class="mb-5">Browse by <span>Categories</span></h2>
                        </div>

                        {companyNames.map((companyName, index) => (
                        <div class="col-lg-2 col-md-4 col-6">
                            <div class="categories-block">
                                <a onClick={ () => handleCompanydata(companyName.company) } class="d-flex flex-column justify-content-center align-items-center h-100">
                                    <i class="categories-icon bi-window"></i>

                                    {/* <b class="categories-icon">A</b> */}
                                
                                    <small class="categories-block-title">{companyName.company}</small>

                                    <div class="categories-block-number d-flex flex-column justify-content-center align-items-center">
                                        <span class="categories-block-number-text">{companyName.reviewCount}</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

    </>


    // <div>
    //   <div>
    //     <div class="ag-format-container">
    //       <div class="ag-courses_box">

    //         {companyNames.map((companyName, index) => (
    //           <div class="ag-courses_item">
    //           <a onClick={ () => handleCompanydata(companyName.company) } class="ag-courses-item_link">
    //             <div class="ag-courses-item_bg"></div>
        
    //             <div class="ag-courses-item_title">
    //               {companyName.company}
    //             </div>
        
    //             <div class="ag-courses-item_date-box">
    //               {'Reviews Available: '}
    //               <span class="ag-courses-item_date">
    //                 {companyName.reviewCount}
    //               </span>
    //             </div>
    //           </a>
    //         </div>
    //         ))}
    //     </div>
    //   </div>
    //   </div>
    // </div>
  );
}

export default Explore;
