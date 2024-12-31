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
      <Link to="/" >Epi1</Link>
      <Link to="/episode2" >Epi2</Link>
      <Link to="/episode3" >Epi3</Link>
      <Link to="/episode4" >Epi4</Link>
      <Link to="/episode5" >Epi5</Link>
      <Link to="/episode6" >Epi6</Link>
      <Link to="/episode7" >Epi7</Link>
      <Link to="/episode8" >Epi8</Link>
      <Link to="/episode9" >Epi9</Link>
      <Link to="/episode10" >Epi10</Link>
      <Link to="/episode11" >Epi11</Link>
      <Link to="/episode12" >Epi12</Link>
      <Link to="/episode12" >Epi13</Link>
      </div>

    </div>
  )
}

export default Navbar
