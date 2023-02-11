import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home2 from './Pages/Home2';
import AboutMe from './Pages/AboutMe';
import Services from './Pages/Services';
import BlogPost from './Segments/BlogPost';
import Blog from './Pages/Blog'
import Gallery22 from './Pages/Gallery22';
import GallerySingle from './Pages/GallerySingle'

import NotFound from './Pages/NotFound';
import TermsOfService from './Pages/TermsOfService';
import PrivacyPolicy from './Pages/PrivacyPolicy';

// import Sitemap from './Sitemap'


const Components = () => {

    const generateRandomKey = () => {
        
        return Math.floor(Math.random() * 4)
    }

        return (
            <BrowserRouter basename="/">
                <div className="page-wraper">

                        <Switch>

                            <Route path='/' exact component={Home2} />
                            <Route path='/aboutme' exact component={AboutMe} />
                            <Route path='/gallery' exact component={Gallery22} />
                            <Route path='/gallery/room/:id' exact component={ () => <GallerySingle  key={generateRandomKey()}

                            /> }  />
                            <Route path='/blog' exact component={Blog} />
                            <Route path='/blog/post/:id' exact component={ () => <BlogPost key={generateRandomKey()}

                            /> } />
                            <Route path='/services' exact component={Services} />
                            <Route path='/terms' exact component={TermsOfService} />
                            <Route path='/privacy' exact component={PrivacyPolicy} />

                            <Route path='*'>
                                <NotFound />
                            </Route>
                            {/* <Route path="/sitemap" component={<Sitemap />} > </Route> */}
                            {/* <Route component={Error} />
                            <Route component={Error} /> */}
                            
                        </Switch>

                </div>
            </BrowserRouter>
        );
    };

export default Components;