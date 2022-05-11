import axios from "axios";


const api = axios.create({
    baseURL: 'http://localhost:3334' || import.meta.env.VITE_API_URL
})


export { api }