import React from 'react';
import { NavLink } from 'react-router-dom';

class SidebarNav extends React.Component {
    render() {
        return (
            <>
                <div className="col-md-3 col-sm-3">
                    <div className="widget bg-white  widget_services">

                        <ul>
                            <li><NavLink to={"/carousel"}>Carousel</NavLink></li>
                            <li><NavLink to={"/logoslider"}>Client logo slider</NavLink></li>
                            <li><NavLink to={"/counter"}>Counter</NavLink></li>
                            <li><NavLink to={"/iconbox"}>Icon box style</NavLink></li>
                            <li><NavLink to={"/lisgroup"}>List group</NavLink></li>
                            <li><NavLink to={"/modalpopup"}>Modal popup</NavLink></li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
};

export default SidebarNav;