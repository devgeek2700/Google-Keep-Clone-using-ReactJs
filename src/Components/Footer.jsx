import React from "react";
import '../App.css';

const Footer = () => {

    const year = new Date().getFullYear();
    return (
        <>
            <p className="foot_txt">Open-source licenses in {year}</p>
        </>

    );
}

export default Footer;
