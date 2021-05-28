import axios from 'axios';

// TODO replace fixed token with a login
const server = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: { Authorization : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJIdW1iZXJ0byIsImF1dGgiOlt7ImF1dGhvcml0eSI6IlVTRVIifV0sImlhdCI6MTYyMjIyNTU5MiwiZXhwIjoxNjIyMjI5MTkyfQ.R159_oIs0hUcyG_KtkhdJ5f3z-eQJmLbJWC5157x39A'}
});

export async function getPosts() {
    try {
        const res = await server.get('posts');
        return res.data;
    } catch (error) {
        console.error(error);
    }
}
