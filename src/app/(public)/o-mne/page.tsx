// src/app/o-mne/page.tsx

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import { Button, Link } from '@mui/material';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SchoolIcon from '@mui/icons-material/School';
export const metadata = { title: " O mne | Zostygram" }

export default function Home() {

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5, flexDirection: "column", }}>
      <Typography sx={{ mb: 3 }} variant='h4'> O nas</Typography>
      <Typography sx={{ maxWidth: 820, textAlign: "center", lineHeight: 2 }}>Nas maly tim chce zlepsit cley svet <br />
          Preto sme spravili Zostygram vasu prvu a najlepsiu moznsot pokial chcete sa spojit z ludmy okolo vas tu a teraz, uz necakajte a registrujte sa!<br />
      <Button variant="outlined" href="/auth/registracia" sx={{ margin: 2}}>
            Vyberte sy tu spravnu moznost
      </Button><br></br>

        <OndemandVideoIcon/><Link href="https://www.youtube.com/@modrako5829" color="secondary" underline="hover" fontStyle="italic">Youtube</Link> <br />
        <CameraAltIcon/><Link href="https://www.instagram.com" color="secondary" underline="hover" fontStyle="italic">Instagram</Link> <br />
        <SchoolIcon/><Link href="https://zochova.sk/" color="secondary" underline="hover" fontStyle="italic">moja skola</Link>
      </Typography>
    </Box>
  );
}
