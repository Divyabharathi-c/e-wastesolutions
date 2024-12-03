// // import React from 'react';
// // import commonData from '../../Data/CommonData.js';
// // import MainLogo from '../../asset/img/MainLogoSymbolText-removebg-preview.png';
// // import './Footer.css';

// // const Footer = () => {
// //   return (
// //     <div id="ftId" className="container-fluid footer py-4 wow fadeIn" data-wow-delay="0.2s">
// //       <div className="container py-4 border-start-0 border-end-0" style={{ border: "1px solid", borderColor: 'rgb(255, 255, 255, 0.08)', lineHeight: '1.6' }}>
// //        <div className="row d-flex align-items-stretch">
// //         <div className="col-md-3 d-flex flex-column justify-content-between-0.5 footer-item">
// //             <a href="index.html" className="p-0">
// //               <h4 className="text-white mb-3">
// //                 <div style={{ backgroundColor: 'white', display: 'inline-block', padding: '5px 10px', lineHeight: '1.6' }}>
// //                   <img src={MainLogo} alt="MainLogo" style={{ width: 200 }} />
// //                 </div>
// //               </h4>
// //             </a>
// //             <p className="mb-4" style={{ color: 'white', fontSize: '14px', lineHeight: '1.6' }}>{commonData[0].footerContent}</p>
// //             <div className="d-flex justify-content-start ">
// //               <a className="btn btn-sm-square rounded-circle me-3 social-icon" href="//www.facebook.com/eycle.bangalore" target="_blank" rel="noopener noreferrer">
// //                 <i className="fab fa-facebook-f text-white"></i>
// //               </a>
// //               <a className="btn btn-sm-square rounded-circle me-3 social-icon" href="//x.com/ecyclesolu50704" target="_blank" rel="noopener noreferrer">
// //                 <i className="fab fa-twitter text-white"></i>
// //               </a>
// //               <a className="btn btn-sm-square rounded-circle me-3 social-icon" href="//www.instagram.com/ecyclesolutionsyelahanka/" target="_blank" rel="noopener noreferrer">
// //                 <i className="fab fa-instagram text-white"></i>
// //               </a>
// //               <a className="btn btn-sm-square rounded-circle me-3 social-icon" href="//www.linkedin.com/in/e-cycle-solutions-665a1a246/" target="_blank" rel="noopener noreferrer">
// //                 <i className="fab fa-linkedin-in text-white"></i>
// //               </a>
// //               {/* <a className="btn btn-sm-square rounded-circle me-0 social-icon" href="//www.google.com/maps/dir//E-CYCLE+SOLUTIONS+Shed+No+B24,+KSSIDC+Industrial+Estate+opposite+GO+GO+international,+RWF+West+Colony,+Yelahanka+New+Town+Bengaluru,+Karnataka+560106/@13.1059952,77.5806917,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae195fd6562923:0x1697153ddbbe26f1!2m2!1d77.5806917!2d13.1059952?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
// //                 <i className="fas fa-map-marker-alt text-white"></i>
// //               </a> */}
// //             </div>
// //           </div>

// //           {/* Second div: Quick Links */}
// //           <div className="col-md-3 d-flex flex-column justify-content-between-0.5 footer-item">
// //             <h4 className="text-white mb-3">Quick Links</h4>
// //             <a href="/" className="text-white d-block mb-2 no-underline"><i className="fas fa-angle-right me-2" style={{ color: 'white', lineHeight: '1.6' }}></i> Home</a>
// //             <a href="#someId" className="text-white d-block mb-2 no-underline"><i className="fas fa-angle-right me-2" style={{ color: 'white', lineHeight: '1.6' }}></i> About Us</a>
// //             <a href="#serviceId" className="text-white d-block mb-2 no-underline"><i className="fas fa-angle-right me-2" style={{ color: 'white', lineHeight: '1.6' }}></i> Services</a>
// //             <a href="#ftId" className="text-white d-block no-underline"><i className="fas fa-angle-right me-2" style={{ color: 'white', lineHeight: '1.6' }}></i> Contact Us</a>
// //           </div>

