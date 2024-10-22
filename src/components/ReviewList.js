import React, { useEffect, useState } from 'react';
import { getReviews } from '../services/apiService';

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const data = await getReviews();
                setReviews(data);
            } catch (err) {
                setError(err.response.data.message || 'Error fetching reviews');
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    if (loading) return <p>Loading reviews...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container">
            <h1>Reviews</h1>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map(review => (
                        <li key={review.id} style={{
                            backgroundColor: '#f9f9f9',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            padding: '15px',
                            marginBottom: '10px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        }}>
                            <h3 style={{ margin: '0' }}>{review.content}</h3>
                            <p style={{ fontStyle: 'italic' }}>Rating: {review.rating} stars</p>
                            <p style={{ color: '#555' }}>Reviewed by User ID: {review.user_id} for Artwork ID: {review.artwork_id}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No reviews found.</p>
            )}
        </div>
    );
    

    // return (
    //     <div>
    //         <h2>Review List</h2>
    //         <ul>
    //             {reviews.map(review => (
    //                 <li key={review.id}>
    //                     {review.content} - Rating: {review.rating}
    //                 </li>
    //             ))}
    //         </ul>
    //     </div>
    // );
};

export default ReviewList;
