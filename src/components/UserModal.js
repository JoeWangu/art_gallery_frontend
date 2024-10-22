// src/components/UserModal.js
import React from 'react';
import Modal from 'react-modal';

const UserModal = ({ isOpen, onRequestClose, user }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="User Details"
            ariaHideApp={false} // For accessibility
            className="modal"
            overlayClassName="overlay"
        >
            <h2>User Details</h2>
            {user ? (
                <div>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Artist:</strong> {user.is_artist ? 'Yes' : 'No'}</p>
                </div>
            ) : (
                <p>No user selected.</p>
            )}
            <button onClick={onRequestClose}>Close</button>
        </Modal>
    );
};

export default UserModal;
