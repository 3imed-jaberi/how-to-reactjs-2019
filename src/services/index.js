import axios from 'axios';


const API_ENDPOINT = 'http://localhost:4000/users';


// get users from the rest-api ⛷ .. 
const getUsers = () => axios.get(API_ENDPOINT);


export { getUsers };