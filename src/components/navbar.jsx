import React, { useState } from "react";

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
            <div><a href="/">Home</a></div>
            <div><a href="/resume">Resume</a></div>
        </div>
    );
}