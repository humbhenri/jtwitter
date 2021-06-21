import React, { useState } from 'react';
import Modal from 'react-modal';
import './Signup.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export default function Signup() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    async function handleSubmit(e) {
        e.preventDefault();
        console.log('TODO')
    }
    return (
      <>
      <button onClick={openModal}  className="signup__open">Sign up</button>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
        <h2>Sign up on JTwitter</h2>
        <form>
            <div className="login__input">
                <input type="text" placeholder="User name"
                    onChange={e => setName(e.target.value)} value={name} required/>
            </div>
            <div className="login__input">
                <input type="password" placeholder="Password"
                    onChange={e => setPassword(e.target.value)} value={password} required/>
            </div>
            <button type="button" className="login__submit" onClick={handleSubmit}>Create account</button>
        </form>
      </Modal>
      </>
    )
}
