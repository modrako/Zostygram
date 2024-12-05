// app/styledlayout.tsx
'use client';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../components/theme"

export function styledlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}