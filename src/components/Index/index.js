import React from "react";
import Home from "../Home";
import Portfolio from "../Portfolio";
import Profile from "../Profile";
import Work from "../Work";
import About from "../About";
import SocialMedia from "../SocialMedia";
import Footer from "../Footer";


const Index = () => {
    return (
        <div>
            <Home />
            <Work />
            <Portfolio />
            <Profile />
            <About />
            <SocialMedia />
            <Footer/>
        </div>
    );
}

export default Index;
