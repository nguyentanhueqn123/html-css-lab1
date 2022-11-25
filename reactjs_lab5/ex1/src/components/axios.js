import axios from 'axios'
const instance = axios.create({
    baseURL: "http://localhost:3069/v2/posts"
})

export default instance