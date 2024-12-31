import React from 'react';
import './episode11.css';
import Navbar from '../../components/navbar/Navbar';
import Person from '../../components/person/Person';

const Episode11 = () => {
    return (
        <div>
            <Navbar />
            <div className='container episode11'>
                <div>
                    <h1>Episode 11:</h1>
                    <h3>Type Safety</h3>
                </div>

                <div>
                    <Person
                        name="Test"
                        email="test@gmail.com"
                        age={37}
                        isMarried={true}
                        friends={["John", "Joy", "Jimmy", "Carl"]}
                    />
                </div>

                <div>
                    <Person
                        name="Mike"
                        email="Mike@gmail.com"
                        age={23}
                        isMarried={!true}
                        friends={["Jake", "Ben", "Carl", "Carmen"]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Episode11
