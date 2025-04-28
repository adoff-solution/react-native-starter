import React, { createContext, useContext } from 'react';
import { useColorScheme } from 'react-native';

const lightTheme = { background: '#ffffff', text: '#000000' };
const darkTheme = { background: '#000000', text: '#ffffff' };

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
