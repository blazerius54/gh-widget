import React from 'react';
import logo from '../../images/logo.png';
import longLogo from '../../images/long_logo.svg';
import './styles';

export default function WidgetHeader(props) {
  return (
    <div>
      {
        props.smallest &&
        <header className='Widget-header'>
          <h2 style={props.darkTheme ? { color: 'white' } : null}>Аренда автомобилей</h2>
        </header>
      }
      {
        !props.smallest && props.innerWidth <= 940 &&
        <header className='Widget-header'>
          <h2 style={props.darkTheme ? { color: 'white' } : null}>Аренда автомобилей</h2>
          <img className='headerImg' src={logo} alt="logo" />
        </header>
      }

      {
        !props.smallest && props.innerWidth >= 940 &&
        <header className='Widget-header'>
          <h2 style={props.darkTheme ? { color: 'white' } : null}>Прокат автомобилей</h2>
          <img className='headerLongImg' src={longLogo} alt="logo" />
        </header>
      }
    </div>
  );
}
