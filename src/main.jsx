import React from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.jsx';
import './portfolio.css';

const theme = createTheme({
  palette: {
    text: { primary: '#121212' },
    background: { default: '#fffdf8', paper: '#fff' },
  },
  shape: { borderRadius: 0 },
  typography: { fontFamily: '"Space Grotesk", Arial, sans-serif' },
  components: {
    MuiButton: { defaultProps: { disableRipple: true } },
    MuiCard: { defaultProps: { elevation: 0 } },
  },
});

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
);

