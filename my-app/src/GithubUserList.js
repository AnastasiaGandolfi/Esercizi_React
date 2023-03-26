import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import GithubUser from './GithubUser'
import ShowGithubUser from './ShowGithubUser';

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
                        <Link to={`/users/${user}`}>
                            {user}
                        </Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
}