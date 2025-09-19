import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography, Box } from "@mui/material";
import { useAuth } from "@/contexts/AppContext";

export function AccountProfile() {

    const { user } = useAuth();
    
    return (
        <>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>

                <AccountCircleIcon fontSize="small" />
                <Typography variant="body2">{user?.username}</Typography>
            </Box>
        </>
    )
}