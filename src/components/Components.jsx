import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home2 from './Pages/Home2';
import AboutUs from './Pages/AboutUs';
import WorkGrid from './Pages/WorkGrid';

class Components extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <div className="page-wraper">

                        <Switch>

                            <Route path='/' exact component={Home2} />
                            <Route path='/aboutus' exact component={AboutUs} />
                            <Route path='/work-grid' exact component={WorkGrid} />

                            <Route component={Error} />
                            <Route component={Error} />
                            
                        </Switch>

                </div>
            </BrowserRouter>
        );
    };
};

export default Components;