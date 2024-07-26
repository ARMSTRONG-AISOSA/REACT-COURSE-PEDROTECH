import React, { useEffect, useState } from 'react'
import './episode6.css';
import Navbar from '../../components/navbar/Navbar';
import axios from 'axios';

const Episode6 = () => {

    const [dataFact, setDataFact] = useState("");

    const [dogImg, setDogImg] = useState("https://images.dog.ceo/breeds/pariah-indian/The_Indian_Pariah_Dog.jpg");

    const [submitName, setSubmitedName] = useState("");
    const [submitName2, setSubmitedName2] = useState("");

    // Holding Object Data
    const [avgObj, setAvgObj] = useState(null);

    const [avgName, setAvgName] = useState("");
    const [avgCount, setAvgCount] = useState("");
    const [avgAge, setAvgAge] = useState();

    // Excuse Generator
    const [genExcuse, setGenExcuse] = useState("");

    const handleRefresh = () => {
        fetch("https://catfact.ninja/fact").then((response) => response.json()).then((data) => {
            // console.log(data);
            console.log(data.fact);
            setDataFact(data.fact);
        }).catch((error) => console.error('Error Fetching:', error))
    }

    const handleRefreshImg = () => {
        axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
            console.log(response.data.message)
            setDogImg(response.data.message)
        }).catch((error) => console.error('Error Fetching:', error));
    }

    const handleNameSubmit = (name) => {
        axios.get(`https://api.agify.io/?name=${submitName}`).then((response) => {
            setAvgName(response.data.name);
            console.log(response.data.name);

            setAvgAge(response.data.age);
            console.log(response.data.age);

            setAvgCount(response.data.count);
            console.log(response.data.count);

            setSubmitedName("");
        }).catch((error) => console.error('Error Fetching:', error))
    }

    const handleNameSubmit2 = (name2) => {
        axios.get(`https://api.agify.io/?name=${submitName2}`).then((response) => {

            setAvgObj(response.data);
            console.log(response.data);

            setSubmitedName2("");
        }).catch((error) => console.error('Error Fetching:', error))
    }

    const handleEscGen = (excuse) => {
        axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((response) => {

            setGenExcuse(response.data[0].excuse);
            console.log(response.data[0].excuse);

        }).catch((error) => console.error('Error Fetching:', error))
    }




    useEffect(() => {
        handleRefresh(); // Fetch data when the component mounts
    }, []);

    useEffect(() => {
        handleRefreshImg();
    }, []);

    useEffect(() => {
        handleNameSubmit();
    }, []);

    // Testing Object Data
    useEffect(() => {
        handleNameSubmit2();
    }, []);

    // Excuse Generator
    useEffect(() => {
        handleEscGen();
    }, []);

    return (
        <div>
            <Navbar />
            <div className='container episode6'>
                <h1>Episode6: Fetch Data </h1>

                <div className='CatFactGen'>
                    <h3>Random Cat Fact Generator</h3>
                    <p>{dataFact}</p>
                    <button
                        className='RefreshBtn'
                        onClick={handleRefresh}
                    >Refresh</button>
                </div>

                <div className='dogImgGen'>
                    <h3>Dog Image Generator</h3>
                    <img
                        className='dogImg'
                        src={dogImg}
                        alt="Dog_Image" />
                    <button
                        className='RefreshBtn'
                        onClick={handleRefreshImg}
                    >Img Refresh</button>
                </div>

                <div className='nameAgeGen'>
                    <h3>Name Average Age</h3>

                    <input
                        className='inputClass'
                        type="text"
                        placeholder='Enter Name'
                        onChange={(event) => {
                            setSubmitedName(event.target.value);
                        }}
                        value={submitName}
                    />

                    <button
                        className='RefreshBtn'
                        onClick={handleNameSubmit}
                    >Submit</button>


                    <h4>Result</h4>
                    <div className='resultDiv'>
                        <p>Name: {avgName}</p>
                        <p>Age: {avgAge}</p>
                        <p>Count: {avgCount}</p>
                    </div>
                </div>

                <div className='nameAgeGen2'>
                    <h3>Name Average Age: Object Data</h3>

                    <input
                        className='inputClass'
                        type="text"
                        placeholder='Ex. James...'
                        onChange={(event) => {
                            setSubmitedName2(event.target.value);
                        }}
                        value={submitName2}
                    />

                    <button
                        className='RefreshBtn'
                        onClick={handleNameSubmit2}
                    >Submit</button>


                    <h4>Result</h4>
                    <div className='resultDiv'>
                        {/* This mean only access (ex. name) inside this object if not null. */}
                        <p>Name: {avgObj?.name}</p>
                        <p>Age: {avgObj?.age}</p>
                        <p>Count: {avgObj?.count}</p>
                    </div>
                </div>

                <div className='excuseGen'>
                    <h3>Excuse Generator</h3>

                    <p>{genExcuse}</p>

                    <div className='excuseBtns'>
                        <button
                            className='RefreshBtn'
                            onClick={() => {
                                handleEscGen("party");
                            }}
                        >Party</button>

                        <button
                            className='RefreshBtn'
                            onClick={() => {
                                handleEscGen("gaming");
                            }}
                        >Gaming</button>

                        <button
                            className='RefreshBtn'
                            onClick={() => {
                                handleEscGen("developers");
                            }}
                        >Developer</button>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Episode6
