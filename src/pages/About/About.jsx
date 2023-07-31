import React, {  useState, useEffect } from 'react'
import "./about.css"
import Back from '../../components/Back/Back'

const About = () => {
    const [click, setClick] = useState(false);
    const [aboutData, setAboutData] = useState(null);

    const toggle = (index) => {
        if (click === index) {
          return setClick(null)
        }
        setClick(index)
      }

      useEffect(() => {
        const fetchAboutData = async () => {
          try {
            const response = await fetch("/data/aboutData.json");
            const data = await response.json();
            console.log(data)
            setAboutData(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchAboutData();
      }, []);

  return (
    <>
    <Back title="Як організувати онлайн-навчання" />
    <section className="about">
      <div className="container">
      {aboutData?.map((item, index) => (
            <div className='box' key={index}>
              <button className='accordion' onClick={() => toggle(index)} key={index}>
                <h2>{item.title}</h2>
                <span>{click === index ? <i className='fa fa-chevron-down'></i> : <i className='fa fa-chevron-right'></i>}</span>
              </button>
              {click === index ? (
                <div className='text'>
                  <p>{item.desc}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
    </section>
  </>
  )
}

export default About
