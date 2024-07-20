import React, { useEffect } from 'react';
import styles from './episode2.module.css';
import { useState } from 'react';
import PlayerList from '../../components/playerList/PlayerList';


const Episode2 = () => {

    // useState hook can only be called at the top level of a functional component, not inside a callback.
    const [writeOut1, setWriteOut1] = useState('');
    const [writeOut2, setWriteOut2] = useState('');

    const [displayUi, setDisplayUi] = useState(1);

    const [textColor, setTextColor] = useState('red');

    const [aValue, setAValue] = useState(false);

    const ageData1 = 18;
    const ageData2 = 9;

    // Array: stores multiple values in a single variable and access them using an index.
    // index => [0]
    // value => 'Tony'
    const nameArray = ['Tony', 'Jame', 'Dustin', 'Matt', 'Jacob'];

    // Arrays can store objects
    // Objects: objects are collections of key-value pairs
    // Objects are data structures

    const userArray = [
        { name: "Benjamin", age: 17, gender: "Male", job: "Developer" },
        { name: "Jessica", age: 19, gender: "Female", job: "Social Media Manager" },
        { name: "Chris", age: 22, gender: "Male", job: "Videographer" },
        { name: "Anita", age: 21, gender: "Female", job: "Content Creator" },
    ];

    // Planet Array
    const planetArray = [
        { name: "Mercury", isGasPlanet: false },
        { name: "Venus", isGasPlanet: false },
        { name: "Earth", isGasPlanet: false },
        { name: "Mars", isGasPlanet: false },
        { name: "Jupiter", isGasPlanet: true },
        { name: "Saturn", isGasPlanet: true },
        { name: "Uranus", isGasPlanet: true },
        { name: "Neptune", isGasPlanet: true },
        { name: "Pluto", isGasPlanet: false }
    ]

    // Non Gaseous Planets
    const nonGaseousPlanets = planetArray.filter(planet => planet.isGasPlanet === false);


    // Gaseous Planets
    const gaseousPlanets = planetArray.filter(planet => planet.isGasPlanet === true)

    function handleSwitchUi() {
        if (displayUi === 1) {
            setDisplayUi(2)
        } else {
            setDisplayUi(1)
        }
    }

    function handleSwitchColor() {
        if (textColor == 'red') {
            setTextColor('green')
        } else {
            setTextColor('red')
        }
    }

    function handleSwitchValue() {
        if (aValue == false) {
            setAValue(!false)
        } else {
            setAValue(false)
        }
    }

    useEffect(() => {

        if (ageData1 < 18) {
            setWriteOut1('Under Age')
            console.log(writeOut1);
        } else {
            setWriteOut1('Over Age')
            console.log(writeOut1);
        }

        // OR
        // Ternary Operator: shorthand if statements
        ageData2 < 18 ? setWriteOut2('Under Age') : setWriteOut2('Over Age')

    }, []);

    {/* User Componet */ }
    const User = (props) => {
        return (
            <div className={styles.userComponent}>
                <h4>{props.name}</h4>
                <h4>{props.age}</h4>
                <h4>{props.job}</h4>
                <h4>{props.gender}</h4>
            </div>
        );
    };

    return (
        // <div className={styles.episode2}>
        <div className={`${styles.episode2} container`}>
            <h1>Css Module</h1>
            <div>
                <h2>Ternary Operator</h2>
                <h3>If Statement: {writeOut1}</h3>
                <h3>Ternary Operator: {writeOut2}</h3>
            </div>

            <div>
                <h2>Ternary for displaying Ui conditionally</h2>
                {displayUi === 1 ?
                    <div className={styles.displayUi}>
                        <h2>First Ui</h2>
                        <p>This this the first Ui Being displayed.</p>
                    </div>
                    :
                    <div className={styles.displayUi}>
                        <h2>Second Ui</h2>
                        <p>This is the Second Ui Being displayed.</p>
                    </div>
                }

                <button onClick={handleSwitchUi} className={styles.epi2Btn}>Switch Ui</button>
            </div>

            <div>
                <h2
                    style={{ color: textColor }}
                >
                    Text Color
                </h2>
                <p>the above text color is {textColor}.</p>

                <button
                    style={{ backgroundColor: textColor, color: 'white' }}
                    onClick={handleSwitchColor}
                    className={styles.epi2Btn}
                >Switch Color</button>
            </div>

            <div>
                <h3>Switch Value (&&).</h3>
                <p>The box is displayed when the value is true.</p>

                {aValue &&
                    <div className={styles.epi2Box}
                        style={{}}
                    >
                    </div>
                }

                <button
                    style={{ backgroundColor: 'orange' }}
                    onClick={handleSwitchValue}
                    className={styles.epi2Btn}
                >Switch Value</button>
            </div>

            <div className={styles.epi2Array}>
                <div>
                    <h2>Arrays</h2>

                    <p>{nameArray[0]}</p>
                    <p>{nameArray[1]}</p>
                    <p>{nameArray[2]}</p>
                    <p>{nameArray[3]}</p>
                    <p>{nameArray[4]}</p>
                </div>

                <div>
                    <h2>Mapped Array</h2>
                    {/* You are passing in an anonymous callback function in map. */}
                    {nameArray.map((value, index) => {
                        return <p key={index}>{value}</p>;
                    })}
                </div>
            </div>

            <div>
                <h2>Mapped Array Objects</h2>
                {userArray.map((user, index) => {
                    return <div key={index}>
                        <p>My name is <b>{user.name}</b>, i work as a <b>{user.job}.</b> <br />I am also <b>{user.gender}</b> aged <b>{user.age}.</b></p> <br />
                    </div>;
                })}
            </div>

            <div>
                <h2>Mapped Array Objects Component</h2>
                <div>
                    {userArray.map((user, index) => {
                        return <User key={index} name={user.name} age={user.age} job={user.job} gender={user.gender} />;
                    })}
                </div>
            </div>

            <div>
                <h2>Planet Array (Ternary)</h2>
                <br />
                <h3>Non Gaseous Planet</h3>
                {planetArray.map((planet, index) => {
                    return !planet.isGasPlanet && <p key={index}>{planet.name}</p>;
                })}
                <br />

                <h3> Gaseous Planet</h3>
                <p>It shows on if its true.</p>
                {planetArray.map((planet, index) => {
                    return planet.isGasPlanet && <p key={index}>{planet.name}</p>;
                })}
            </div>

            <div>
                <h2>Planet Array (Filter)</h2>
                <div>
                    <h3>Non Gaseous Planet (Filter)</h3>
                    <p>we filter the planetArray to create a new array called nonGaseousPlanets. Then we map over it to display only the names of the non-gaseous planets.</p> <br />

                    {nonGaseousPlanets.map((planet, index) => {
                        return <div key={index}>{planet.name}</div>
                    })}

                    <br />
                    <h3>Gaseous Planet (Filter)</h3>
                    {gaseousPlanets.map((planet, index) => {
                        return <div key={index}>{planet.name}</div>
                    })}
                </div>
            </div>

            <div>
                <h2>ManUnited Player Data</h2>
                <PlayerList />
            </div>

        </div>
    )
}

export default Episode2
