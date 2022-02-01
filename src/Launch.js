import React from 'react';
import "./Launch.css"

function Launch({ year, status, name, date, details, links}) {

  const dt = new Date(date).toLocaleDateString();

  return (
    <div className='launchContent'>
        <div className='header'>
            <div className='missionName'>{name}</div>
            <div className={status ? "success" : "fail"}></div>
        </div>
        <div className='video'>
             <a href={links.video_link} alt="launchVideo">Watch Launch Video</a>
        </div>
        <div className='content'>
            <div>{details}</div>
        </div>
        <div className='bottom'>
          <div className='date'>{dt}</div>
        </div>
    </div>
  )
}

export default Launch;
