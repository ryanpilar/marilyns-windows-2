import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals.js';
import { HelmetProvider } from 'react-helmet-async';

import './index.css';
import App from './App.js';

import GA4React from 'react-ga4';

//Initialize GA4
GA4React.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_MEASUREMENT_ID);

ReactDOM.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,document.getElementById('root')
);



reportWebVitals();
