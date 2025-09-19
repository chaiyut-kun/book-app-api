import { LoginForm, RegisterForm } from "@/types/RegisterForm";
import axios from "axios";

export default class AuthService {
  static Register(data: RegisterForm) {
    // send data to api
    const response = axios.post(
      "http://localhost:3000/api/auth/register",
      data,
      {

      }
    );
    return response;
  }

  static Login(data: LoginForm){
    const response = axios.post 
  }

  static ValidatePassword(password: string, confirmPassword: string) {
    return password === confirmPassword && password.length >= 6;
  }
  static ValidateEmail(email: string) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
}
