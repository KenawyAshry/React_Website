import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Head, Logo, LogoText, UlList, ListItem, Anchor}  from './style'





const Navbar = () => {


    return (

        <Head>
            
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                <UlList>
                    <ListItem><Link to="/" className="a-l">Home</Link></ListItem>
                    <ListItem><Anchor>Work</Anchor></ListItem>
                    <ListItem><Anchor>Portfolio</Anchor></ListItem>
                    <ListItem><Anchor>Resume</Anchor></ListItem>
                    <ListItem><Anchor>About</Anchor></ListItem>
                    <ListItem><Link to="/contact" className="a-l">Contact</Link></ListItem>
                </UlList>
                
            </div>
            
        </Head>
    )


}


export default Navbar;
