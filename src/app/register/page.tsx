import { Container, Box, Typography, Card, CardContent, Input } from '@mui/material'
import React from 'react'

function Register() {
    return (
        <Container maxWidth="lg">
            <Card>
                <CardContent>
                    <Typography>
                        Register Pages
                    </Typography>
                    <Input placeholder='Username' fullWidth />
                    <Input placeholder='Email' fullWidth />
                    <Input placeholder='Password' type='password' fullWidth />
                </CardContent>
            </Card>
        </Container>
    )
}

export default Register