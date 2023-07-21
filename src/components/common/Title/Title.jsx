import React from 'react'
import "./title.css"

const Title = ({title }) => {
  return (
    <div>
      <div id="heading">
       
        <h1 className='hero_title'>{title}</h1>
      </div>
    </div>
  )
}

export default Title
