import React from 'react'

const OurServicesCard = ({ img, title, description }) => {

  return (
    <div className="col-md-6 col-lg-4" data-aos="fade-down">
      <div className="service-item">
        <div className="service-img">
          <img
            src={img}
            className="img-fluid rounded-top w-100"
            style={{ width: "400px", height: "250px" }} // Corrected `weight` to `width`
            alt=""
          />
        </div>
        <div className="rounded-bottom p-4">
        <a className="h4 d-inline-block mb-4 text-decoration-none">
  {title}
</a>
          <p className="mb-4">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default OurServicesCard;
