import { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider,  } from 'styled-components';


const myTheme: DefaultTheme = {
  borderRadius: '5px',


  colors: {
    background: "#F0F0F5",
    basetext:"#737380",
    basePrice:"#09090A",
    baseTitle:"#5D5D6D",
    borderFilter:"#FFA585",
    fontSize:{
        xs: '14px',
        sm: '16px',
        md: '32px',
        lg: '40px',
      }

  },
};

interface Theme {
    children:ReactNode
}
export default function Theme({children}:Theme) {
  return (
    <ThemeProvider theme={myTheme}>
        {children}
    </ThemeProvider>
  );
}

