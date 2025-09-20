"use client"

import AuthService from '@/lib/AuthService'
import { RegisterForm } from '@/types/RegisterForm'
import { Container, Button, Typography, Card, CardContent, Input } from '@mui/material'
import { useState } from 'react'

function Register() {
    const userData = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    } 
    
    const [registerForm, setRegisterForm] = useState(userData)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setRegisterForm({
            ...registerForm,
            [name]: value
        })
    }

    const handleRegister = () => {
        if (!AuthService.ValidateEmail(registerForm.email)) {
            alert('Invalid email format')
            return
        }

        if (!AuthService.ValidatePassword(registerForm.password, registerForm.confirmPassword || '')) {
            alert('Passwords do not match')
            return
        }

        // console.log(registerForm)

        AuthService.Register(registerForm as RegisterForm).then(async res => {
            if (res.status === 201) {
                window.location.href = '/login'
            }
        })
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Card>
                <CardContent>
                    <Typography>
                        Register Pages
                    </Typography>
                    <Input value={registerForm.username} onChange={handleChange} name='username' placeholder='Username' fullWidth />
                    <Input value={registerForm.email} onChange={handleChange} name='email' placeholder='Email' fullWidth />
                    <Input value={registerForm.password} onChange={handleChange} name='password' placeholder='Password' type='password' fullWidth />
                    <Input value={registerForm.confirmPassword} onChange={handleChange} name='confirmPassword' placeholder='Confirm password' type='password' fullWidth />

                    <Button
                        type='submit'
                        variant='contained' sx={{ mt: 2 }}
                        onClick={handleRegister}>Register</Button>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Register