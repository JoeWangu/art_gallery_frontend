import React, { useEffect, useState } from 'react';
import { getUsers, getArtworks, getReviews } from '../services/apiService';

const ApiTester = () => {
    const [users, setUsers] = useState([]);
    const [artworks, setArtworks] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const usersData = await getUsers();
                // console.log('Fetched Users:', usersData); // Log the response
                setUsers(usersData);
    
                const artworksData = await getArtworks();
                // console.log('Fetched Artworks:', artworksData); // Log the response
                setArtworks(artworksData);
    
                const reviewsData = await getReviews();
                // console.log('Fetched Reviews:', reviewsData); // Log the response
                setReviews(reviewsData);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <pre>{JSON.stringify(users, null, 2)}</pre>
            <h1>Artworks</h1>
            <pre>{JSON.stringify(artworks, null, 2)}</pre>
            <h1>Reviews</h1>
            <pre>{JSON.stringify(reviews, null, 2)}</pre>
        </div>
    );
};

export default ApiTester;
