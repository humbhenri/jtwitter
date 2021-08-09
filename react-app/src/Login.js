import React, { useState } from "react";
import { login } from "./API";
import "./Login.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import Signup from "./Signup";

export default function Login({ setToken }) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const clear = () => {
        setName("");
        setPassword("");
        setError("");
    };
    const handleSubmit = async (e) => {
        setError("");
        e.preventDefault();
        const token = await login({ name, password });
        if (token) {
            console.log(token);
            setToken(token);
            clear();
        } else {
            setError("Login or password incorrect");
        }
    };
    return (
        <div className="login">
            <TwitterIcon className="login__twitterIcon" />
            <h2 className="login__title">Login to JTwitter</h2>
            <div className="login__error">
                {error && <p className="login__error">{error}</p>}
            </div>
            <form onSubmit={handleSubmit}>
                <div className="login__input">
                    <input
                        type="text"
                        placeholder="User name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                    />
                </div>
                <div className="login__input">
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                </div>
                <button className="login__submit">Log in</button>
                <Signup onModalOpen={() => clear()}></Signup>
            </form>
        </div>
    );
}
