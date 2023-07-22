import React from "react"
import "./hero.css";
import Title from "../../../components/common/Title/Title";
import Clouds from "../../../components/common/Clouds/Clouds";

const Hero = () => {
    return (
      <>
        <section className='hero'>
          <div className='container'>
            <div className='row'>
              <Title title='Платформа для організації навчання'/>
              <div className='button'>
                <button className='primary-btn'>
                  Розклад уроків <i className='fa fa-long-arrow-alt-right'></i>
                </button>
                <button>
                  Коди курсів Google Classroom <i className='fa fa-long-arrow-alt-right'></i>
                </button>
              </div>
            </div>
        <Clouds/>
          </div>
        </section>
        <div className='margin'></div>
      </>
    )
  }
  
  export default Hero;