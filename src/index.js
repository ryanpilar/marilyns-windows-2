import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';

import './index.css';
import App from './App';

import GA4React from 'react-ga4';

//Initialize GA4
GA4React.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_MEASUREMENT_ID);



ReactDOM.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,document.getElementById('root')
);

const SendAnalytics = ()=> {
  GA4React.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals(SendAnalytics);
