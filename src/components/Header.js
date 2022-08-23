import { useState } from "react";
import Button from "./Button";
const Header = ({ onShow }) => {
  const nav = document.querySelector(".tablet-navigation");
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="header">
      <a className="logo" href="#">
        CodingTech
      </a>
      <nav className="main-navigation">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#service">
              Services
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#members">
              Team
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Contact Us
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#footer">
              About
            </a>
          </li>
          <li>
            <Button text="Get Services" onShow={onShow} />
          </li>
        </ul>
      </nav>
      {!showMenu && (
        <ion-icon
          name="menu"
          size="large"
          onClick={() => setShowMenu(!showMenu)}
        ></ion-icon>
      )}
      {showMenu && (
        <ion-icon
          name="close"
          size="large"
          onClick={() => setShowMenu(!showMenu)}
        ></ion-icon>
      )}

      {/* tablet and mobile navigation */}
      {showMenu && (
        <nav className="tablet-navigation translate">
          <ul className="tablet-nav-list">
            <li>
              <a className="main-nav-link" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#service">
                Services
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#members">
                Team
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#">
                Contact Us
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#footer">
                About
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
