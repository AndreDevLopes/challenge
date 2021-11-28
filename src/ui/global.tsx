import { createGlobalStyle } from 'styled-components';
import fonts from './fonts'

export default createGlobalStyle `

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
}

body{
    font-family: ${ fonts.family }, sans-serif;
    font-size: 14px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
}

html, body, #root{
    height: 100%; 
}
    
`;