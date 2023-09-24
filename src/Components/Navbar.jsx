import React from "react";
import logo from "../Images/keep_icon.png"
import custimg from "../Images/pic1.png"
import '../App.css';

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <i class="fa-solid fa-bars"></i>
                    <img src={logo} width="50px" height="45px" className="keep_img" alt="logo" />
                    {/* <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-keep-icon.png" width="50px" height="45px" className="keep_img" /> */}
                    <a class="navbar-brand h1 m-2" href="#">Keep</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <form className="search_box">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input class="form-control me-4 border-0" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <i class="fa-solid fa-rotate-right"></i>
                        <i class="fa-solid fa-bars-progress"></i>
                        <i class="fa-solid fa-gear"></i>
                        <i class="fa-solid fa-pen"></i>
                        <img src={custimg} width="30px" height="30px" className="custimg" alt="img" />
                    </div>
                </div>
            </nav>
        </>

    );
}

export default Navbar;
