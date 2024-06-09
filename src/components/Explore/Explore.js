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

          <header className="site-header">
                <div className="section-overlay"></div>

                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-12 col-12 text-center">
                            <h1 className="text-white">Explore Portal</h1>

                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a >Home</a></li>

                                    <li className="breadcrumb-item active" aria-current="page">Explore</li>
                                </ol>
                            </nav>
                        </div>

                    </div>
                </div>
            </header>
      <section className="categories-section section-padding" id="categories-section">
                <div className="container">
                    <div className="row justify-content-center align-items-center">

                        <div className="col-lg-12 col-12 text-center">
                            <h2 className="mb-5">Browse by <span>Categories</span></h2>
                        </div>

                        {companyNames.map((companyName, index) => (
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="categories-block">
                                <a onClick={ () => handleCompanydata(companyName.company) } className="d-flex flex-column justify-content-center align-items-center h-100">
                                    <i className="categories-icon bi-window"></i>

                                    {/* <b className="categories-icon">A</b> */}
                                
                                    <small className="categories-block-title">{companyName.company}</small>

                                    <div className="categories-block-number d-flex flex-column justify-content-center align-items-center">
                                        <span className="categories-block-number-text">{companyName.reviewCount}</span>
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
    //     <div className="ag-format-container">
    //       <div className="ag-courses_box">

    //         {companyNames.map((companyName, index) => (
    //           <div className="ag-courses_item">
    //           <a onClick={ () => handleCompanydata(companyName.company) } className="ag-courses-item_link">
    //             <div className="ag-courses-item_bg"></div>
        
    //             <div className="ag-courses-item_title">
    //               {companyName.company}
    //             </div>
        
    //             <div className="ag-courses-item_date-box">
    //               {'Reviews Available: '}
    //               <span className="ag-courses-item_date">
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
