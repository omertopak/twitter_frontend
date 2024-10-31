import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeContext = createContext();

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#000000',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

const ThemeProvider = ({ children }) => {
  // Başlangıç değeri localStorage'dan alınıyor, yoksa varsayılan olarak 'light'
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  // darkMode değeri her değiştiğinde localStorage'a kaydediyoruz
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(darkMode));
  }, [darkMode]);

  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
export const useTheme = () => useContext(ThemeContext);
