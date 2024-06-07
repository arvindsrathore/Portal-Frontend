import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../axiosInstance.js';
import './style.css';

const CompanyDetails = () => {
  const { companyId } = useParams();
  const [companyReviews, setCompanyReviews] = useState(null);

  useEffect(() => {
    axios.get(`/explore/details/${companyId}`)
      .then(response => {
        const data = response.data.message;
        console.log(data)
        setCompanyReviews(data)
      })
      .catch(e => {
        console.log('Error fetching company details')
      })
    
  }, [companyId]);

  if (!companyReviews) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      
      <div class="ag-format-container">
          <div class="ag-courses_box">
            <h1>{companyId}</h1>
            {companyReviews.map((companyReview, index) => (
              <div class="ag-courses_item">
              <a class="ag-courses-item_link">
                <div class="ag-courses-item_bg"></div>
                <div class="ag-courses-item_title">
                <p><strong>Author:</strong> {companyReview.auther}</p>
                  <p><strong>Role:</strong> {companyReview.role} ({companyReview.type})</p>
                  <p><strong>Duration:</strong> {companyReview.duration}</p>
                  <p><strong>Review:</strong> {companyReview.content}</p>
                  </div>
                {/* <div class="ag-courses-item_title">
                  {companyName.company}
                </div>
        
                <div class="ag-courses-item_date-box">
                  {'Reviews Available: '}
                  <span class="ag-courses-item_date">
                    {companyName.reviewCount}
                  </span>
                </div> */}
              </a>
            </div>
              ))}
          </div>
        </div>
      
    </div>
  );
};

export default CompanyDetails;
