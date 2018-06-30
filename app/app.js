import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import 'sanitize.css/sanitize.css';
import { Link } from 'react-router-dom';
import BaseWidget from './containers/Base-widget';
// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Import i18n messages
import { translationMessages } from './i18n';

// Import CSS reset and Global Styles
import './global-styles';
// import bgImg from './images/carbg.jpg';

const MOUNT_NODE = document.getElementById('app');

const render = (messages) => {
  ReactDOM.render(
          <div style={{display: 'flex', flexDirection: 'column'}}>
            {/* <BaseWidget class='Base-screen'/> */}
            {/* <BaseWidget class='Base-screen' darkTheme={true}/> */}
            {/* <BaseWidget class='Base-screen' showBgImg={true}/>  */}
            {/* <BaseWidget class='Base-screen Base-320' gearBox={true} /> */}
            {/* <BaseWidget class='Base-screen Base-480' gearBox={true}/> */}
            {/* <BaseWidget class='Base-screen Base-620' gearBox={true}/> */}
            {/* <BaseWidget class='Base-screen Smallest' smallest={true}/> */}
            <BaseWidget class='Base-screen Base-1280' gearBox={true} />
          </div>
    ,
    MOUNT_NODE
  );
};

if (module.hot) {
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

if (!window.Intl) {
  (new Promise((resolve) => {
    resolve(import('intl'));
  }))
    .then(() => Promise.all([
      import('intl/locale-data/jsonp/en.js'),
    ]))
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
