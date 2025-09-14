import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard';
        src: url("./src/fonts/Pretendard-SemiBold.woff") format('woff'),
            url("./src/fonts/Pretendard-SemiBold.woff2") format()('woff2');
        font-style: normal;
    }


    *, html, body {
        margin: 0;
        padding: 0;
        font-family: 'Pretendard';
    }
`;
