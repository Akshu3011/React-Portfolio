import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';


export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{  height: '100vh' }} >
       
          <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
        <Stack spacing={2}>
        <h3>Hello, My name is</h3>
      <h1>Akshata Kumbhar</h1>
      <h3>I'm a Software Engineer</h3>
      <button>View Portfolio</button>

        </Stack>
    </div>
    </Box>
      </Container>
    </React.Fragment>
  );
}


