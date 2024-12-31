import React, { useState } from 'react';
import './searchbar.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';



const SearchBar = ({ placeholder, data, onSearch }) => {

    // Functions
    const [filteredData, setFilteredData] = useState([]);
    const [inputWord, setInputWord] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setInputWord(searchWord);
        onSearch(inputWord);

        // .includes(searchWord) checks if the title contains the string stored in searchWord.
        // .toLowerCase(): to convert both to lowercase to make search more holistic
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }

    }

    // Clear input and filtered data
    const clearInput = () => {
        setFilteredData([]);
        setInputWord("");
    }




    return (
        <div className='searchBar'>
            <div className='search'>
                <div className='searchInputDiv'>
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={inputWord}
                        onChange={handleFilter}
                        className='searchInput'
                    />

                    <div className='searchIconDiv'>
                        {filteredData.length === 0 ? < SearchIcon /> : <CloseIcon onClick={clearInput} />}
                    </div>
                </div>

            </div>

            <button
                // onClick={ }
                className='searchBtn'
            >Search</button>

            {filteredData.length !== 0 && (
                <div className='dataResults'>
                    {/* Value: is the book */}
                    {/* slice(): helps you narrow the displayed search to the 15 best items. */}
                    {filteredData.slice(0, 15).map((value, key) => {
                        return <div key={key}>
                            <a
                                href={value.link}
                                className='dataItem'
                                target='_blank' rel="noreferrer"
                            >
                                <p>{value.title}</p>
                            </a>
                        </div>
                    })}

                </div>
            )}



        </div>
    )
}

export default SearchBar
