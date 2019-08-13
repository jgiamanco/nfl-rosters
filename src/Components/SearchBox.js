import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input
                className="pa3 ba b--red" 
                type='search' 
                placeholder="search player's name"
                onChange= {searchChange}
            />
        </div>
    );
}

export default SearchBox;