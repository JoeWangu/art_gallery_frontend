// src/components/ArtworkDetail.js
import React from 'react';
import ReviewsList from './ReviewsList';

const ArtworkDetail = ({ artwork }) => {
    return (
        <div>
            <h2>{artwork.title}</h2>
            <p>{artwork.description}</p>
            <p>Price: ${artwork.price}</p>
            <ReviewsList artworkId={artwork.id} />
        </div>
    );
};

export default ArtworkDetail;
