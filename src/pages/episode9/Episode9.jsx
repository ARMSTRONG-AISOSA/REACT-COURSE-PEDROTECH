import React from 'react';
import './episode9.css';
import Navbar from '../../components/navbar/Navbar';
import Form from '../../components/form/Form';

const Episode9 = () => {
  return (
    <div>
      <Navbar />
      <div className='container episode9'>

        <div>
          <h1>Episode 9: form</h1>
          <h3>Raect Hook form || Yup</h3>
        </div>

        <Form />
      </div>


    </div>
  )
}

export default Episode9
