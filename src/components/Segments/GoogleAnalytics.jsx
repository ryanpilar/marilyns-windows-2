import { useEffect } from 'react';

import { useLocation } from "react-router-dom";
import { GA4React } from "react-ga4";

const GoogleAnalytics = () => {

    const location = useLocation();

  useEffect(() => {

    // GA4React.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_MEASUREMENT_ID);


    GA4React.send({ hitType: "pageview", page: location.pathname });

  }, []);

};

export default GoogleAnalytics;
