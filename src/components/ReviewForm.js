import React, { useState } from 'react';
import { createReview } from '../services/apiService';

const ReviewForm = () => {
    const [content, setContent] = useState('');
    const [rating, setRating] = useState('');
    const [userId, setUserId] = useState('');
    const [artworkId, setArtworkId] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createReview({ content, rating: parseInt(rating), user_id: parseInt(userId), artwork_id: parseInt(artworkId) });
            setMessage('Review created successfully');
            setContent('');
            setRating('');
            setUserId('');
            setArtworkId('');
        } catch (err) {
            setMessage(err.response.data.message || 'Error creating review');
        }
    };

    return (
        <div>
            <h2>Add New Review</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Rating (1-5):</label>
                    <input
                        type="number"
                        min="1"
                        max="5"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>User ID:</label>
                    <input
                        type="number"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Artwork ID:</label>
                    <input
                        type="number"
                        value={artworkId}
                        onChange={(e) => setArtworkId(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Review</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ReviewForm;
