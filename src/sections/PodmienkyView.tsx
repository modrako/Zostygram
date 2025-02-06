// src\sections\PodmienkyView.tsx

"use client"

import Typography from '@mui/material/Typography';
import { Box, Button  } from '@mui/material';


export default function PodmienkyView() {

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5, flexDirection: "column", }}>
      <Typography variant='h4' align='left' sx={{ margin: 2}}> Podmienky pouzivania</Typography>
      <Typography>Tieto podmienky hovorie o pouzivany vasich dat na Zostygrame, precitajte si to poriadne</Typography>
      <Typography variant='h5' fontWeight="bold" align='left' sx={{ margin: 2 }}>Pouzivanie Aplikacie</Typography>
      <Typography>Ked pouziete nasu aplikaciu tak musite suhlasit s tymto, a hovorite ze name verite ze ich dobre pouzijeme</Typography>
      <Typography variant='h5' fontWeight="bold" align='left' sx={{ margin: 2 }}>Ochrana Udajov</Typography>
      <Typography>Vase data spracujeme tak napisane v GDPR idiot </Typography>
      <Typography>Dakujeme za soludanenie z nasimy pravdlamy </Typography>
      <Button variant="outlined" href="/auth/registracia" >
            Naspet
      </Button>
    </Box>
  );
}