// //           {/* Third div: Contact Info */}
// //           <div className="col-md-3 d-flex flex-column justify-content-between-0.2 footer-item line-spscing-0.5">
// //             <h4 className="text-white mb-3">Contact Info</h4>
// //             <div className="d-flex align-items-center mb-3">
// //               <i className="fas fa-map-marker-alt icon-primary me-3"></i>
// //               <p className="text-white mb-0" style={{ fontSize: '14px' }}>{commonData[0].primaryAddress}</p>
// //             </div>
// //             <div className="d-flex align-items-center mb-3">
// //               <i className="fas fa-envelope icon-secondary me-3"></i>
// //               <p className="text-white mb-0" style={{ fontSize: '14px' }}>{commonData[0].email}</p>
// //             </div>
// //             <div className="d-flex align-items-center mb-3">
// //               <i className="fa fa-phone-alt icon-tertiary me-3"></i>
// //               <p className="text-white mb-0" style={{ fontSize: '14px' }}>{commonData[0].primaryContact}</p>
// //             </div>
// //             <div className="d-flex align-items-center mb-4">
// //               <i className="fa fa-phone-alt icon-tertiary me-3"></i>
// //               <p className="text-white mb-0" style={{ fontSize: '14px' }}>{commonData[0].secondaryContact}</p>
// //             </div>
// //           </div>

// //           {/* Fourth div: Live Location */}
// //           <div className="col-md-3 d-flex flex-column justify-content-between footer-item">
// //             <h4 className="text-white mb-3">Our Location</h4>
// //             <div className="map-container">
// //               <iframe 
// //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.8682821684307!2d77.58052539846031!3d13.105995187168585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae195fd6562923%3A0x1697153ddbbe26f1!2sE-CYCLE%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1732688705032!5m2!1sen!2sin"
// //                 width="100%" 
// //                 height="250" 
// //                 style={{ border: 0 }} 
// //                 allowFullScreen="" 
// //                 loading="lazy" 
// //                 referrerPolicy="no-referrer-when-downgrade">
// //               </iframe>
// //             </div>
// //           </div>

// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// // export default Footer;


// import React from 'react';
// import commonData from '../../Data/CommonData.js';
// import MainLogo from '../../asset/img/MainLogoSymbolText-removebg-preview.png';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <div id="ftId" className="container-fluid footer py-4 wow fadeIn" data-wow-delay="0.2s">
//       <div className="container py-4 border-start-0 border-end-0" style={{ border: "1px solid", borderColor: 'rgb(255, 255, 255, 0.08)', lineHeight: '1.6' }}>
//         <div className="row d-flex align-items-stretch">
          
//           {/* Left side: Main Logo and Social Icons */}
//           <div className="col-md-3 d-flex flex-column justify-content-between-0.5 footer-item">
//             <a href="index.html" className="p-0">
//               <h4 className="text-white mb-3">
//                 <div style={{ backgroundColor: 'white', display: 'inline-block', padding: '5px 10px', lineHeight: '1.6' }}>
//                   <img src={MainLogo} alt="MainLogo" style={{ width: 200 }} />
//                 </div>
//               </h4>
//             </a>
//             <p className="mb-4" style={{ color: 'white', fontSize: '14px', lineHeight: '1.6' }}>{commonData[0].footerContent}</p>
//             <div className="d-flex justify-content-start">
//               <a className="btn btn-sm-square rounded-circle me-3 social-icon" href="//www.facebook.com/eycle.bangalore" target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-facebook-f text-white"></i>
//               </a>
//               <a className="btn btn-sm-square rounded-circle me-3 social-icon" href="//x.com/ecyclesolu50704" target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-twitter text-white"></i>
//               </a>
//               <a className="btn btn-sm-square rounded-circle me-3 social-icon" href="//www.instagram.com/ecyclesolutionsyelahanka/" target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-instagram text-white"></i>
//               </a>
//               <a className="btn btn-sm-square rounded-circle me-3 social-icon" href="//www.linkedin.com/in/e-cycle-solutions-665a1a246/" target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-linkedin-in text-white"></i>
//               </a>
//               <br></br>
//               {/* New WhatsApp and Telegram Icons */}
//               <a className="btn btn-sm-square rounded-circle me-3 social-icon" href="https://wa.me/your-phone-number" target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-whatsapp text-white"></i>
//               </a>
//               <a className="btn btn-sm-square rounded-circle me-3 social-icon" href="https://t.me/your-telegram-username" target="_blank" rel="noopener noreferrer">
//                 <i className="fab fa-telegram-plane text-white"></i>
//               </a>
//             </div>
//           </div>

