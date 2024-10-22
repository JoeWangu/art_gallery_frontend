// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import UserModal from './UserModal';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5); // Change this value for more or fewer users per page

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://art-gallery-server-mhfu.onrender.com/users');
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    // Logic for pagination
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    // const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const [sortOrder, setSortOrder] = useState('asc'); // Default sorting order

    const sortedUsers = [...users].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });

    const handleSort = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

    const [selectedUser, setSelectedUser] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = (user) => {
        setSelectedUser(user);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedUser(null);
    };

    return (
        <div className="container">
            <h1>User List</h1>
            <button onClick={handleSort}>
                Sort by Name ({sortOrder === 'asc' ? 'Descending' : 'Ascending'})
            </button>
            {loading ? (
                <p>Loading users...</p>
            ) : (
                <>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {currentUsers.length > 0 ? (
                        <ul>
                            {currentUsers.map(user => (
                                <li key={user.id} onClick={() => openModal(user)}>
                                    {user.name} - {user.email}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No users found.</p>
                    )}
                    <Pagination 
                        usersPerPage={usersPerPage} 
                        totalUsers={users.length} 
                        paginate={paginate} 
                    />
                </>
            )}
            <UserModal 
                isOpen={modalIsOpen} 
                onRequestClose={closeModal} 
                user={selectedUser} 
            />
        </div>
    );
};

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <button onClick={() => paginate(number)} className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default UserList;





// import React, { useEffect, useState } from 'react';
// import { getUsers } from '../services/apiService';

// const UserList = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const data = await getUsers();
//                 setUsers(data);
//             } catch (err) {
//                 setError(err.response.data.message || 'Error fetching users');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUsers();
//     }, []);

//     if (loading) return <p>Loading users...</p>;
//     if (error) return <p>{error}</p>;

//     return (
//         <div>
//             <h2>User List</h2>
//             <ul>
//                 {users.map(user => (
//                     <li key={user.id}>
//                         {user.name} - {user.email} {user.is_artist ? '(Artist)' : ''}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default UserList;
