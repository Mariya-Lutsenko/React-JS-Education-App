import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Title from "../../components/Title/Title";
import "./bells.css";
import { typesEducation } from "../../data/typesEducation";


const BellsCard = () => {
  const location = useLocation();
  const from = location.state?.from || 'calls';

  return (
    <div>
      <section className="bells">
        <div className="container flexSB">
          <div className="left row">
            <img src="/images/about.webp" alt="" />
          </div>
          <div className="right row">
            <Title title="Розклад початку та закінчення уроків" />
            <div className="items">
              {typesEducation.map(({id, cover, title}) => (
                <Link to={`tablebells/${id}`} state={{from}} className="item itemflex">
                  <div className="img">
                    <img src={cover} alt=""  />
                  </div>
                  <div className="text">
                    <h2>{title}</h2>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div> 
      </section>
    </div>
  );
};

export default BellsCard;
