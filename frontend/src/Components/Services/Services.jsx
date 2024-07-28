import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import { useState, useEffect } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/services/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <div id="services" className="services">
      <div className="title-box">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {services.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.id}</h3>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
