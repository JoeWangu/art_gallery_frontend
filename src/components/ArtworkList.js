import React, { useEffect, useState } from 'react';
import { getArtworks } from '../services/apiService';
import './ArtworksList.css'

const ArtworkList = () => {
    const [artworks, setArtworks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                const data = await getArtworks();
                setArtworks(data);
            } catch (err) {
                setError(err.response.data.message || 'Error fetching artworks');
            } finally {
                setLoading(false);
            }
        };

        fetchArtworks();
    }, []);

    if (loading) return <p>Loading artworks...</p>;
    if (error) return <p>{error}</p>;
    
    return (
        <div className="container">
            <h1>Artwork List</h1>
            {artworks.length > 0 ? (
                <ul>
                    {artworks.map(artwork => (
                        <li key={artwork.id}>
                            <h3>{artwork.title}</h3>
                            <p>{artwork.description}</p>
                            <p>Price: ${artwork.price}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No artworks found.</p>
            )}
        </div>
    );

    // return (
    //     <div>
    //         <h2>Artwork List</h2>
    //         <ul>
    //             {artworks.map(artwork => (
    //                 <li key={artwork.id}>
    //                     <strong>{artwork.title}</strong>: {artwork.description} - ${artwork.price}
    //                 </li>
    //             ))}
    //         </ul>
    //     </div>
    // );
};

export default ArtworkList;
