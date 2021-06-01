import axios from 'axios';

function getServer() {
    let serverOpts = {
        baseURL: 'http://localhost:8080/'
    };
    const tokenString = sessionStorage.getItem('token');
    if (!tokenString) {
        return axios.create(serverOpts);
    }
    const token = JSON.parse(tokenString);
    if (token) {
        serverOpts = Object.assign(serverOpts, {
            headers: {
                Authorization:
                    'Bearer ' + token,
            }
        });
    }
    return axios.create(serverOpts);
}

export async function getPosts() {
    try {
        const res = await getServer().get('posts');
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

export async function tweet({ text, urlImage }) {
    try {
        const res = await getServer().post('posts', { text, urlImage });
        console.log('tweet successfull');
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

export async function login({ name, password }) {
    try {
        const res = await getServer().post('login', { name, password });
        console.log(JSON.stringify(res));
        console.log('login successfull');
        return res.data;
    } catch (error) {
        console.error(error);
    }
}