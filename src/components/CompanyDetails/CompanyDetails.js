import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../axiosInstance.js';

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
  const centerStyle = {
    margin: 'auto',
    width: '50%',
    padding: '10px'
  };
  return (
    <>
      {companyReviews.map((companyReview, index) => (
          <div style = {centerStyle} class="col-lg-8 col-12">
              <div class="custom-text-block">
                  <h3 class="text-white mb-2" >{companyReview.role} - ({companyReview.type})</h3>

                  <p class="text-white">{companyReview.content}  website.</p>

                  <div class="custom-border-btn-wrap d-flex align-items-center mt-5">
                      <a href="#" class="custom-btn custom-border-btn btn me-4">{companyReview.duration}</a>

                      <a href="#" class="custom-link smoothscroll">{companyReview.auther}</a>
                  </div>
              </div>
          </div>
      ))}
    </>
  );
};

export default CompanyDetails;
