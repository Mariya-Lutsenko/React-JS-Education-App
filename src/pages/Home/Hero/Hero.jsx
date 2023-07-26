import React from "react"
import "./hero.css";
import Title from "../../../components/common/Title/Title";
import Clouds from "../../../components/common/Clouds/Clouds";
import Loader from "../../../components/Loader/Loader";

const Hero = () => {
  const [loading, setLoading] = React.useState(true);
  const handleImageLoad = () => {
    setLoading(false);
  };
    return (
      <>
      {loading && <Loader />}
        <section className='hero' style={{
          backgroundColor: "#f0f0f0",
          backgroundImage: 'url("/images/bg-home-4.jpg")',
        }}>
            <img
          src="/images/bg-home-4.jpg"
          alt="background"
          onLoad={handleImageLoad}
          style={{ display: "none" }}
        />
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