import React, { useState } from "react";
import { Link } from 'react-router-dom';

import '../css/navbar.scss';

export default function NavBar() {
    const [ pickColor, setPickColor ] = useState('#00000000');

    window.onscroll = (e) => {
        var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

        if (scrollTop > 0) {
            setPickColor('#0000004c')
        } else {
            setPickColor('#00000000')
        }
    }

    return (
        <div className="navbar" style={{backgroundColor: pickColor}}>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/projects">Projects</Link></div>
            <div><Link to="/blog">Blog</Link></div>
        </div>
    );
}