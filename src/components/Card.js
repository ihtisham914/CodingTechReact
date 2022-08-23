import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const Card = ({ image, title, desc, type, onShow }) => {
  return (
    <div class="card">
      <div className="img_container">
        <img
          className={`card-img  ${type == "dev" ? "member-img marginTop" : ""}`}
          src={image}
          alt="Coding image"
        />
      </div>
      <div class="card-text">
        <h2 class="heading-secondary">{title}</h2>
        <p class="card-description">{desc}</p>
        <Button
          text={`${type == "dev" ? "View Profile" : "Get Services"}`}
          onShow={onShow}
        />
      </div>
    </div>
  );
};

Card.propType = {
  title: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
};

export default Card;
