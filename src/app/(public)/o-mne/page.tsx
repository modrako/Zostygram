// src/app/o-mne/page.tsx

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import { Link } from '@mui/material';

export const metadata = { title: " O mne | Zostygram" }

export default function Home() {

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5, flexDirection: "column", }}>
      <Typography sx={{ mb: 3 }} variant='h4'> Stránke o mne </Typography>
      <Typography sx={{ maxWidth: 800, textAlign: "center", lineHeight: 2 }}>Cauko <br />

        Chcem dobre veci lebo zle su zle<br />
        <Link href="https://www.youtube.com/@modrako5829" color="secondary" underline="hover" fontStyle="italic">Youtube</Link> <br />
        <Link href="https://www.instagram.com" color="secondary" underline="hover" fontStyle="italic">Instagram</Link> <br />
        <Link href="https://zochova.sk/" color="secondary" underline="hover" fontStyle="italic">moja skola</Link>
      </Typography>
    </Box>
  );
}
