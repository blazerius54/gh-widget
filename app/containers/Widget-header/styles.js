import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
    header.Widget-header {
        display: flex;
        justify-content: space-between;
        /* align-content: flex-start; */
    }

    header .headerImg {
        position: relative;
        /* right: 5px; */
        top: -15px;
        max-width: 18%;
    }
    
    header .headerLongImg {
        height: 50px;
    }

    @media screen and (max-width : 200px)  {
        header .headerImg {
            display: none;
        }
    }


    @media screen and (max-width : 220px)  {
        .Widget-header {
            font-size: 80%;
        } 
        header .headerImg {
            position: relative;
            right: -10px;
            max-width: 18%;
        }

    }
      @media screen and (max-width : 1200px)  {
        header .headerLongImg {
            height: 40px;
        }
  }
`;
