// src\sections\GdprView.tsx

"use client"

import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';


export default function GdprView() {

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5, flexDirection: "column", }}>
      <Typography variant='h4' align='left' sx={{ margin: 2}}> GDPR - Uzivatelkse Prava</Typography>
      <Typography>Vasa Sukorme Data su pre nas velmy dolezite a v tomto dokumente sa naucit ako s nimy zachadzame</Typography>
      <Typography variant='h5' fontWeight="bold" align='left' sx={{ margin: 2 }}>Vyuzite</Typography>
      <Typography>Vsetky data ktore nam date budu vyuzite len na spracovanie vasho online uctu vecinou</Typography>
      <Typography variant='h5' fontWeight="bold" align='left' sx={{ margin: 2 }}>Prava</Typography>
      <Typography>Mate pravo vymazat alebo ziskat vsetky data ktore mame o vas </Typography>
      <Typography>ked prejdete cez na quiz na 90% a potom ked nam poslete screenshot vysledkov na VasaDataSuNase@Data.com</Typography>
      <Button variant="outlined" href="/auth/registracia">
            Naspet
      </Button>
    </Box>
  );
}
