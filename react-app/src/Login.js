import React, { useState } from 'react';
import { login } from './API';
import './Login.css';
import TwitterIcon from '@material-ui/icons/Twitter'

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
            <TwitterIcon className="login__twitterIcon"/>
            <h2>Login to JTwitter</h2>
            <form onSubmit={handleSubmit}>
                <div className="login__input">
                    <input type="text" placeholder="User name"
                        onChange={e => setName(e.target.value)} value={name}/>
                </div>
                <div className="login__input">
                    <input type="password" placeholder="Password"
                        onChange={e => setPassword(e.target.value)} value={password}/>
                </div>
                <button type="submit" className="login__submit">Log in</button>
            </form>
        </div>
    )
}
