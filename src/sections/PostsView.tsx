// 

"use client";

// Next imports
import Link from 'next/link'

// React imports
import { useEffect, useState } from "react";

// MUI imports
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";


// Server action import
import { fetchPosts } from "@/app/actions/posts";
import { CardHeader } from "@mui/material";

// Post interface
interface Post {
  id: string;
  userId: string;
  imageUrl: string;
  caption?: string | null;
  createdAt: Date; // Adjusted to match fetched data type
  updatedAt: Date; // Adjusted to match fetched data type
  user: {
    name: string | null;
  };
}

const PostsView = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts: Post[] = await fetchPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    loadPosts();
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid item xs={12} key={post.id} sx={{ display: "flex", justifyContent: "center" }}>
            <Card sx={{ maxWidth: 600, width: "100%" }}>
            <Link href={`/prispevok/${post.id}`} style={{textDecoration: 'none', color: 'white',}}>
              <CardHeader title = {post.caption} />
              <CardMedia
                component="img"
                height="280"
                image={post.imageUrl}
                alt={post.caption || "Príspevok bez popisu"}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {post.user.name || "Neznámy používateľ"}
                </Typography>
              </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PostsView;