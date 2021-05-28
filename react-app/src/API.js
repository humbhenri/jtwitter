import axios from 'axios';

// TODO replace fixed token with a login
const server = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: { Authorization : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJIdW1iZXJ0byIsImF1dGgiOlt7ImF1dGhvcml0eSI6IlVTRVIifV0sImlhdCI6MTYyMjIyOTI2MiwiZXhwIjoxNjIyMjMyODYyfQ.DTh_qa-mlelsdBwIZBSY6W5Ok4YIQyyznOU262the3s'}
});

export async function getPosts() {
    try {
        const res = await server.get('posts');
        return res.data;
    } catch (error) {
        console.error(error);
    }
}
