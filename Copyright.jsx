import React from 'react';
import './Copyright.css';

const Copyright = () => {
  return (
    <div className="container-fluid copyright py-4">
      <div className="container text-center">
        <div className="row g-4 align-items-center">
          <div className="col-md-12 text-center d-flex justify-content-center text-md-start mb-md-0">
            <span className="text-white">
              <i className="fas fa-copyright text-light me-2"></i>2024-E-Cycle Solutions, All rights reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
