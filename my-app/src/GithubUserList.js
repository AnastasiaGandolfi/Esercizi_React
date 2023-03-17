import React, { useEffect, useState } from 'react'
import GithubUser from './GithubUser'

// Create a GithubUserList component that maintains an array of usernames, showing a GithubUser component for each username entered. The usernames should be added to the array using an input field and a button.

export default function GithubUserList() {
    const [users, setUsers] = useState([]);

    function handleSubmit(evt) {
        evt.preventDefault();
        const newUser = evt.target.username.value;
        if (newUser !== '') {
            setUsers([...users, newUser]);
        }
        evt.target.username.value = '';
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='username' className='border-8 border-red-600' />
                <button type='submit' className='border-8 border-red-600'>Add User</button>
            </form>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        <GithubUser username={user} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

