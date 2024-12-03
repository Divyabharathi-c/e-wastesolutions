// import React from 'react';
// import './HeaderCarousel.css'; 
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import carousel1 from "../../asset/img/pexels-jplenio-1105379.jpg";

// const HeaderCarousel = () => {
//     const headerData = {
//         carouselHeaderSecond: "Welcome To\n E-Cycle Solutions\nE-Waste Management Company",
//         image: carousel1, 
//     };

//     return (
//         <div className="header-carousel" style={{ position: 'relative' }}>
//             <img 
//                 src={headerData.image}
//                 className="d-block w-100"
//                 alt="E-Cycle Solution"
//                 style={{ width: '100%', height: 'auto' }} 
//             />

//             <div 
//                 className="carousel-caption d-none d-md-block"
//                 style={{
//                     position: 'absolute',
//                     top: '50%',
//                     left: '50%', 
//                     transform: 'translate(-50%, -50%)', 
//                     textAlign: 'center',
//                     width: '100%',
//                 }}
//             >
//                 <div className="container d-flex align-items-center justify-content-center">
//                     <h1 
//                         className="carousel-heading text-white"
//                         style={{
//                             fontFamily: 'sans-serif',
//                             fontWeight: '600', 
//                             whiteSpace: 'pre-line', 
//                             textAlign: 'center',
//                             fontSize: '4rem', 
//                             letterSpacing: '1px', 
//                             lineHeight: '1.4', 
//                         }}
//                     >
//                         {headerData.carouselHeaderSecond}
//                     </h1>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default HeaderCarousel;


import React from 'react';
import './HeaderCarousel.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import carousel1 from "../../asset/img/pexels-jplenio-1105379.jpg";

const HeaderCarousel = () => {
    const headerData = {
        carouselHeaderSecond: "Welcome To\n E-Cycle Solutions\nE-Waste Management Company",
        image: carousel1, 
    };

    return (
        <div className="header-carousel" style={{ position: 'relative', paddingTop: '70px' }}>
            <img 
                src={headerData.image}
                className="d-block w-100"
                alt="E-Cycle Solution"
                style={{ width: '100%', height: 'auto' }} 
            />

            <div 
                className="carousel-caption d-none d-md-block"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    textAlign: 'center',
                    width: '100%',
                    zIndex: 1, // Ensure the text is on top of the image
                }}
            >
                <div className="container d-flex align-items-center justify-content-center">
                    <h1 
                        className="carousel-heading text-white"
                        style={{
                            fontFamily: 'sans-serif', // Default system font, or change to a font like 'Roboto' from Google Fonts
                            fontWeight: '600', 
                            whiteSpace: 'pre-line', 
                            textAlign: 'center',
                            fontSize: '4vw', // Makes font size responsive based on viewport width
                            letterSpacing: '1px', 
                            lineHeight: '1.4', 
                            marginTop: '0', // Prevents margin from pushing text too low
                            marginBottom: '0', // Prevents margin from pushing text too high
                        }}
                    >
                        {headerData.carouselHeaderSecond}
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default HeaderCarousel;
