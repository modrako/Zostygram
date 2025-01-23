// src/app/prispevok/page.tsx

import {Typography, Box} from '@mui/material';
import PostsView from '@/sections/PostsView';

export const metadata = {title: " List prispevkov | Zostygram"}

export default async function PostList() {


  return (
    <Box sx={{ display: "flex", alignItems: "center",flexDirection: "column"}}>
      <Typography variant='h4'> List prispevkov </Typography>
      <PostsView></PostsView>
    </Box>
  );
}
