// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Import the CSS file
import Register from './components/Register';
import Login from './components/Login';
import UserList from './components/UserList';
import ArtworkList from './components/ArtworkList';
import ReviewList from './components/ReviewList';
import ReviewsList from './components/ReviewsList';
import ArtworkForm from './components/ArtworkForm';
import ReviewForm from './components/ReviewForm';
import Home from './components/Home'; // Import Home
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <div className="App">
                {/* <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/artworks">Artworks</Link></li>
                        <li><Link to="/reviews">Reviews</Link></li>
                        <li><Link to="/add-artwork">Add Artwork</Link></li>
                        <li><Link to="/add-review">Add Review</Link></li>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/reviews-list">ReviewsList</Link></li>
                    </ul>
                </nav> */}
                <Navbar/>

                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/artworks" element={<ArtworkList />} />
                    <Route path="/reviews" element={<ReviewList />} />
                    <Route path="/add-artwork" element={<ArtworkForm />} />
                    <Route path="/add-review" element={<ReviewForm />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/reviews-list" element={<ReviewsList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
