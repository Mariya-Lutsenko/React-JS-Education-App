import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Navigation = () => {
  const [click, setClick] = useState(false);
  return (
    <header>
      <nav className="header_nav">
        <div className={click? "mobile-nav" : "wrapper_link"} onClick={()=>setClick(false)}>
        {/* <div className="wrapper_link"> */}
          <Link className="navigation_link" to="/">
            Домашня сторінка
          </Link>
          <Link className="navigation_link" to="/contacts">
            Контакти
          </Link>
          <Link className="navigation_link" to="/calls">
            Розклад дзвоників
          </Link>
          <Link className="navigation_link" to="/lessons">
            Розклад уроків
          </Link>
          <Link className="navigation_link" to="/courses">
            Посилання на курси
          </Link>
          <Link className="navigation_link" to="/books">
            Підручники
          </Link>
        </div>
        <div className="start">
          <div className="button">ГОТУЄМОСЬ ДО ЗНО</div>
        </div>
        <button className="toggle" onClick={()=>setClick(!click)}>
        {click ? 
          <i className="fa fa-times"> </i>
         : 
          <i className="fa fa-bars"></i>
        }
      </button>
      </nav>
    </header>
  );
};

export default Navigation;
