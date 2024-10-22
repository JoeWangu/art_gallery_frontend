// // src/components/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css'; // Ensure you have a CSS file for Navbar styles

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <div className="navbar-brand">
//                 <Link to="/">Art Gallery</Link>
//             </div>
//             {/* <ul className="navbar-links">
//                 <li>
//                     <Link to="/artworks">Artworks</Link>
//                 </li>
//                 <li>
//                     <Link to="/reviews">Reviews</Link>
//                 </li>
//                 <li>
//                     <Link to="/users">Users</Link>
//                 </li>
//             </ul>*/}
//             <ul className="navbar-links">
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/register">Register</Link></li>
//                 <li><Link to="/login">Login</Link></li>
//                 <li><Link to="/artworks">Artworks</Link></li>
//                 <li><Link to="/reviews">Reviews</Link></li>
//                 <li><Link to="/add-artwork">Add Artwork</Link></li>
//                 <li><Link to="/add-review">Add Review</Link></li>
//                 <li><Link to="/users">Users</Link></li>
//                 <li><Link to="/reviews-list">ReviewsList</Link></li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;


// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Art Gallery</Link>
            </div>
            <button className="navbar-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/artworks">Artworks</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/add-artwork">Add Artwork</Link></li>
                <li><Link to="/add-review">Add Review</Link></li>
                <li><Link to="/users">Users</Link></li>
                {/* <li><Link to="/reviews-list">Reviews List</Link></li> */}
            </ul>
        </nav>
    );
};

export default Navbar;
