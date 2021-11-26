import { createGlobalStyle } from 'styled-components';
import fonts from './fonts'

export default createGlobalStyle `

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
    font-family: ${ fonts.family }, sans-serif;
    font-size: 14px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    margin: 0;
   
}

html, body, #root{
    height: 100%;
}
    
`;