import React from 'react';

function User ({ user, onToggle }) {
    // if (!user) return null;
    return (
        <ul>
            {user.map(user => (
                <li key={user.id} onClick={()=> onToggle(user.id)}>
                    {user.username}
                </li>
            ))}
        </ul>
    )
}

User.defaultProps = {
    onToggle: () => {
        console.warn('you missed onToggle!');
    }
}
export default User;
