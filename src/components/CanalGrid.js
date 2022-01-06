import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './CanalGrid.css';

const CanalGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getChannels();
    }, [])

    const getChannels = async () => {
        const api_key = '859e8ca72f8421979c32674040152533c1bb5d294a55aa0ea2f67dc2bbe5ad61';
        //const limit = 4;
        //const token = 'c536ebc979f5b7ea7cdefe785cdc6c08996316f27430abefa38909932141ff48';
        const endPoint = 'api.audioboom.com/channels/recommended';

        const urlApi = `https://${endPoint}?q=${encodeURI(category)}&api_key=${api_key}`;

        const resp = await fetch(urlApi);
        const { body } = await resp.json();

        const gifs = body.map(item => {
            return {
                id: item.id,
                title: item.title,
                description: item.description,
                urls: item.urls.logo_image.original
            }
        })
        console.log(gifs);
        setImages(gifs);
    }


    return (
        <div>
            <h2>{category} </h2>
            <div>
                {
                    images.map( img => {
                        return (
                            <div key={img.id} className='card'>
                                <img src={img.urls} alt={img.title} className='card-image'/>
                                <p className='card-text'>{img.description} </p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

CanalGrid.propTypes = {

}

export default CanalGrid
