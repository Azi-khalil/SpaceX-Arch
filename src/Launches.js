import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./Launches.css"
import Launch from "./Launch"

function Launches() {

const [launches, setLaunches] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [launchYear, setLauchYear] = useState()

useEffect(() => {
    getLaunches()
}, [])
const getLaunches = async() => {
    setTimeout(() => {
     axios.get("https://api.spacexdata.com/v3/launches?limit=30")
        .then((res) => setLaunches(res.data) )
        setIsLoading(false)
    }, 2000)
}

const handleYear = (e) => {
    setLauchYear(e.target.value)
}

const filteredLaunches = launches.filter((launch) => {
    if(launchYear) {
        return launch.launch_year === launchYear
    }else return launch
})
  return (
  <div className='mainLaunch'>
      {isLoading ? <div className='loading'>Launching ...</div> : 
        <>
            <div className='filterLaunch'>
                <label>Launch Year:</label>
                <input type="number" placeholder='Year' onChange={handleYear}/>
            </div>
            <div className='launchContainer'>
            {filteredLaunches.map(launch => {
                return <Launch 
                        key={launch.flight_number}
                        links={launch.links}
                        status={launch.launch_success}
                        name={launch.mission_name}
                        date={launch.launch_date_utc}
                        details={launch.details}
                       />
            })}
            </div>
        </>
      }
  </div>
  )
}

export default Launches;
