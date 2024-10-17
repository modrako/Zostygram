// /src/components/NavBar.tsx

"use client"; // Mark this component as a client component

import * as React from 'react';
import { BottomNavigation, BottomNavigationAction, Box, Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Navbar() {
  const [value, setValue] = React.useState('/');
  const router = useRouter();
  const { data: session } = useSession(); // Get session data

  const handleNavigation = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation showLabels value={value} onChange={handleNavigation}>
        <BottomNavigationAction label="Domov" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction label="Profily" value="/profil" icon={<AccountCircleIcon />} />
        <BottomNavigationAction label="Príspevky" value="/prispevok" icon={<AddCircleIcon />} />

        {/* Conditional rendering based on session */}
        {!session ? (
          <>
            <BottomNavigationAction label="Prihlásenie" value="/auth/prihlasenie" icon={<AccountCircleIcon />} />
            <BottomNavigationAction label="Registrácia" value="/auth/registracia" icon={<AccountCircleIcon />} />
          </>
        ) : (
          <BottomNavigationAction
            label="Môj Profil"
            value="/profil"
            icon={<Avatar alt={session.user?.name || "User Profile"} src={session.user?.image || ""} />}
          />
        )}
      </BottomNavigation>
    </Box>
  );
}
