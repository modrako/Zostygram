// src/app/prispevok/page.tsx


import {Typography, Box} from '@mui/material';

export const metadata = {title: " List prispevkov | Zostygram"}

export default function PostList() {

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5, flexDirection: "column", }}>
      <Typography variant='h4'> List prispevkov </Typography>
    </Box>
  );
}
