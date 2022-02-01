import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Rocket from './Rocket'
import './Rockets.css'

function Rockets() {

const [rockets, setRockets] = useState([])
const [name, setName] = useState("")
const [height, setHeight] = useState(0)

useEffect(() => {
   getData()
}, [])


const getData = async () => {
    await axios.get('https://api.spacexdata.com/v3/rockets')
    .then(response => {
        setRockets(response.data)
    })
    .catch(error => console.log(error))
}

const handleName = (e) => {
    setName(e.target.value)
}

const handleHeight = (e) => {
    setHeight(e.target.value)
}


const filteredRockets = rockets.filter((rocket) => 
    rocket.rocket_name.toLowerCase().includes(name.toLowerCase()) &&
    rocket.height["meters"] >= height
)


  return (
      <div className='main'>
          <div className='searchConainer'>
            <div className='search'>
                <label>Search by Name:</label>
                <input type="text" placeholder='Name' onChange={handleName}/>
            </div>
            <div className='search'>
                <label>Search by Height:</label>
                <input type="number" placeholder='Height' onChange={handleHeight}/>
            </div>
          </div>
          <div className='itemContainer'>
          {filteredRockets.map(rocket => {
              return (
                  <Rocket 
                    key = {rocket.rocket_id}
                    name = {rocket.rocket_name}
                    height = {rocket.height}
                    image = {rocket.flickr_images}
                    page= {rocket.wikipedia}
                    desc = {rocket.description}
                  />
              )
          })}
          </div>
      </div>
  )
}

export default Rockets;
