import React from 'react';

const SearchBox = ({ searchChange }) => { // у Андрея первым параметром был searchfield, но он не нужен
    return (
        <div className='pa2'>
            <input 
            className='pa3 ba b--green bg-lightest-blue' // 
            type='search' 
            placeholder='search robots' 
            onChange={searchChange} // onChange в HTML execute a JavaScript when a user changes the selected option
            // когда происходит onChange событие, оно передается в searchChange function, а оттуда наверх в APP.JS в onSearchChange
            // каждый раз, когда срабатывает событие, к функции добавляются () - она активируется
            />
        </div>
    )
}

export default SearchBox;
