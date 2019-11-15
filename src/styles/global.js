import { createGlobalStyle } from 'styled-components';



export default createGlobalStyle `
 @import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
    }
    html, body, #root {
        height: 100%;
    }
    body {
        -webkit-font-smoothing: antialised !important;
    }
    
`