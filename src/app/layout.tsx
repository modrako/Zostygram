// /src/app/layout.tsx

import type { Metadata } from "next"; // Import Metadata type
import "./globals.css"; // Import global styles
import Navbar from "@/components/NavBar"; // Import Navbar component
import AuthProvider from "../components/AuthProvider"; // Import AuthProvider component

// Define the metadata for the layout
export const metadata: Metadata = {
  title: "SnapZoška",
  description: "Created by students of SPŠE Zochova 9, Bratislava",
};

// Define the RootLayout function as a server component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <main style={{ flexGrow: 1 }}>
              {children} {/* Render child components */}
            </main>
            <Navbar /> {/* Bottom Navigation */}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
