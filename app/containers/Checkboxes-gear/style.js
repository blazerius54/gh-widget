import { injectGlobal } from 'styled-components';

injectGlobal`

.gearboxes-container {
    max-width: 450px;
}

.single-gear {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}

.round-btn {
    -webkit-appearance: none;
    -webkit-border-radius: 100%;
    border: 2px solid gray;
    font-size: 0;
    -webkit-height: 15px;
    height: 20px;
    width: 20px;
    margin: 5px;
    margin-right: 15px;
}

.active-btn {
    background: #77d69c;
    border: none;
    width: 20px;
    height: 20px;
}

@media screen and (min-width : 370px)  {
    .gearboxes-container {
        display: flex;
        justify-content: space-between;
    }
}
`