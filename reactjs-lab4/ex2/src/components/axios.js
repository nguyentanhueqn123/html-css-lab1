import axios from 'axios'
const instance = axios.create({
    baseUrl: "YourBackendURL"
})
export default instance