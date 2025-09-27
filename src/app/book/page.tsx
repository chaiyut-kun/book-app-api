import * as React from 'react';
import Box from '@mui/material/Box';

export default function FormPropsTextFields() {
  return (
    <Box
    
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch', bgcolor: 'white' } }}
      noValidate
      autoComplete="off"
    >
      <div>
      </div>
    </Box>
  );
}
