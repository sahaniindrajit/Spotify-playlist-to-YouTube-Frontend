import PropTypes from 'prop-types';
import React from 'react';

const Input = React.memo(function ({ onChange, onClick }) {
    return (
        <>
            <div className="relative w-2/4">

                <input type="search" onChange={onChange} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://open.spotify.com/playlist/" required />
                <button type="submit" onClick={onClick} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
            </div>

        </>
    )
})

Input.displayName = 'Input';
Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired // Validate that onClick is a function and required

};

export default Input