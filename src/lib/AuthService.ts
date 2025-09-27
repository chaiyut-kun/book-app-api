'use client'

import { LoginForm, RegisterForm } from "@/types/RegisterForm";
import axios from "axios";

export default class AuthService {
  public static API_PATH = "http://localhost:3000/api"
  static Register(data: RegisterForm) {
    console.log(this.API_PATH)
    // send data to api
    const response = axios.post(
      `${AuthService.API_PATH}/auth/register`,
      data,
      {}
    );

    return response;
  }

  static async Login(data: LoginForm) {
    const response = await axios.post(`${AuthService.API_PATH}/auth/login`, data)
    localStorage.setItem('token',response.data.token)
    return response;
  }

  static ValidatePassword(password: string, confirmPassword: string) {
    return password === confirmPassword && password.length >= 6;
  }

  static ValidateEmail(email: string) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  static CheckToken() {
    try {
      // in case token is not exists
      if (localStorage.getItem('token') === null) {
        window.location.href = '/login'
      } 
    } catch (error) {
      console.log(error)
      // in case local storage is not set
      window.location.href = '/login'
    }
  }

  static LogOut() {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }
  
}

