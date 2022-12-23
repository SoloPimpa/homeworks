import React from 'react';
import {NavLink} from "react-router-dom";

function NavigationLink ({path, navigate, label, currentPath}) {
    return (

            <div className="three columns navigation-link">
                <NavLink to={path}>{label}</NavLink></div>


    );
}

export default NavigationLink;