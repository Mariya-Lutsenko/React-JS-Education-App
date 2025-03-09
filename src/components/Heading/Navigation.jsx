import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Navigation = () => {
  const [click, setClick] = useState(false);
  return (
    <header>
      <nav className="header_nav">
        <div
          className={click ? "mobile-nav" : "wrapper_link"}
          onClick={() => setClick(false)}
        >
          <Link className="navigation_link" to="/">
            Головна
          </Link>
          <Link className="navigation_link" to="/schedule">
            Розклад уроків
          </Link>
          <Link className="navigation_link" to="/bells">
            Розклад дзвоників
          </Link>
          <Link className="navigation_link" to="/courses">
            Посилання на онлайн-уроки
          </Link>
          <Link className="navigation_link" to="/books">
            Електронні підручники
          </Link>
          <Link className="navigation_link" to="/about">
            Як організувати онлайн-навчання
          </Link>
          <Link className="navigation_link" to="/contacts">
            Контакти
          </Link>
        </div>
        <div className="start">
          <a
            href="https://testportal.gov.ua/tag/nmt-2025/"
            className="button_zno"
          >
            ГОТУЄМОСЬ ДО НМТ-2025
          </a>
        </div>
        <button className="toggle" onClick={() => setClick(!click)}>
          {click ? (
            <i className="fa fa-times"> </i>
          ) : (
            <i className="fa fa-bars"></i>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navigation;
