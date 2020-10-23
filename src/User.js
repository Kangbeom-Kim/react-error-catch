import React from 'react';

function User ({ user }) {
    if (!user) return null;
    return (
        <ul>
            {user.map(user => (
                <li key={user.id}>{user.username}</li>
            ))}
        </ul>
    )
}

export default User;
