import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTopOnRoute from './Segments/ScrollToTopOnRoute';

import Home2 from "./Pages/Home2";
import Gallery22 from "./Pages/Gallery22";

const AboutMe = lazy(() => import("./Pages/AboutMe"));
const Services = lazy(() => import("./Pages/Services"));
const Blog = lazy(() => import("./Pages/Blog"));
const BlogPost = lazy(() => import("./Pages/BlogPost"));
const GallerySingle = lazy(() => import("./Pages/GallerySingle"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const TermsOfService = lazy(() => import("./Pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));

const Components = () => {

    const generateRandomKey = () => {
        
        return Math.floor(Math.random() * 4)
    }

        return (
            <BrowserRouter basename="/">
                <div className="page-wraper">
                        <ScrollToTopOnRoute />

                        <Suspense fallback={null}>
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
                        </Suspense>

                </div>
            </BrowserRouter>
        );
    };

export default Components;
