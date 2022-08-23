import React from "react";
import Card from "./Card";
import frontdev from "../images/dev_one.jpg";
import designdev from "../images/dev_two.jpg";
import fulldev from "../images/dev_three.jpg";

const TeamSection = () => {
  return (
    <section id="members" class="section-members">
      <div class="container">
        <h1 class="heading-primary">Team</h1>
        <div class="cards">
          <Card
            title="Front-End Developer"
            desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
            mollitia, eius dolorum magnam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit."
            image={frontdev}
            type="dev"
          />
          <Card
            title="UI & UX Designer"
            desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
            mollitia, eius dolorum magnam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit."
            image={designdev}
            type="dev"
          />
          <Card
            title="Full-Stack Developer"
            desc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
            mollitia, eius dolorum magnam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit."
            image={fulldev}
            type="dev"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
