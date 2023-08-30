import 'styled-components';


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;


    colors: {
      background:string
      basetext:string
      basePrice:string
      baseTitle:string
      borderFilter:string
      fontSize:{
        xs: string
        sm: string
        md: string 
        lg: string
      }
    };
  }
}