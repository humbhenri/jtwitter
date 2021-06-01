import React, { useState } from 'react';
import { login } from './API';
import './Login.css';

export default function Login({ setToken }) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await login({ name, password });
        console.log(token);
        setToken(token);
        setName('');
        setPassword('');
    }
    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    User name
                </label>
                <input type="text" id="name" onChange={e => setName(e.target.value)} value={name}/>
                <label htmlFor="password">
                    Password
                </label>
                <input type="password" id="password" onChange={e => setPassword(e.target.value)} value={password}/>
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}
