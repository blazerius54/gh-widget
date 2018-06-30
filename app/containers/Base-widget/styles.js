import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
    
    .Base-screen header {
        display: flex;
    }

    .Base-screen header img {
        align-self: center;
    }

    .invisible {
        display: none
    }
    
    .visible {
        display: block;
        background-color: gray;
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        z-index: 999;
        opacity: 0.7
    }

    .option-label {
        font-weight: 600;
        background: white;
    }

    .option-label:hover {
        color: #47b388;
    }
`;
