"use client";

import * as React from "react";
import { signIn } from "next-auth/react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ErrorIcon from '@mui/icons-material/Error';

export default function RegisterPage() {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleSignIn = () => {
    if (!isChecked) {
      alert("MUSITE SUHLASIT Z GDPR!");
      return;
    }
    signIn('google');
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh"
      }}
    >
      <Card sx={{ boxShadow: 3, minWidth: 450 }}>
        <CardContent sx={{ textAlign: "center", display: "flex", flexDirection: "column" }}>
          <Typography variant="h4" component="h1">
            Registrácia
          </Typography>
          <Typography sx={{ mb: 2, mt: 2 }}>
            Máte účet? <Link href="prihlasenie" color="secondary" underline="hover">Prihláste sa</Link>
          </Typography> <br />
          <Typography >
            Musite zaklklinut GDPR Na to aby ste sa mohli Registrovat
          </Typography> <br />
          <FormControlLabel
            sx={{ justifyContent: "center" }}
            color="secondary"
            control={
              <Checkbox
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            }
            label={
              <p>
                Súhlasím s <Link href="/gdpr" color="secondary" underline="hover">GDPR</Link> a{" "}
                <Link href="/podmienky" color="secondary" underline="hover">podmienkami používania</Link>
              </p>
            }
          />
          {!isChecked && (
            <Box
              sx={{
                width: 450,
                padding: 1,
                borderRadius: 1,
                border: 5,
                borderColor: 'error.main',
                bgcolor: '#df4242',
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ErrorIcon/>
              <Typography variant="h5"> MUSITE SUHLASIT S GDPR</Typography>
            </Box>
          )}
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={handleSignIn}
            sx={{ mb: 1, mt: 1 }}
          >
            Registrovať sa pomocou Google
          </Button>
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            onClick={handleSignIn}
          >
            Registrovať sa pomocou Githubu
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}