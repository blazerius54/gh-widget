import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
    
    .Widget-result {
        display: flex;
        flex-direction: column;
        /* padding: 0 120px; */
        justify-content: center;
    }

    .result-content {
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
        margin: 0 auto;
        padding: 0 auto;
    }

    .result-column {
        margin: 0 auto;
    }
    
    .single-result-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 300px;
        background-size: 111% 108%;
        background-position: 49% 0%;
        /* width: 180px; */
        flex-basis: 180px;
        margin-right: 10px;
        /* padding-bottom: 20px;
        padding-top: 20px; */
        padding: 10px;
    }

    .single-result-item img {
        max-width: 77%;
    }

    .result-more {
        text-align: center;
        font-weight: 600;
        color: #5BA6F5;
    }

    .car-name {
        font-size: 125%;
        font-weight: 600;
    }

    .main-cost {
        font-size: 150%;
        font-family: 'Paytone One', sans-serif;
        margin: 0;
    }

    .cost-small {
        font-size: 85%;
        margin-top: 15px;
    }

    @media screen and (min-width : 370px)  {
        .single-result-item {
            margin-right: 10px;
        }
    }
    
    @media screen and (max-width : 370px)  {
        .result-cost {
            font-size: 70%;
        }

        .cost-small {
            font-size: 120%;
        }
    }

    @media screen and (max-width : 560px)  {
        .single-result-item {
            margin: 0;
        }
    }

    
    @media screen and (min-width : 200px)  {
        .result-column{
            margin: 0 10%;
        }
    }

    @media screen and (min-width : 280px)  {
        .result-column{
            margin: 0 15%;
        }
    }

    @media screen and (min-width : 370px)  {
        .result-column{
            margin: 0 1%;
            
        }
        
        .single-result-item {
            margin-right: 10px;
        }
    }

    @media screen and (min-width : 440px)  {
        .result-column{
            margin: 0 4%;            
        }
    }
    
    @media screen and (min-width : 470px)  {
        .result-column{
            margin: 0 2%;            
        }
    }
    
    @media screen and (min-width : 560px)  {
        .result-column{
            margin: 0 3%;
        }
    }

    @media screen and (min-width : 620px)  {
        .result-column {
            margin: 0;
        }
        .result-content {
            justify-content: space-between;
        }
    }
    
    @media screen and (min-width : 700px)  {
        .result-column{
            margin: 0 0%;
        }
    }

    @media screen and (min-width : 760px)  {
        .result-column{
            margin: 0 8%;
        }
    }

    @media screen and (min-width : 940px)  {
        .result-column{
            margin: 0;
        }
    }

    @media screen and (min-width : 1240px)  {
        .result-column{
            margin: 0;
        }

        .result-content {
            justify-content: center;
        }

        .car-name {
            font-size: 140%;
        }
    }
    
    @media screen and (min-width : 1260px)  {
        .car-name {
            font-size: 150%;
        }
    }
    @media screen and (min-width : 1550px)  {
        .single-result-item {
            flex-basis: 250px;
        }
    }


`;
