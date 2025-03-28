import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footer-padding">
          <div className="legal">
            <p>
              &#169; 2024 | All Rights Reserved | Developed with
              <span className="footer__icon">
                <i className="fa fa-heart"></i>
              </span>
              by Mariia Lutsenko
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
