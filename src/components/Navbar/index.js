import React from "react";
import { Link } from "react-router-dom";
import './style.js'
import { Anchor, ListItem, Logo, LogoText, NavbarSection, UlList } from "./style.js";

const Navbar = () => {
    return (
        <NavbarSection>
            <div className="container">
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                
                <UlList>
                    <ListItem className="list-item"><Link className="Link" to="/">Home</Link></ListItem>
                    <ListItem className="list-item"><Anchor href="#">Work</Anchor></ListItem>
                    <ListItem className="list-item"><Anchor href="#">Portfolio</Anchor></ListItem>
                    <ListItem className="list-item"><Anchor href="#">Resume</Anchor></ListItem>
                    <ListItem className="list-item"><Anchor href="#">About</Anchor></ListItem>
                    <ListItem className="list-item"><Link className="Link" to="/contact">Contact</Link></ListItem>
                </UlList>
                
            </div>
            
        </NavbarSection>
    );
}

export default Navbar;
