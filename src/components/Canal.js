import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Canal.css';

const Canal = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length >= 2) {
            setCategories(categ => [inputValue, ...categ]);
            setInputValue('');
        } else {
            return;
        }
    }

    return (
        <div className='input'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    placeholder="Category"
                    onChange={handleInputChange}
                />
            </form>
        </div>
    )
}

Canal.propTypes = {

}

export default Canal
