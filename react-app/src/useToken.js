import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        return JSON.parse(tokenString);
    }

    const [token, setToken] = useState(getToken());

    const saveToken = (_token) => {
        sessionStorage.setItem('token', JSON.stringify(_token));
        setToken(_token);
    }

    return {
        setToken: saveToken,
        token
    }
}