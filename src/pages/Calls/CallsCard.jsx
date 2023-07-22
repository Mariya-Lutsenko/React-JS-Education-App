import React from "react";
import Title from "../../components/common/Title/Title";
import "./calls.css";
import { typesEducation } from "../../data/typesEducation";

const CallsCard = () => {
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
              {typesEducation.map((typeEd) => (
                <div className="item itemflex">
                  <div className="img">
                    <img src={typeEd.cover} alt=""  />
                  </div>
                  <div className="text">
                    <h2>{typeEd.title}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallsCard;
