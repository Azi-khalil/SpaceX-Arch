import React from 'react';
import './Rocket.css'
function Rocket({name, height, image, page, desc }) {

    // https://api.spacexdata.com/v3/history/{{id}}


  return (
    <div className='rocketCont'>
        <div className='title'>
            <h3>Rocket Name: {name}</h3>
            <h5>Rocket Height: {height.meters}M</h5>
            <p>{desc}</p>
        </div>
        <div className='body'>
            <img src={image[0]} alt="Rocket" />
        </div>
        <div className='footer'>
            <a href={page}>Read more about this rocket</a>
        </div>
    </div>
  )
}

export default Rocket;
