import { useEffect } from 'react';

import { useLocation } from "react-router-dom";
import { GA4React } from "react-ga4";

const GoogleAnalytics = () => {

  useEffect(() => {

    GA4React.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_MEASUREMENT_ID);

    const location = useLocation();

    GA4React.send({ hitType: "pageview", page: location.pathname });

  }, []);

};

export default GoogleAnalytics;
