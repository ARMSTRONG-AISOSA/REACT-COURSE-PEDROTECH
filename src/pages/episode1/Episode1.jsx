import React from 'react';
import './episode1.css';
import Navbar from '../../components/navbar/Navbar';



const Episode1 = () => {
    const episodeNum = <h1>Episode 1</h1>;

    const nameData = <h3>Episode 1</h3>;
    const ageData = <h3>20</h3>;
    const emailData = <h3>email@gmail.com</h3>;
    const userData = (
        <div>
            {nameData}
            {ageData}
            {emailData}
        </div>
    );

    return (
        <div className=''>
            <Navbar />
            <div className='container episode1'>
                <div>
                    {episodeNum}
                </div>

                <div>
                    <h2>JSX Test</h2>
                    {userData}
                </div>

                <div>
                    <TestComponent />
                </div>

                <div>
                    <h2>Test Props Component</h2>

                    <br />
                    <h2>First Prop Component</h2>
                    <TestPropComponent name='Jake' age={25} email='jake@gmail.com' />

                    <br />
                    <h2>Second Prop Component</h2>
                    <TestPropComponent name='Ben' age={22} email='Ben@gmail.com' />
                </div>

                <div>
                    <JobData title='Assignment Prop 1' company='Amazon' salary='$120,000' position='Jr Developer' />

                    <JobData title='Assignment Prop 2' company='Netflix' salary='$117,000' position='Jr Developer' />
                </div>
            </div>
        </div>

    )
}

const TestComponent = () => {

    const nameData1 = 'Tony';
    const ageData2 = '23';
    const emailData3 = 'tony@gmail.com';

    return (
        <div>
            <h2>Test Component</h2>
            <h3>Name: {nameData1}</h3>
            <h3>age:  {ageData2}</h3>
            <h3>mail: {emailData3}</h3>
        </div>
    );
};

const TestPropComponent = (props) => {
    return (
        <div>
            <h3>name: {props.name}</h3>
            <h3>age: {props.age}</h3>
            <h3>email: {props.email}</h3>
        </div>
    )
}

const JobData = (props) => {
    return (
        <div className='jobData'>
            <h2>Title: {props.title}</h2>
            <h3>Company: {props.company}</h3>
            <h3>Salary: {props.salary}</h3>
            <h3>Position: {props.position}</h3>
        </div>
    )
}

export default Episode1