//           {/* Center: Quick Links */}
//           <div className="col-md-3 d-flex flex-column justify-content-between-0.5 footer-item">
//             <h4 className="text-white mb-3">Quick Links</h4>
//             <a href="/" className="text-white d-block mb-2 no-underline"><i className="fas fa-angle-right me-2" style={{ color: 'white', lineHeight: '1.6' }}></i> Home</a>
//             <a href="#someId" className="text-white d-block mb-2 no-underline"><i className="fas fa-angle-right me-2" style={{ color: 'white', lineHeight: '1.6' }}></i> About Us</a>
//             <a href="#serviceId" className="text-white d-block mb-2 no-underline"><i className="fas fa-angle-right me-2" style={{ color: 'white', lineHeight: '1.6' }}></i> Services</a>
//             <a href="#ftId" className="text-white d-block no-underline"><i className="fas fa-angle-right me-2" style={{ color: 'white', lineHeight: '1.6' }}></i> Contact Us</a>
//           </div>

//           {/* Right side: Contact Info */}
//           <div className="col-md-3 d-flex flex-column justify-content-between-0.2 footer-item line-spscing-0.5">
//             <h4 className="text-white mb-3">Contact Info</h4>
//             <div className="d-flex align-items-center mb-3">
//               <i className="fas fa-map-marker-alt icon-primary me-3"></i>
//               <p className="text-white mb-0" style={{ fontSize: '14px' }}>{commonData[0].primaryAddress}</p>
//             </div>
//             <div className="d-flex align-items-center mb-3">
//               <i className="fas fa-envelope icon-secondary me-3"></i>
//               <p className="text-white mb-0" style={{ fontSize: '14px' }}>{commonData[0].email}</p>
//             </div>
//             <div className="d-flex align-items-center mb-3">
//               <i className="fa fa-phone-alt icon-tertiary me-3"></i>
//               <p className="text-white mb-0" style={{ fontSize: '14px' }}>{commonData[0].primaryContact}</p>
//             </div>
//             <div className="d-flex align-items-center mb-4">
//               <i className="fa fa-phone-alt icon-tertiary me-3"></i>
//               <p className="text-white mb-0" style={{ fontSize: '14px' }}>{commonData[0].secondaryContact}</p>
//             </div>
//           </div>

//           {/* Left side: Live Location (Map) */}
//           <div className="col-md-3 d-flex flex-column justify-content-between footer-item">
//             <h4 className="text-white mb-3">Our Location</h4>
//             <div className="map-container">
//               <iframe 
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.8682821684307!2d77.58052539846031!3d13.105995187168585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae195fd6562923%3A0x1697153ddbbe26f1!2sE-CYCLE%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1732688705032!5m2!1sen!2sin"
//                 width="100%" 
//                 height="250" 
//                 style={{ border: 0 }} 
//                 allowFullScreen="" 
//                 loading="lazy" 
//                 referrerPolicy="no-referrer-when-downgrade">
//               </iframe>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;



import React from 'react';
import commonData from '../../Data/CommonData.js';
import MainLogo from '../../asset/img/MainLogoSymbolText-removebg-preview.png';
import './Footer.css';

