import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home2 from './Pages/Home2';
import AboutUs from './Pages/AboutUs';
import Gallery from './Pages/Gallery';
import BlogList from './Segments/BlogList';
import BlogPost from './Segments/BlogPost';
import Blogs from './Pages/Blogs'

class Components extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <div className="page-wraper">

                        <Switch>

                            <Route path='/' exact component={Home2} />
                            <Route path='/aboutme' exact component={AboutUs} />
                            <Route path='/gallery' exact component={Gallery} />
                            <Route path='/blogs' exact component={Blogs} />
                            <Route path='/post/:id' exact component={BlogPost} />
                            {/* <Route path='/blogTest' exact component={Blogs} /> */}

                            <Route component={Error} />
                            <Route component={Error} />
                            
                        </Switch>

                </div>
            </BrowserRouter>
        );
    };
};

export default Components;