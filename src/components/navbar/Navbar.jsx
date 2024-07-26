import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../App';

const Navbar = () => {

  const { profileData } = useContext(AppContext)

  return (
    <div className='navbar'>

      {/* Display if profileData.userName is truthy (i.e., not null, undefined, false, 0, NaN, or an empty string.) */}
      {profileData.userName && (
        <div className='profile-display'>
          <h3>User Profile</h3>
          <div>
            <p><strong>Username:</strong> {profileData.userName}</p>
            <p><strong>Gender:</strong> {profileData.gender}</p>
            <p><strong>Email:</strong> {profileData.email}</p>
          </div>
        </div>
      )}

      <div className='navlinks'>
      <Link to="/" >Episode1</Link>
      <Link to="/episode2" >Episode2</Link>
      <Link to="/episode3" >Episode3</Link>
      <Link to="/episode4" >Episode4</Link>
      <Link to="/episode5" >Episode5</Link>
      <Link to="/episode6" >Episode6</Link>
      <Link to="/episode7" >Episode7</Link>
      <Link to="/episode8" >Episode8</Link>
      <Link to="/episode9" >Episode9</Link>
      <Link to="/episode10" >Episode10</Link>
      <Link to="/episode11" >Episode11</Link>
      <Link to="/episode12" >Episode12</Link>
      </div>

    </div>
  )
}

export default Navbar
