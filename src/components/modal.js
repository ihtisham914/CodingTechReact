import React, { useState } from "react";

const Modal = ({ onShow }) => {
  return (
    <>
      <div className="modal">
        <div className="get-service container ">
          {/* <Button text=" &times;" onShow={onShow} /> */}
          <button className="btn--close-form" onClick={onShow}>
            &times;
          </button>
          <h3 className="heading-secondary">
            Let's build something amazing for you
          </h3>
          <form className="get-service-form">
            <label for="name">Your Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Ihtisham Ul Haq"
              required
            />
            <label for="email">Your Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="me@example.com"
              required
            />
            <label for="description">Share Your Problem with us</label>
            <textarea
              name="description"
              id="description"
              cols="20"
              rows="5"
              placeholder="Share your problem with us"
              required
            ></textarea>
            <button className="form-submit">let's do it</button>
          </form>
        </div>
        <div class="overlay "></div>
      </div>
    </>
  );
};

export default Modal;
