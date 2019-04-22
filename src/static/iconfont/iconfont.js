import { createGlobalStyle } from "styled-components";
 
export const GlobalIconfontStyle = createGlobalStyle`

@font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1542466251970');
    /* IE9*/
    src: url('./iconfont.eot?t=1542466251970#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'), url('./iconfont.ttf?t=1542466251970') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1542466251970#iconfont') format('svg');
    /* iOS 4.1- */
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`;
/* .icon-icon8:before {
    content: "\e611";
}

.icon-Aa:before {
    content: "\e636";
}

.icon-feather-:before {
    content: "\e603";
} */