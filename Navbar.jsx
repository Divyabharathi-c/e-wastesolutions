// import React from 'react'
// import './Navbar.css'
// import MainLogo from '../../asset/img/MainLogoSymbolText-removebg-preview.png'


// const Navbar = () => {
//     return (
//       <>
        
//           <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 z-3">
//             <a href="/" className="navbar-brand p-0 mt-2">
//               <h1 className="text-primary">
                
//                 <img src={MainLogo} alt="" className='mail-logo'/>
//               </h1>
//             </a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarCollapse">
//               <span className="fa fa-bars"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarCollapse">
//               <div className="navbar-nav ms-auto py-0">
//                 <a href="index.html" className="nav-item nav-link">
//                   Home
//                 </a>
//                 <a href="#someId" className="nav-item nav-link ">
//                   About
//                 </a>
//                 <a href="#serviceId" className="nav-item nav-link">
//                   Services
//                 </a>
              
//                 <a href="#ftId" className="nav-item nav-link">
//                   Contact Us
//                 </a>
//               </div>
//             </div>
//           </nav>
//       </>
//     );
// }

// export default Navbar




import React from 'react';
import './Navbar.css';
import MainLogo from '../../asset/img/MainLogoSymbolText-removebg-preview.png';

const Navbar = () => {
  return (
    <div className="background">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 fixed-top z-3" style={{backgroundColor:'white'}}>
        <a href="/" className="navbar-brand p-0 mt-2">
          <h1 className="text-primary">
            <img src={MainLogo} alt="Company Logo" className="mail-logo" />
          </h1>
        </a>
        {/* Remove the toggler button to prevent collapse */}
        <div className="navbar-nav ms-auto py-0">
          <a href="/" className="nav-item nav-link">
            Home
          </a>
          <a href="#someId" className="nav-item nav-link">
            About Us
          </a>
          <a href="#serviceId" className="nav-item nav-link">
            Services
          </a>
          <a href="#ftId" className="nav-item nav-link">
            Contact Us
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
