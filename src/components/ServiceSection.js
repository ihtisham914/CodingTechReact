import React from "react";
import Card from "./Card";
import imgweb from "../images/webdev.jpg";
import imgdes from "../images/design.jpg";
import imgstack from "../images/web.jpg";

const ServiceSection = ({ onShow }) => {
  return (
    <section id="service" class="section-services">
      <div class="container">
        <h1 class="heading-primary">Our services</h1>
        <div className="cards">
          <Card
            image={imgweb}
            title="Front-End Development"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
          mollitia, eius dolorum magnam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit."
            type="service"
            onShow={onShow}
          />
          <Card
            image={imgdes}
            title="Web Design"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
          mollitia, eius dolorum magnam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit."
            type="service"
            onShow={onShow}
          />
          <Card
            image={imgstack}
            title="Full-Stack Development"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
          mollitia, eius dolorum magnam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit."
            type="service"
            onShow={onShow}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
