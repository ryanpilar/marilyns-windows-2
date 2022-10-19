import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home2 from './Pages/Home2';

import AboutUs from './Pages/AboutUs';

import NewsGrid from './Pages/NewsGrid';
import NewsListing from './Pages/NewsListing';
import NewsMasonary from './Pages/NewsMasonary';

import WorkGrid from './Pages/WorkGrid';
import WorkMasonary from './Pages/WorkMasonary';
import WorkCarousel from './Pages/WorkCarousel';
import ProjectDetail from './Pages/ProjectDetail';

import PostImage from './Pages/PostImage';
import PostGallery from './Pages/PostGallery';
import PostRightSidebar from './Pages/PostRightSidebar';

import Services from './Segments/Services';

class Components extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <div className="page-wraper">
                        <Switch>
                            <Route path='/' exact component={Home2} />
                            <Route path='/aboutus' exact component={AboutUs} />

                            <Route path='/news-grid' exact component={NewsGrid} />
                            <Route path='/news-listing' exact component={NewsListing} />
                            <Route path='/news-masonary' exact component={NewsMasonary} />

                            <Route path='/work-grid' exact component={WorkGrid} />
                            <Route path='/work-masonary' exact component={WorkMasonary} />
                            <Route path='/work-carousel' exact component={WorkCarousel} />
                            <Route path='/project-detail' exact component={ProjectDetail} />

                            <Route path='/post-image' exact component={PostImage} />
                            <Route path='/post-gallery' exact component={PostGallery} />
                            <Route path='/post-right-sidebar' exact component={PostRightSidebar} />

                            <Route path='/services' component={Home2} element={<Services />} />


                            <Route component={Error} />
                            
                            <Route component={Error} />
                        </Switch>
                </div>
            </BrowserRouter>
        );
    };
};

export default Components;