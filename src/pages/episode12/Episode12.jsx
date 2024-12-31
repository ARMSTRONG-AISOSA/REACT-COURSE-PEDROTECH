import React from 'react';
import './episode12.css';
import Navbar from '../../components/navbar/Navbar';
import SearchBar from '../../components/searchBar/SearchBar';
import BookData from '../../data/bookData.json';

const Episode12 = () => {

    // Function
    const handleSearch = (searchWord) => {
        console.log('Searching for:', searchWord);
    }

    return (
        <div>
            <Navbar />
            <div className='container episode12'>
                <div>
                    <h1>Episode 12: Bonus</h1>
                    <h3>Search Bar </h3>
                </div>

                <div>
                    <div className='searchBarTitle'>
                        <h2>Search Bar</h2>
                    </div>

                    <SearchBar
                    placeholder="Search for a book"
                    onSearch={handleSearch}
                    data={BookData}
                     />
                </div>
            </div>
        </div>
    )
}

export default Episode12
