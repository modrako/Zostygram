//src/app/auth/prihlasenie/page.tsx
"use client";

import { signIn } from "next-auth/react";
import { Button, Container, Typography } from "@mui/material";

export default function LoginPage() {
  const handleGoogleLogin = () => {
    signIn("google");
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "100px" }}>
      <Typography variant="h4" gutterBottom>
        Prihlásenie
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoogleLogin}>
        Prihlásiť sa pomocou Google
      </Button>
    </Container>
  );
}
