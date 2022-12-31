import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home2 from './Pages/Home2';
import AboutMe from './Pages/AboutMe';
import Services from './Pages/Services';
import BlogPost from './Segments/BlogPost';
import Blog from './Pages/Blog'
import Gallery22 from './Pages/Gallery22';

import NotFound from './Pages/NotFound';

class Components extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <div className="page-wraper">

                        <Switch>

                            <Route path='/' exact component={Home2} />
                            <Route path='/aboutme' exact component={AboutMe} />
                            <Route path='/gallery' exact component={Gallery22} />
                            <Route path='/blog' exact component={Blog} />
                            <Route path='/post/:id' exact component={BlogPost} />
                            <Route path='/services' exact component={Services} />

                            <Route path='*'>
                                <NotFound />
                            </Route>

                            {/* <Route component={Error} />
                            <Route component={Error} /> */}
                            
                        </Switch>

                </div>
            </BrowserRouter>
        );
    };
};

export default Components;