import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-color-2: #191D2B;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --border-color: #2e344e;
    --white-color: #FFF;
    --font-dark-color: #313131;
    --font-light-color: #a4acc4;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383833;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 1.2rem;
        text-decoration: none;
        list-style: none;
        font-family: 'Nunito', sans-serif;
        font-size: 1.2rem;
    }
    body {
        background-color: var(--background-dark-color);
        color: var(--font-light-color);
    }
    a {
        font-family: inherit;
        color: inherit;
        font-size: 1rem;
        text-decoration: none;
    }
    a:hover {
        color: var(--font-light-color);
    }
    h1 {
        font-size: 4rem;
        color: var(--white-color);
        span {
            font-size: 4rem;
            color: var(--primary-color)
        }
    }
`;

export default GlobalStyle;