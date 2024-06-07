import React from 'react'
import { useState, useEffect } from 'react';
import axios from '../../axiosInstance.js';
import { useNavigate } from 'react-router-dom';
import './style.css';

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
    <div>
      <div>
        <div class="ag-format-container">
          <div class="ag-courses_box">

            {companyNames.map((companyName, index) => (
              <div class="ag-courses_item">
              <a onClick={ () => handleCompanydata(companyName.company) } class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
        
                <div class="ag-courses-item_title">
                  {companyName.company}
                </div>
        
                <div class="ag-courses-item_date-box">
                  {'Reviews Available: '}
                  <span class="ag-courses-item_date">
                    {companyName.reviewCount}
                  </span>
                </div>
              </a>
            </div>
            ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Explore;
