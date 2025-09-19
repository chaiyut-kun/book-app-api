"use client"

import React, { useState } from 'react'
import { Card, Typography, Box, Container, Button } from '@mui/material'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Link from 'next/link';

export default function Login() {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const handlerUserData = () => {

    }

    const onTextChange = (e: React.FormEvent<HTMLInputElement>): void => {
        const {name, value} = e.currentTarget
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
                        <Typography variant='h5' align='center'>Login</Typography>
                    </Box>
                    <Box>
                        <InputWithIcon label="Username" type="text" />
                        <InputWithIcon label="Password" type="password" />
                    </Box>
                    <Box sx={{position: 'relative', mb:2}}>
                    <Box sx={{ position: 'absolute', right: 0 }}>
                            <Link href={"#"}>
                                <Typography fontSize={12}>
                                    Forgot password?
                                </Typography>
                            </Link>

                        </Box>
                    </Box>
                    <Button variant="contained" sx={{ my: 2 }} fullWidth>Login</Button>
                </Card>
            </Container>
        </>
    )
}

export function InputWithIcon({ label, type }: { label: string, type: string }) {
    return (
        <Box sx={{ '& > :not(style)': { my: 2 } }} >
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="input-with-icon-adornment">
                    {label}
                </InputLabel>
                <Input
                    type={type}
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