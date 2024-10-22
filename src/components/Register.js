// src/components/Register.js
import React, { useState } from 'react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isArtist, setIsArtist] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!name || !email || !password) {
            setError('All fields are required!');
            return;
        }

        setError(''); // Clear any previous error

        const response = await fetch('https://art-gallery-server-mhfu.onrender.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password, is_artist: isArtist }),
        });

        if (response.ok) {
            alert('Registration successful!');
            // Redirect or reset form here if needed
        } else {
            const data = await response.json();
            setError(data.message || 'Registration failed!');
        }
    };

    return (
        <div className="container">
            <h1>Register</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label>
                    <input
                        type="checkbox"
                        checked={isArtist}
                        onChange={(e) => setIsArtist(e.target.checked)}
                    />
                    Register as Artist
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;



// import React, { useState } from 'react';
// import { registerUser } from '../services/apiService';

// const Register = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         is_artist: false,
//     });

//     const [message, setMessage] = useState('');

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: type === 'checkbox' ? checked : value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await registerUser(formData);
//             setMessage(response.message);
//         } catch (error) {
//             setMessage(error.response.data.message || 'Registration failed');
//         }
//     };

//     return (
//         <div>
//             <h2>Register</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Name:</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>
//                         Are you an artist?
//                         <input
//                             type="checkbox"
//                             name="is_artist"
//                             checked={formData.is_artist}
//                             onChange={handleChange}
//                         />
//                     </label>
//                 </div>
//                 <button type="submit">Register</button>
//             </form>
//             {message && <p>{message}</p>}
//         </div>
//     );
// };

// export default Register;
