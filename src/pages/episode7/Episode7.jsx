import React, { useState } from 'react';
import './episode7.css';
import { useContext } from 'react';
import { AppContext } from '../../App';

const Episode7 = () => {

  const { setProfileData } = useContext(AppContext)

  const [userName, setUserName] = useState("demo");
  const [age, setAge] = useState("demo");
  const [gender, setGender] = useState("demo");
  const [email, setEmail] = useState("demo@gmail.com");
  const [password, setPassword] = useState("demo");

  const handleSend = () => {
    const profile = { userName, age, gender, email, password };
    setProfileData(profile);

    // Reset InputField
    setUserName("");
    setAge("");
    setGender("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className='container episode7'>
      <h1>Episode 7: State Management</h1>
      {/* Done with the context api to avoid prop drilling. */}

      <div className='container episode7'>
        <h3>Profile Settings</h3>

        <div>
          <p>UserName</p>
          <input
            type="text"
            className='inputProfile'
            placeholder='Enter Username'
            onChange={(event) => setUserName(event.target.value)}
            value={userName}
          />
        </div>

        <div>
          <p>Age</p>
          <input
            type="text"
            className='inputProfile'
            placeholder='Enter Age'
            onChange={(event) => setAge(event.target.value)}
            value={age}
          />
        </div>

        <div>
          <p>Gender</p>
          <input
            type="text"
            className='inputProfile'
            placeholder='Enter Gender'
            onChange={(event) => setGender(event.target.value)}
            value={gender}
          />
        </div>

        <div>
          <p>Email</p>
          <input
            type="text"
            className='inputProfile'
            placeholder='Enter Email'
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </div>

        <div>
          <p>Password</p>
          <input
            type="text"
            className='inputProfile'
            placeholder='Enter Password'
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </div>

        <div>
          <button
            className='sendBtn'
            onClick={handleSend}
          >Send</button>
        </div>

      </div>

      <div>
        <h3>Variable Output</h3>
        <p>Username: {userName}</p>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </div>
    </div>
  )
}

export default Episode7
