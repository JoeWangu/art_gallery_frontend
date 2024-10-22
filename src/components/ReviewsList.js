// src/components/ReviewsList.js
import React, { useEffect, useState } from 'react';
import './ReviewsList.css'; 

const ReviewsList = ({ artworkId }) => {
    const [reviews, setReviews] = useState([]);
    const [content, setContent] = useState('');
    const [rating, setRating] = useState(1);

    useEffect(() => {
        const fetchReviews = async () => {
            const response = await fetch(`https://art-gallery-server-mhfu.onrender.com/reviews?artwork_id=${artworkId}`);
            const data = await response.json();
            setReviews(data);
        };

        fetchReviews();
    }, [artworkId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newReview = { content, rating, artwork_id: artworkId, user_id: 1 }; // Replace with actual user ID

        await fetch('https://art-gallery-server-mhfu.onrender.com/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newReview),
        });

        // Refresh reviews
        const response = await fetch(`https://art-gallery-server-mhfu.onrender.com/reviews?artwork_id=${artworkId}`);
        const data = await response.json();
        setReviews(data);
        setContent('');
        setRating(1);
    };

    return (
        <div>
            <h3>Reviews</h3>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your review..."
                    required
                />
                <select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <button type="submit">Submit Review</button>
            </form>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map((review) => (
                        <li key={review.id}>
                            <p><strong>{review.content}</strong> (Rating: {review.rating})</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No reviews yet for this artwork.</p>
            )}
        </div>
    );
};

export default ReviewsList;
