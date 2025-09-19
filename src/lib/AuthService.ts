'use client'

import { LoginForm, RegisterForm } from "@/types/RegisterForm";
import axios from "axios";

export default class AuthService {
  private static API_PATH = "http://localhost:3000/api"
  static Register(data: RegisterForm) {
    // send data to api
    const response = axios.post(
      `${AuthService.API_PATH}/auth/register`,
      data,
      {}
    );

    return response;
  }

  static Login(data: LoginForm) {
    const response = axios.post(`${AuthService.API_PATH}/auth/login`, data)
    return response;
  }

  static ValidatePassword(password: string, confirmPassword: string) {
    return password === confirmPassword && password.length >= 6;
  }

  static ValidateEmail(email: string) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

}

