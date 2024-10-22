import axios from 'axios';

const API_URL = 'https://art-gallery-server-mhfu.onrender.com'; // Adjust based on your Flask backend URL

// User Registration
export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
};

// User Login
export const loginUser = async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
};

// Get All Users
export const getUsers = async () => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
};

// Get User by ID
export const getUserById = async (id) => {
    const response = await axios.get(`${API_URL}/users/${id}`);
    return response.data;
};

// Get All Artworks
export const getArtworks = async () => {
    const response = await axios.get(`${API_URL}/artworks`);
    return response.data;
};

// Get Artwork by ID
export const getArtworkById = async (id) => {
    const response = await axios.get(`${API_URL}/artworks/${id}`);
    return response.data;
};

// Get All Reviews
export const getReviews = async () => {
    const response = await axios.get(`${API_URL}/reviews`);
    return response.data;
};

// Get Review by ID
export const getReviewById = async (id) => {
    const response = await axios.get(`${API_URL}/reviews/${id}`);
    return response.data;
};

export const createArtwork = async (artworkData) => {
    const response = await axios.post(`${API_URL}/artworks`, artworkData);
    return response.data;
};

export const createReview = async (reviewData) => {
    const response = await axios.post(`${API_URL}/reviews`, reviewData);
    return response.data;
};

// You can also implement methods for creating, updating, and deleting users, artworks, and reviews similarly.
