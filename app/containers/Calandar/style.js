import { injectGlobal } from 'styled-components';

injectGlobal`
  .Base-calendar {
    /* left: 41.5%; */
    left: 1%;
    top: 130px;
    z-index: 1100;
    max-width: 400px;
    margin-top: 10px;
  }

  .react-calendar {
    width: 100%;
    /* max-width: 600px; */
    border: none;
  }

  .react-calendar__tile {
    border-radius: 0;
  }

  .react-calendar__navigation__label {
    text-align: left;
    font-weight: 600;
    padding-top: 20px;
  }

  .react-calendar__tile--active, .react-calendar__tile--hasActive {
    background: #47b388;
  }

  button.react-calendar__tile--active:enabled:hover, button.react-calendar__tile--active:enabled:focus {
    background: #3c9773;
  }

  .react-calendar__month-view__days__day--weekend {
    color: black;
  }

  .react-calendar__tile--hasActive {
    color: white;
  }

  .react-calendar__navigation__prev-button, .react-calendar__navigation__prev2-button, .react-calendar__navigation__next-button,.react-calendar__navigation__next2-button {
    display: none
  } 

  .react-calendar__month-view__days__day--neighboringMonth {
    color: gray;
  }

  .react-calendar__tile {
      padding-top: 8px;
  }

  button.react-calendar__tile:disabled {
    background-color: transparent;
    color: gray;
  }

  .react-calendar__month-view__weekdays__weekday {
    color: gray;
  }

  @media screen and (min-width : 150px) and (max-width: 220px)  {
    .Base-calendar {
      width: 95%;
    }

    .react-calendar__tile {
      padding: 5px;
    }
  }
  
  @media screen and (max-width : 360px)  {
    .react-calendar {
      width: 100%;
    }

    .react-calendar button {
      font-size: 0.8em;
    }
  }
  
  @media screen and (min-width : 560px)  {
    .Base-calendar {
      position: absolute;
      max-width: 600px;
      top: 140px;
    }
  }

  @media screen and (max-width : 560px)  {
    .Base-calendar {
      margin: 0 auto;
    }
  }

  @media screen and (min-width : 940px)  {
      .Base-calendar {
      left: 41.3%;
      top: 158px;
      z-index: 1100;
      max-width: 600px;
    }
  }

  @media screen and (min-width : 280px) and (max-width : 540px)  {
    .react-calendar__tile {
        padding: 8px;
    }
  }

`;

