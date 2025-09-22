import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <Box
    
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch', bgcolor: 'white' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        {/* <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        /> */}
        {/* <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        /> */}
        
      </div>
    </Box>
  );
}
