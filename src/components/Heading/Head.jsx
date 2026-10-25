
import React from "react";

const Head = () => {
  return (
    <section className="head">
      <div className="container flexSB">
        <div className="logo">
          <h1 className="logo-title">
            <span className="logo-title__prefix">КЗ</span>{" "}
            <span className="logo-title__name">
              «ХАРКІВСЬКИЙ ЛІЦЕЙ{" "}
              <span className="logo-title__number">№ 140</span>»
            </span>
          </h1>

          <p className="logo-subtitle">
            ХАРКІВСЬКОЇ МІСЬКОЇ РАДИ
          </p>
        </div>

        <div className="social">
          <a
            href="https://www.facebook.com/groups/2421366434855904/"
            target="_blank"
            rel="noopener noreferrer"
            className="head_icon_link"
            aria-label="Facebook ліцею"
          >
            <i className="fab fa-facebook-f icon" aria-hidden="true"></i>
          </a>

          <a
            href="http://school140.edu.kh.ua/"
            target="_blank"
            rel="noopener noreferrer"
            className="head_icon_link"
            aria-label="Офіційний сайт ліцею"
          >
            <i className="fa fa-university icon" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Head;
