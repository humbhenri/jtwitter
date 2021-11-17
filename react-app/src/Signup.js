import React, { useState } from 'react';
import Modal from 'react-modal';
import './Signup.css';
import { signup } from './API';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

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
    const [error, setError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async ({name, displayName, password}, e) => {
        const data = await signup({ name, password, displayName });
        if (data && 'message' in data) {
            setError(data.message);
        } else {
            closeModal();
        }
    };
    const onError = (errors, e) => {
        console.log(errors);
    }
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setError('');
        setIsOpen(false);
    }
    return <>
             <button onClick={openModal}  className="signup__open">Sign up</button>
             <Modal
               isOpen={modalIsOpen}
               onRequestClose={closeModal}
               style={customStyles}
               contentLabel="Signup"
             >
               <h2>Sign up on JTwitter</h2>
               <div className="login__error">{error && <p className="login__error">{error}</p>}</div>
               <form onSubmit={ handleSubmit(onSubmit, onError) }>
                 <div className="login__input">
                   <input
                     type="text"
                     placeholder="User name"
                     {...register('name', {
                         required: 'O campo é obrigatório.',
                     })} />
                 </div>
                 <ErrorMessage errors = { errors } name="name" render={({message}) => <p className="login__error">{message}</p>}/>
                 <div className="login__input">
                   <input
                     type="text"
                     placeholder="Display name"
                     {...register('displayName', {
                         required: 'O campo é obrigatório.',
                     })} />
                 </div>
                 <ErrorMessage errors = { errors } name="displayName" render={({message}) => <p className="login__error">{message}</p>}/>
                 <div className="login__input">
                   <input
                     type="password"
                     placeholder="Password"
                     {...register('password', {
                         required: 'O campo é obrigatório.',
                     })}/>
                 </div>
                 <ErrorMessage errors = { errors } name="password" render={({message}) => <p className="login__error">{message}</p>}/>
                 <input type="submit" className="login__submit" value="Create account"/>
               </form>
             </Modal>
           </>;
}
