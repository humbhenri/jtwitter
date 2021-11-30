import React, { useState } from 'react';
import Modal from 'react-modal';
import { signup } from './API';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Button from './components/button';
import Error from './components/error';

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

Modal.setAppElement("#root");

export default function Signup(props) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [error, setError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async ({name, displayName, password}, e) => {
        const data = await signup({ name, password, displayName });
        if (data && "message" in data) {
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
             <Button onClick={openModal}>Sign up</Button>
             <Modal
               isOpen={modalIsOpen}
               onRequestClose={closeModal}
               style={customStyles}
               contentLabel="Signup"
             >
               <h2>Sign up on JTwitter</h2>
               <div className="login__error">{error && <Error>{error}</Error>}</div>
               <form onSubmit={ handleSubmit(onSubmit, onError) }>
                 <div className="login__input">
                   <input
                     type="text"
                     placeholder="User name"
                     {...register('name', {
                         required: 'O campo é obrigatório.',
                     })} />
                 </div>
                 <ErrorMessage errors = { errors } name="name" render={({message}) => <Error>{message}</Error>}/>
                 <div className="login__input">
                   <input
                     type="text"
                     placeholder="Display name"
                     {...register('displayName', {
                         required: 'O campo é obrigatório.',
                     })} />
                 </div>
                 <ErrorMessage errors = { errors } name="displayName" render={({message}) => <Error>{message}</Error>}/>
                 <div className="login__input">
                   <input
                     type="password"
                     placeholder="Password"
                     {...register('password', {
                         required: 'O campo é obrigatório.',
                     })}/>
                 </div>
                 <ErrorMessage errors = { errors } name="password" render={({message}) => <Error>{message}</Error>}/>
                 <Button primary>Create account</Button>
               </form>
             </Modal>
           </>;
}
