import { createTheme } from '@mui/material/styles';

const lightPalette = {
  primary: {
    main: '#3E5879', 
  },
  secondary: {
    main: '#F5EFE7', 
  },
  background: {
    default: '#F5EFE7', 
    paper: '#D8C4B6', 
  },
  text: {
    primary: '#000000', 
    secondary: '#555555', 
  },
};

const darkPalette = {
  primary: {
    main: '#F5EFE7', 
  },
  secondary: {
    main: '#3E5879', 
  },
  background: {
    default: '#3E5879', 
    paper: '#213555', 
  },
  text: {
    primary: '#fff', 
    secondary: '#a0a0a0', 
  },
};

// Create the theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light', // Set the mode to 'light'
    ...lightPalette, // Add light palette colors
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Set the mode to 'dark'
    ...darkPalette, // Add dark palette colors
  },
});