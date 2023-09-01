import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.colors.basetext};
    
  }

  button{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: 1s;
    background-color: transparent;
    svg{
      width: 1.5rem;
      height: 1.5rem;
      color: #617480;

    } 
    &:active{
      transform: scale(0.9);
    }
  }


`
