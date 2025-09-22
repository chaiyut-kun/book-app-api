"use client"

import React, { useState } from 'react'
import { Card, Typography, Box, Container, Button, Divider } from '@mui/material'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Link from '@mui/material/Link';
import AuthService from '@/lib/AuthService';

export default function Login() {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    

    const handlerUserData = async () => {
        try {
            const res = await AuthService.Login(userData)
            if (res.status === 200) {
                localStorage.setItem('token', res.data.token)
            }
            window.location.href = '/'
        } catch (error) {
            console.log(error)
        }
    }

    const toRegister = () => {
        window.location.href = '/register'
    }

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target
        setUserData({
            ...userData,
            [name]: value
        });

    };

    return (
        <>
        
            <Container>
                <Card sx={{ maxWidth: 400, mx: 'auto', py: 2, px: 6 }}>
                    <Box>
                        <Typography variant='h5' >Login</Typography>
                        <Typography variant='caption' >Don't have an account? <Link href="/register" underline="always">Create new</Link></Typography>
                    </Box>
                    <Box>
                        <InputWithIcon name='email' value={userData.email} handleChange={onTextChange} label="Email" type="text" />
                        <InputWithIcon name='password' value={userData.password} handleChange={onTextChange} label="Password" type="password" />
                    </Box>
                    <Box sx={{ position: 'relative', mb: 2 }}>
                        <Box sx={{ position: 'absolute', right: 0 }}>
                            <Link href={"#"} >
                                <Typography fontSize={12}>
                                    Forgot password?
                                </Typography>
                            </Link>

                        </Box>
                    </Box>
                    <Button variant="contained" sx={{ my: 2 }} onClick={handlerUserData} fullWidth>Login</Button>
                    <Divider sx={{ opacity: 0.7 }}>or</Divider>
                    <Button variant="contained" sx={{ my: 2 }} onClick={toRegister} fullWidth>Register</Button>

                </Card>
            </Container>
        </>
    )
}

interface InputWithIconProps {
    label: string;
    type: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    name: string
    value: string
}

export function InputWithIcon({ label, type, handleChange, name, value }: InputWithIconProps) {
    return (
        <Box sx={{ '& > :not(style)': { my: 2 } }} >
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">
                    {label}
                </InputLabel>
                <Input
                    name={name}
                    value={value}
                    type={type}
                    onChange={handleChange}
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                />
            </FormControl>
            {/* <TextField
        id="input-with-icon-textfield"
        label="TextField"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          },
        }}
        variant="standard"
      /> */}
            {/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="With sx" variant="standard" type={type}/>
      </Box> */}
        </Box>
    );
}