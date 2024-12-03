// import React from "react";
// import aboutUsData from "./About";
// import commonData from '../../Data/CommonData'
// import './AboutUs.css'

// import AboutImg5 from "../../asset/img/aboutus.png";

// const AboutUs = () => {
//   return (
//     // About Start
//     <div id="someId" className="container-fluid about py-5">
//       <div className="container py-5">
//         <div className="row g-5 align-items-center">
//           <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s">
//             <div>
//               <h4 className="text-primary">About Us</h4>
//               <h1 className="display-5 mb-4">
//                 {aboutUsData[0].aboutHeading}
//               </h1>
//               <p className="mb-4">
//                 {aboutUsData[0].aboutDescription}
//               </p>
//               <div className="row g-4">
//                 <div className="col-md-6 col-lg-6 col-xl-6">
//                   <div className="d-flex">
//                     <div>
//                       <i className="fas fa-lightbulb fa-3x" style={{ color: '#44993F' }}></i>
//                     </div>
//                     <div className="ms-4">
//                       <h4>{aboutUsData[0].consultUs}</h4>
//                       <p>
//                         {aboutUsData[0].consultUsDescription}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-6 col-lg-6 col-xl-6">
//                   <div className="d-flex">
//                     <div>
//                       <i className="bi bi-bookmark-heart-fill fa-3x" style={{ color: '#44993F' }}></i>
//                     </div>
//                     <div className="ms-4">
//                       <h4>{aboutUsData[0].yearOfExpHeading}</h4>
//                       <p>
//                         {aboutUsData[0].yearOfExpDescription}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-sm-6">
                 
//                 </div>
//                 <div className="col-sm-6">
//                   <div className="d-flex">
//                     {/* Using inline styles to change color */}
//                     <i className="fas fa-phone-alt fa-2x me-4" style={{ color: '#44993F' }}></i>
//                     <div>
//                       <h4>Call Us</h4>
//                       <p className="mb-0 fs-5" style={{ letterSpacing: "1px" }}>
//                         {commonData[0].primaryContact}
//                         <br />
//                         {commonData[0].secondaryContact}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s">
//             <div className="rounded position-relative overflow-hidden" style={{ background: "a7c957" }}>
//               <img src={AboutImg5} className="img-fluid rounded w-100" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     // About End
//   );
// };

// export default AboutUs;



import React from "react";
import aboutUsData from "./About";
import commonData from '../../Data/CommonData'
import './AboutUs.css'

import AboutImg5 from "../../asset/img/pexels-pixabay-356056.jpg";

const AboutUs = () => {
  return (
    // About Start
    <div id="someId" className="container-fluid about py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s">
            <div>
            <h4 style={{ color: 'green', fontWeight: 'bold', fontSize: '24px' }}>About Us</h4>
              <h1 className="display-5 mb-4" style={{ color: '#44993F' }}>
                {aboutUsData[0].aboutHeading}
              </h1>
              <p className="mb-4">
                {aboutUsData[0].aboutDescription}
              </p>
              <div className="row g-4">
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="d-flex">
                    <div>
                      <i className="fas fa-lightbulb fa-3x text-green"></i>
                    </div>
                    <div className="ms-4">
                      <h4>{aboutUsData[0].consultUs}</h4>
                      <p>
                        {aboutUsData[0].consultUsDescription}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="d-flex">
                    <div>
                      <i className="bi bi-bookmark-heart-fill fa-3x text-green"></i>
                    </div>
                    <div className="ms-4">
                      <h4>{aboutUsData[0].yearOfExpHeading}</h4>
                      <p>
                        {aboutUsData[0].yearOfExpDescription}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                 
                </div>
                <div className="col-sm-6">
                  <div className="d-flex">
                    <i className="fas fa-phone-alt fa-2x text-green me-4"></i>
                    <div>
                      <h4>Call Us</h4>
                      <p className="mb-0 fs-5" style={{ letterSpacing: "1px" }}>
                        {commonData[0].primaryContact}
                        <br />
                        {commonData[0].secondaryContact}
                      </p>
                    </div>
                  </div>
                </div>W
              </div>
            </div>
          </div>
          <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s">
            <div className="rounded position-relative overflow-hidden" style={{ background: "a7c957" }}>
              <img src={AboutImg5} className="img-fluid rounded w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    // About End
  );
};

export default AboutUs;
