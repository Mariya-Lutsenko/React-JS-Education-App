import React from "react"
import "./hero.css"

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
            <div className="shape"></div>
          </div>
        </section>
        <div className='margin'></div>
      </>
    )
  }
  
  export default Hero