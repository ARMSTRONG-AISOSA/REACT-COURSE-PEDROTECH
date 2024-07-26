import React from 'react';
import './episode8.css';
import Navbar from '../../components/navbar/Navbar';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const Episode8 = () => {

  // useQuery(arg1, arg2) 
  // arg1: an array with unique id for identifying diff. queries
  // arg2:function to fetch the data
  // data: states that reps the data from the api
  // Nb: From version 5, useQuery and other query-related functions expect an object with specific properties.
  // Object syntax in JS: using curly braces {} with key-value pairs. Each key is a string/variable name (without quotes) followed by a colon (:), and the corresponding value can be any valid JS value (number, string, array, function, another object, etc.).
  // refetch: is a function that allows you to manually trigger a re-fetch of the data for a specific query without state update. 

  // Fetching cat data
  const {
    data: catData,
    error: catError,
    isLoading: catIsLoading,
    refetch: catRefetch
  } = useQuery({
    queryKey: ["cat"],
    queryFn: () => axios.get("https://catfact.ninja/fact").then((response) => response.data)
  });


  // Fetching dog data
  const {
    data: dogData,
    error: dogError,
    isLoading: dogIsLoading,
    refetch: dogRefetch
  } = useQuery({
    queryKey: ["dog"],
    queryFn: () => axios.get("https://dog.ceo/api/breeds/image/random").then((response) => response.data)
  });


  return (
    <div>
      <Navbar />
      <div className='container episode8'>
        <div>
          <h1>Episode 8:</h1>
          <h3>Fetching Data in React Query</h3>
        </div>

        <div className='catFactDiv'>
          <h3>Cat Fact</h3>
          {catIsLoading && <p>Loading....</p>}
          {catError && <p>Error Loading cat data</p>}
          {!catIsLoading && !catError && <p>{catData.fact}</p>}


          <button
            className='queryBtn'
            onClick={() => {
              catRefetch();
            }}
          >Update Data</button>
        </div>

        <div className='dogImgDiv'>
          <h3>Dog Image</h3>

          {dogIsLoading && <p>Loading....</p>}
          {dogError && <p>Error Loading cat data</p>}
          {!dogIsLoading && !dogError && <img
            className='genDogImg'
            src={dogData.message}
            alt="Dog_Image"
          />}

          <button
            className='queryBtn'
            onClick={() => {
              dogRefetch();
            }}
          >Update Data</button>
        </div>

      </div>
    </div>
  )
}

export default Episode8;
