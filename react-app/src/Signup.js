import React, { useState } from "react";
import Modal from "react-modal";
import "./Signup.css";
import { signup } from "./API";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement("#root");

export default function Signup(props) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [error, setError] = useState("");
    function openModal() {
        setIsOpen(true);
        if (props.onModalOpen) {
            props.onModalOpen();
        }
    }
    function closeModal() {
        setError("");
        setName("");
        setPassword("");
        setDisplayName("");
        setIsOpen(false);
    }
    async function doSignup(e) {
        if (!name || !password || !displayName) {
            setError("Required name, password and display name not informed");
            return;
        }
        setError("");
        const data = await signup({ name, password, displayName });
        if (data && "message" in data) {
            setError(data.message);
        } else {
            console.log("Signup successful");
            closeModal();
        }
    }
    return (
        <>
            <button onClick={openModal} className="signup__open">
                Sign up
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Signup"
            >
                <h2>Sign up on JTwitter</h2>
                <div className="login__error">
                    {error && <p className="login__error">{error}</p>}
                </div>
                <form>
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
                            type="text"
                            placeholder="Display name"
                            onChange={(e) => setDisplayName(e.target.value)}
                            value={displayName}
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
                    <button
                        type="button"
                        className="login__submit"
                        onClick={doSignup}
                    >
                        Create account
                    </button>
                </form>
            </Modal>
        </>
    );
}
