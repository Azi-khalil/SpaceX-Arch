import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import './NavBar.css'
function NavBar() {
  const navigate = useNavigate();

  return (  
    <div className='navCon'>
        <div className='icon' onClick={(e) => {navigate('/')}}>
            <h1>Space X </h1>
        </div>

        <div className='links'>
            <div>
               <Link to='/'>Rockets</Link>
            </div>
           <div>
               <Link to='/launches'>Launches</Link>
           </div>
        </div>
    </div>
  )
}

export default NavBar;
