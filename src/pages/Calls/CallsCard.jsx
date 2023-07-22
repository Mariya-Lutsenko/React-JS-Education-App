import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Title from "../../components/common/Title/Title";
import "./calls.css";
import { typesEducation } from "../../data/typesEducation";


const CallsCard = () => {
  const location = useLocation();
  const from = location.state?.from || 'calls';

  return (
    <div>
      <section className="callsHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="/images/about.webp" alt="" />
          </div>
          <div className="right row">
            <Title title="Розклад початку та закінчення уроків" />
            <div className="items">
              {typesEducation.map(({id, cover, title}) => (
                <Link to={`tablecalls/${id}`} state={{from}} className="item itemflex">
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

export default CallsCard;
