import React from 'react';
import './person.css';
import PropTypes from "prop-types";

const Person = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Age: {props.age}</p>
            <p>This person {props.isMarried ? "is" : "is not"} Married</p>
            <>
                {props.friends.map((friend) => (
                    <li>{friend}</li>
                ))}
            </>
        </div>
    )

}

Person.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    isMarried: PropTypes.bool,
    friends: PropTypes.arrayOf(PropTypes.string),
}

export default Person
