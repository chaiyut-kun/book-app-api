import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography, Box } from "@mui/material";
import { useAuth } from "@/contexts/AppContext";
import { LogOutButton } from "./ActionButton";

export function AccountProfile() {

    const { user } = useAuth();
    
    return (
        <>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                { user ? (<LogOutButton/>): <></>}
                <AccountCircleIcon fontSize="small" />
                <Typography variant="body2">{user?.username} | {user?.email}</Typography>
            </Box>
        </>
    )
}