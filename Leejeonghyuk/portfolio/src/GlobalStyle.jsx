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

    html {
        scroll-behavior: smooth;
    }

    .fade-in {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }

    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .slide-in-left {
        opacity: 0;
        transform: translateX(-100px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }

    .slide-in-left.visible {
        opacity: 1;
        transform: translateX(0);
    }

    .slide-in-right {
        opacity: 0;
        transform: translateX(100px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }

    .slide-in-right.visible {
        opacity: 1;
        transform: translateX(0);
    }

    .scale-in {
        opacity: 0;
        transform: scale(0.8);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }

    .scale-in.visible {
        opacity: 1;
        transform: scale(1);
    }
`;
