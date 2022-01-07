import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Canal from './Canal';
import CanalGrid from './CanalGrid';
import './Home.css';

const Home = props => {

    const [categories, setCategories] = useState(["Recomendados"]);

    return (
        <div id='page'>
            <div className='lateral'>
                <div className='lateral-conten'>
                    <h1>Spotify</h1>
                    <Canal
                        setCategories={setCategories}
                    />
                </div>
            </div>
            <ol>
                {
                    categories.map((category) => {
                        return (
                            <div className='conten-primary'>
                                <CanalGrid key={category} category={category} />
                            </div>
                        );
                    })
                }
            </ol>
        </div>
    )
}

Home.propTypes = {

}

export default Home
