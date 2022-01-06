import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Canal from './Canal';
import CanalGrid from './CanalGrid';
import './Home.css';

const Home = props => {

    const [categories, setCategories] = useState(["channel 1"]);

    return (
        <div>
            
            <h1>Spotify</h1>
            <Canal
                setCategories={setCategories}
            />
            <hr />
            <ol>
                {
                    categories.map((category) => {
                        return (
                            <div className='fondo'>
                            <CanalGrid key={category} category={category}/>  
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
