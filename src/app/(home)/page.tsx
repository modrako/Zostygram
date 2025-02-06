import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Button } from "@mui/material";

export const metadata = { title: "Domov | Zostygram" };

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/prispevok");
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5, flexDirection: "column" }}>
      <Typography variant='h3'> ZostyGram</Typography>
      <Typography variant='caption'> Socialne siete inak</Typography>
      
      {/* Scrolling Banner */}
      <Box sx={{ width: '100%', overflow: 'hidden', mt: 3 }}>
        <Box sx={{ display: 'flex', animation: 'scroll 20s linear infinite' }}>
          <Image
            src="/static/imgs/banner.png"
            alt="Banner"
            width={1200} // Adjust based on your image dimensions
            height={200} // Adjust based on your image dimensions
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      </Box>
      <Typography variant='h6'> Prihlaste sa teraz a najdite novy svet! </Typography>
      <Button variant="outlined" href="/auth/registracia" sx={{ margin: 2}}>
           Registrujte sa teraz!
      </Button><br></br>
    </Box>
  );
}

// Add the CSS animation
const styles = `
  @keyframes scroll {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

// Inject the styles into the document head
export const metadataWithStyles = {
  ...metadata,
  styles: styles,
};