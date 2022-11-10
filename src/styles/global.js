import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *, 
    *:after,
    *:before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        list-style-type: none;
        overflow-x: hidden;
        width: 100vw;
        background-color: #dcdcdc;
    }
    h1 {
        font-size: 3rem;
        font-weight: 700;
        line-height: 1;
        text-transform: uppercase;
    }
    h2 {
        font-size: 2.8rem;
        font-weight: 700;
        letter-spacing: 0.8px;
        line-height: 1;
        color: ${({ theme }) => theme.COLORS.GRAY_500};
        position: relative;
        text-transform: uppercase;
        margin-bottom: 15px;
    }

    h2::before {
        content: '';
        height: 2px;
        width: 100%;
        background: ${({ theme }) => theme.COLORS.GRADIENT};
        position: absolute;
        top: 100%;
        left: 0;
        
    }
    h2::after {
        content: '';
        height: 2px;
        width: 50%;
        background: ${({ theme }) => theme.COLORS.GRADIENT};
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: 8px;
    }
    h3 {
        font-size: 2.5rem;
        font-weight: 700;
        letter-spacing: 0.8px;
        line-height: 1;
        background: ${({ theme }) => theme.COLORS.GRADIENT};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    p {
        font-size: 16px;
        letter-spacing: 0.8px;
        line-height: 1.5em;
        font-family: var(--ff-primary);
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        text-align: justify;
        padding-top: 10px;

        > span {
            font-weight: bold;
            font-style: italic;
        }
    }

    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    :root {
        font-size: 62.5% !important;
        --ff-primary: 'Raleway', sans-serif;
    }

    ::selection {
        background:rgba(170, 29, 151, 0.95);
        color: white;
    }
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: linear-gradient(95deg, rgba(170, 54, 124, 0.3), rgba(74, 47, 189, 0.3)); 
    }
    
    ::-webkit-scrollbar-thumb {
        background: linear-gradient(95deg, rgba(170, 54, 124, 0.95), rgba(74, 47, 189, 0.95)); 
        border-radius: 2px;
    }

`