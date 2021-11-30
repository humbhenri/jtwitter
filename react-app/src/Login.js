import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { login } from './API';
import './Login.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import Signup from './Signup';
import Button from './components/button';
import Error from './components/error';

export default function Login({ setToken }) {
    const [error, setError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async ({name, password}, e) => {
        setError('');
        e.preventDefault();
        const token = await login({ name, password });
        if (token) {
            console.log(token);
            setToken(token);
            setError('');
        } else {
            setError("Login or password incorrect");
        }
    };
    return (
        <div className="login">
          <TwitterIcon className="login__twitterIcon"/>
          <h2 className="login__title">Login to JTwitter</h2>
          <div className="login__error">{error && <Error>{error}</Error>}</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login__input">
              <input type="text" placeholder="User name"
                     {...register('name', {
                         required: 'O campo é obrigatório.',
                     })} />
            </div>
            <ErrorMessage errors = { errors } name="name" render={({message}) => <Error>{message}</Error>}/>
            <div className="login__input">
              <input type="password" placeholder="Password"
                     {...register('password', {
                         required: 'O campo é obrigatório.',
                     })} />
            </div>
            <ErrorMessage errors = { errors } name="password" render={({message}) => <Error>{message}</Error>}/>
            <Button primary>Log in</Button>
          </form>
          <Signup></Signup>
        </div>
    );
}
