import React from "react";
import "./OurServices.css";
import OurServicesCard from "./OurServicesCard";
import serviceImg1 from "../../asset/img/ewaste recycling.jpg";
import serviceImg2 from "../../asset/img/Hard disc.jpg";
import serviceImg3 from "../../asset/img/Environmental.webp";
import serviceImg4 from "../../asset/img/green.jpeg";
import serviceImg5 from "../../asset/img/ewaste collection.png";
import serviceImg6 from "../../asset/img/IT ASSET.jpg";

const OurServices = () => {
  const ourServicesData = [
    {
      img: serviceImg1,
      title: "E-Waste Recycling",
      description: "E-waste recycling enables businesses to manage electronic waste sustainably and recover valuable materials. It helps reduce environmental impact, prevents pollution, and supports regulatory compliance. Partnering with certified recyclers promotes resource conservation and a circular economy. This practice minimizes carbon footprints and creates long-term value for both the environment and the business.",
      delayTiming: "0.2s",
    },
    {
      img: serviceImg2,
      title: "Hard Disk Degaussing",
      description:
        "Hard disk degaussing uses magnetic fields toerase data, making unreadable and irrecoverable. process ensures complete destruction of sensitive information, preventing data breaches. It’s essential for businesses to comply with data security regulations when decommissioning old hardware. Degaussing protects data integrity without the need for physical destruction of the drive.",
      delayTiming: "0.2s",
    },
    {
      img: serviceImg3,
      title: "Environmental Impact",
      description:
        "The environmental impact refers to the effects of human activities on ecosystems, air, water, and climate. Industrial processes and waste disposal contribute to pollution and habitat destruction. Sustainable practices, such as recycling and energy conservation, help reduce pollution and protect biodiversity. Adopting eco-friendly technologies promotes a healthier planet for future generations.",
      delayTiming: "0.6s",
    },
    {
      img: serviceImg4,
      title: "E-Waste Solutions",
      description:
        "E-waste solutions help businesses manage obsolete electronics responsibly, ensuring secure disposal and resource recovery. Partnering with certified recyclers mitigates data security risks and ensures regulatory compliance. These solutions recover valuable materials, contributing to a circular economy. By adopting sustainable practices, businesses reduce environmental impact and enhance their corporate reputation.",
      delayTiming: "0.8s",
    },
    {
      img: serviceImg5,
      title: "E-Waste Collection",
      description:
        "E-waste collection is the process of safely gathering outdated or unwanted electronic devices for responsible disposal and recycling. This ensures proper data destruction and prevents hazardous materials from harming the environment. Through effective collection, businesses can recover valuable resources while reducing waste. It also helps organizations comply with environmental regulations and support sustainability initiatives.",
      delayTiming: "0.10s",
    },
    {
      img: serviceImg6,
      title: "IT Assests",
      description:
        "IT asset collection in e-waste management involves this responsible gathering of obsolete or unwanted electronic devices, and such as computers, servers, and networking equipment. This process ensures secure disposal and data destruction, while maximizing the recovery of valuable materials. It also supports sustainability goals by facilitating the recycling and reuse of electronic components.",
      delayTiming: "0.12s",
    },
  ];
  return (
    // Services Start
    <div id="serviceId" className="container-fluid service pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h1 style={{ color: '#44993F', fontWeight: 'bold', fontSize: '24px' }}>OurServices</h1>

          <p className="display-5 mb-4">We Provide Exceptional Services</p>
          <p className="mb-0">
          We offer secure data destruction and electronic recycling services for individuals and businesses. Our direct pickup service ensures convenience, while our competitive pricing guarantees value. We prioritize data security and provide eco-friendly recycling solutions to protect both the environment and your sensitive information.
          </p>
        </div>

        {/* Cards Below */}

        <div className="row g-4">
          {ourServicesData.map((services, index) => (
            <OurServicesCard
              key={index}
              img={services.img}

              title={services.title}
              description={services.description}
            />
          ))}
        </div>
      </div>
    </div>
    //  Services End
  );
};

export default OurServices;
