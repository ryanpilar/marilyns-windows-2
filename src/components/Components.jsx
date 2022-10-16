import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Home2 from './Pages/Home2';
import Home3 from './Pages/Home3';
import Home4 from './Pages/Home4';
import Home5 from './Pages/Home5';

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
import PostVideo from './Pages/PostVideo';
import PostRightSidebar from './Pages/PostRightSidebar';

import Accordian from './Pages/Accordian';
import AlertBox from './Pages/AlertBox';
import Button from './Pages/Button';
import Carousel from './Pages/Carousel';
import ClientLogo from './Pages/ClientLogo';
import Counter from './Pages/Counter';
import IconBox from './Pages/IconBox';
import ListGroup from './Pages/ListGroup';
import ModalPopup from './Pages/ModalPopup';
import PricingTable from './Pages/PricingTable';
import Tabs from './Pages/Tabs';
import Table from './Pages/Table';
import Video from './Pages/Video'

class Components extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <div className="page-wraper">
                        <Switch>
                            <Route path='/' exact component={Home2} />


                            

                            <Route path='/aboutus' exact component={AboutUs} />
                            {/* <Route path='/contactus' exact component={ContactUs} /> */}

                            <Route path='/news-grid' exact component={NewsGrid} />
                            <Route path='/news-listing' exact component={NewsListing} />
                            <Route path='/news-masonary' exact component={NewsMasonary} />

                            <Route path='/work-grid' exact component={WorkGrid} />
                            <Route path='/work-masonary' exact component={WorkMasonary} />
                            <Route path='/work-carousel' exact component={WorkCarousel} />
                            <Route path='/project-detail' exact component={ProjectDetail} />

                            <Route path='/post-image' exact component={PostImage} />
                            <Route path='/post-gallery' exact component={PostGallery} />
                            <Route path='/post-video' exact component={PostVideo} />
                            <Route path='/post-right-sidebar' exact component={PostRightSidebar} />

                            <Route path='/accordian' exact component={Accordian} />
                            <Route path='/alertbox' exact component={AlertBox} />
                            <Route path='/button' exact component={Button} />
                            <Route path='/carousel' exact component={Carousel} />
                            <Route path='/logoslider' exact component={ClientLogo} />
                            <Route path='/counter' exact component={Counter} />
                            <Route path='/iconbox' exact component={IconBox} />
                            <Route path='/lisgroup' exact component={ListGroup} />
                            <Route path='/modalpopup' exact component={ModalPopup} />
                            <Route path='/pricingtable' exact component={PricingTable} />
                            <Route path='/tabs' exact component={Tabs} />
                            <Route path='/table' exact component={Table} />
                            <Route path='/video' exact component={Video} />
                            
                            <Route component={Error} />
                            
                            <Route component={Error} />
                        </Switch>
                </div>
            </BrowserRouter>
        );
    };
};

export default Components;