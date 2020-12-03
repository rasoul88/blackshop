import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Open Sans Condensed';
        padding: 20px 60px;
        background-image:radial-gradient(#2b2b2b, #1d1d1d ,black) ;
        overflow-x: hidden;
        color:white;

        @media screen and (max-width : 800px) {
            padding: 10px;
        }
    }

    a {
        text-decoration: none;
        color:white;
    }

    * {
        box-sizing: border-box;
    }
    
    *:focus { outline: none}
    input, textarea, button, select, a, div { -webkit-tap-highlight-color: rgba(0,0,0,0); }
`