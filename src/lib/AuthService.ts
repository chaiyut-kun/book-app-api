import { RegisterForm } from "@/types/RegisterForm"
import axios from "axios"

export default class AuthService {
    static Register(data: RegisterForm) {
        // send data to api
        const response = axios.post('http://localhost:3000/api/auth/register', data)
        return response
    }
}

export function ValidatePassword(password: string, confirmPassword: string) {
    return password === confirmPassword && password.length >= 6
}

export function ValidateEmail(email: string) {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
}