const Footer = () => {
  return (
    <div id="ftId" className="container-fluid footer py-4 wow fadeIn" data-wow-delay="0.2s">
      <div className="container py-4 border-start-0 border-end-0" style={{ border: "1px solid", borderColor: 'rgb(255, 255, 255, 0.08)', lineHeight: '1.6' }}>
        <div className="row d-flex align-items-stretch">
          
          {/* Left side: Main Logo and Social Icons */}
          <div className="col-md-3 d-flex flex-column justify-content-between-0.5 footer-item">
            <a href="index.html" className="p-0">
              <h4 className="text-white mb-3">
                <div style={{ backgroundColor: 'white', display: 'inline-block', padding: '5px 10px', lineHeight: '1.6' }}>
                  <img src={MainLogo} alt="MainLogo" style={{ width: 200 }} />
                </div>
              </h4>
            </a>
            <p className="mb-4" style={{ color: 'white', fontSize: '11px', lineHeight: '1.6' }}>{commonData[0].footerContent}</p>
            <div className="d-flex flex-wrap justify-content-start mb-3"> {/* Added flex-wrap */}
              <a className="btn btn-sm-square rounded-circle me-3 social-icon" href="//www.facebook.com/eycle.bangalore" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f text-white"></i>
              </a>
              <a className="btn btn-sm-square rounded-circle me-3 social-icon" href="//x.com/ecyclesolu50704" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-white"></i>
              </a>
              <a className="btn btn-sm-square rounded-circle me-3 social-icon" href="//www.instagram.com/ecyclesolutionsyelahanka/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram text-white"></i>
              </a>
              <a className="btn btn-sm-square rounded-circle me-3 social-icon" href="//www.linkedin.com/in/e-cycle-solutions-665a1a246/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in text-white"></i>
              </a>
              {/* These icons will now wrap to the second line */}
            </div>
            <div className="d-flex flex-wrap justify-content-start"> {/* Second line of icons */}
              <a className="btn btn-sm-square rounded-circle me-3 social-icon" href="https://wa.me/9448311540" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp text-white"></i>
              </a>
              <a className="btn btn-sm-square rounded-circle me-3 social-icon" href="https://t.me/your-telegram-username" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-telegram-plane text-white"></i>
              </a>
            </div>
          </div>

          {/* Center: Quick Links */}
          <div className="col-md-3 d-flex flex-column justify-content-between-0.5 footer-item">
            <h4 className="text-white mb-3">Quick Links</h4>
            <a href="/" className="text-white d-block mb-2 no-underline"><i className="fas fa-angle-right me-2" style={{ color: 'white', lineHeight: '1.6' }}></i> Home</a>
            <a href="#someId" className="text-white d-block mb-2 no-underline"><i className="fas fa-angle-right me-2" style={{ color: 'white', lineHeight: '1.6' }}></i> About Us</a>
            <a href="#serviceId" className="text-white d-block mb-2 no-underline"><i className="fas fa-angle-right me-2" style={{ color: 'white', lineHeight: '1.6' }}></i> Services</a>
            <a href="#ftId" className="text-white d-block no-underline"><i className="fas fa-angle-right me-2" style={{ color: 'white', lineHeight: '1.6' }}></i> Contact Us</a>
          </div>

          {/* Right side: Contact Info */}
          <div className="col-md-3 d-flex flex-column justify-content-between-0.2 footer-item line-spscing-0.5">
            <h4 className="text-white mb-3">Contact Info</h4>
            <div className="d-flex align-items-center mb-3">
              <i className="fas fa-map-marker-alt icon-primary me-3"></i>
              <p className="text-white mb-0" style={{ fontSize: '14px' }}>{commonData[0].primaryAddress}</p>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="fas fa-envelope icon-secondary me-3"></i>
              <p className="text-white mb-0" style={{ fontSize: '14px' }}>{commonData[0].email}</p>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="fa fa-phone-alt icon-tertiary me-3"></i>
              <p className="text-white mb-0" style={{ fontSize: '14px' }}>{commonData[0].primaryContact}</p>
            </div>
            <div className="d-flex align-items-center mb-4">
              <i className="fa fa-phone-alt icon-tertiary me-3"></i>
              <p className="text-white mb-0" style={{ fontSize: '14px' }}>{commonData[0].secondaryContact}</p>
            </div>
          </div>

          {/* Left side: Live Location (Map) */}
          <div className="col-md-3 d-flex flex-column justify-content-between footer-item">
            <h4 className="text-white mb-3">Our Location</h4>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.8682821684307!2d77.58052539846031!3d13.105995187168585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae195fd6562923%3A0x1697153ddbbe26f1!2sE-CYCLE%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1732688705032!5m2!1sen!2sin"
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
