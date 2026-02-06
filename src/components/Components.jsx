import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTopOnRoute from './Segments/ScrollToTopOnRoute';

import Home2 from './Pages/Home2';
import AboutMe from './Pages/AboutMe';
import Services from './Pages/Services';
import Blog from './Pages/Blog'
import BlogPost from './Pages/BlogPost';
import Gallery22 from './Pages/Gallery22';
import GallerySingle from './Pages/GallerySingle'

import NotFound from './Pages/NotFound';
import TermsOfService from './Pages/TermsOfService';
import PrivacyPolicy from './Pages/PrivacyPolicy';

const Components = () => {

    const generateRandomKey = () => {
        
        return Math.floor(Math.random() * 4)
    }

        return (
            <BrowserRouter basename="/">
                <div className="page-wraper">
                        <ScrollToTopOnRoute />

                        <Switch>

                            <Route path='/' exact component={Home2} 
                                sitemapIndex='true'
                                changefreq='weekly'
                                priority='1'
                            />
                            <Route path='/aboutme' exact component={AboutMe} 
                                sitemapIndex='true'
                                changefreq='weekly'
                                priority='0.7'
                            />
                            <Route path='/gallery' exact component={Gallery22} 
                                sitemapIndex='true'
                                changefreq='weekly'
                                priority='0.9'
                            />
                            <Route path='/gallery/room/:slug' exact component={ () => <GallerySingle  key={generateRandomKey()}

                            /> }  />
                            <Route path='/blog' exact component={Blog} 
                                sitemapIndex='true'
                                changefreq='weekly'
                                priority='0.8'
                            />
                            <Route path='/blog/post/:slug' exact component={ () => <BlogPost key={generateRandomKey()}

                            /> } />
                            <Route path='/services' exact component={Services} 
                                sitemapIndex='true'
                                changefreq='weekly'
                                priority='0.9'
                            />
                            <Route path='/terms' exact component={TermsOfService} 
                                sitemapIndex='true'
                                changefreq='yearly'
                                priority='0.5'
                            />
                            <Route path='/privacy' exact component={PrivacyPolicy} 
                                sitemapIndex='true'
                                changefreq='yearly'
                                priority='0.5'
                            />

                            <Route path='*'>
                                <NotFound 
                                    sitemapIndex='true'
                                    changefreq='yearly'
                                    priority='0.5'
                                />
                            </Route>

                            {/* <Route component={Error} />
                            <Route component={Error} /> */}
                            
                        </Switch>

                </div>
            </BrowserRouter>
        );
    };

export default Components;
