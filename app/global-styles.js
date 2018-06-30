import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`

  
  html,
  body {
    height: 100%;
    width: 100%;
  }

 body {
    font-family: 'Montserrat', sans-serif;
  }
 
  input, button:{
    border-radius: 3px;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  button:focus {
    outline:0;
  }

  .Base-screen {
    max-width: 220px;
    background: #f7f7f7;
    padding: 10px;
    box-sizing: border-box;
    background-size: 1400px 806px;
    position: relative;
  }
  
  .Date-input {
    padding: 1px;
    margin-bottom: 5px;
    display: flex;
    margin-bottom: 15px;
  }

  .Date-input input {
    padding: 15px;
    width: 100%;
    background: white;
    font-size: 110%;
    border-radius: 3px;
    z-index: 1000;
    caret-color: #4edba3;
  }

  .Base-calendar {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    /* width:80%;
    height:60%; */
  }
  
  .filter-inputs {
    position: relative;
  }

  .receive-return-container {
    position: absolute; 
    top: 53%;
    left: 0%;
    right: 0%;
    background-color: white;
    padding: 0 10px;
    font-family: 'Paytone One', sans-serif;
    font-weight: 600;
    z-index: 2000;
    max-width: 219px;
    /* border: 2px solid gray; */
    border-bottom: none;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    font-size: 80%;
  }
  
  .options {
    display: flex;
    flex-direction: column;
  }

  .options select {
    padding: 15px;
    background: white;
    font-size: 140%;
    margin-bottom: 10px;
  }

  .srh-btn {
    background: #5BA6F5;
    padding: 12px;
    color: white;
    font-weight: 600;
    z-index: 1000;
    border-radius: 3px;    
  }

  .Smallest {
    max-width: 200px;
  }

  .Base-smallest {
    max-width: 220px;
  }

  .Base-320 {
    max-width: 370px;
    /* border: 15px solid #555555; */
    box-sizing: border-box;
  }

  .Base-480 {
    padding: 30px;
    max-width: 560px;
    box-sizing: border-box;
  }

  .Base-620 {
    padding: 30px;
    max-width: 940px;
    box-sizing: border-box;
  }

  .Base-1280 {
    padding: 30px;
    max-width: 100%;
    /* box-sizing: border-box; */
  }

  @media screen and (max-width : 220px)  {
    .Base-screen {
      max-width: 220px;
      padding: 5px;
    }
  }

  @media screen and (max-width : 370px)  {
    .Base-screen {
      padding: 5px;
      
      /* padding-top: 5px; */
    }
  }

  @media screen and (min-width : 370px)  {
    .Base-1280 {
      padding: 10px 5px;
    }
  }

  @media screen and (min-width : 470px)  {
    .Base-1280 {
      padding: 10px 5px;
    }
  }
  
  @media screen and (max-width : 560px)  {
    .SelectNpm {
      margin-bottom: 10px;
      
    }
  }
  
  @media screen and (min-width : 320px)  {
    .Base-screen:not(.Smallest) {
      border: 15px solid #555555;
    }  
  }

  @media screen and (max-width : 320px)  { 
    .Date-input {
      font-size: 85%;
    }
   
  }

  @media screen and (min-width : 560px)  {
  .receive-return-container {
    position: absolute; 
    top: 91%;
    left: 0%;
    right: 64.9%;
    background-color: white;
    padding: 0 10px;
    font-family: 'Paytone One', sans-serif;
    font-weight: 600;
    font-size: 100%;
    width: 219px;    
  }

    .filter-inputs {
      display: flex;
      justify-content: center;
      padding-bottom: 15px;
    }

    .filter-inputs *  {
      margin-right: 4px;
      flex: 1 0 30%;
    }

    .filter-inputs .srh-btn {
      max-width: 25%;
    }

    .Date-input {
      margin: 0;
    }
  }
  
  @media screen and (min-width : 940px)  {
    .Base-1280 {
      padding: 30px 4%;
    }
  }

  @media screen and (min-width : 1024px)  {
    .Base-1280 {
      padding: 30px 5%;
    }
  }

  @media screen and (min-width : 1085px)  {
    .Base-1280 {
      padding: 30px 11%;
    }
  }

  @media screen and (min-width : 1400px)  {
    .Base-1280 {
      padding: 30px 15%;
    }
  }

  @media screen and (min-width : 1490px)  {
    .Base-1280 {
      padding: 30px 17%;
    }
  }

  @media screen and (min-width : 1560px)  {
    .Base-1280 {
      padding: 30px 20%;
    }
  }

  /* @media screen and (min-width : 1560px)  {
    .Base-1280 {
      padding: 30px 25%;
    }
  } */
`;
