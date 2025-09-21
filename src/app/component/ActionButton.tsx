import AuthService from "@/lib/AuthService"
import { Button } from "@mui/material"

export function LogOutButton() {

    const handleLogOut = () => {
        AuthService.LogOut()
        alert("You're logged out")
    }
    
    return (
        
        <Button variant="contained" color="error" onClick={handleLogOut}>Log Out</Button>
    )
}