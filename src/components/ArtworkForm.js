import React, { useState } from 'react';
import { createArtwork } from '../services/apiService';

const ArtworkForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [artistId, setArtistId] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createArtwork({ title, description, price: parseFloat(price), artist_id: parseInt(artistId) });
            setMessage('Artwork created successfully');
            setTitle('');
            setDescription('');
            setPrice('');
            setArtistId('');
        } catch (err) {
            setMessage(err.response.data.message || 'Error creating artwork');
        }
    };

    return (
        <div>
            <h2>Add New Artwork</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Artist ID:</label>
                    <input
                        type="number"
                        value={artistId}
                        onChange={(e) => setArtistId(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Artwork</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ArtworkForm;
