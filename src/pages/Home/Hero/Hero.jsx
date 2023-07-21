import React from "react"
import "./hero.css";

const Hero = () => {
    return (
      <>
        <section className='hero'>
          <div className='container'>
            <div className='row'>

   
              <div className='button'>
                <button className='primary-btn'>
                  Розклад уроків <i className='fa fa-long-arrow-alt-right'></i>
                </button>
                <button>
                  Коди курсів Google Classroom <i className='fa fa-long-arrow-alt-right'></i>
                </button>
              </div>
            </div>
            <div className="clouds">
              <img src="/images/clouds_animate/cloud1.png" alt="" style={{"--i":1}}/>
              <img src="/images/clouds_animate/cloud2.png" alt="" style={{"--i":2}} />
              <img src="/images/clouds_animate/cloud3.png"alt="" style={{"--i":3}} />
              <img src="/images/clouds_animate/cloud4.png" alt="" style={{"--i":4}}/>
              <img src="/images/clouds_animate/cloud5.png" alt="" style={{"--i":5}}/>

            </div>
          </div>
        </section>
        <div className='margin'></div>
      </>
    )
  }
  
  export default Hero;