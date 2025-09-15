import axios from "axios"

export default class AuthService {
    static Register(data: any) {
        // send data to api
        const response = axios.post('http://localhost:3000/api/auth/register', data)
        
    }
}