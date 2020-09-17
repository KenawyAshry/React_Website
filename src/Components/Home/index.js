import React, { Component } from 'react';
import { HomeHead, HomeInformation, HomeTitle, HomeInfo, HomeDesc, Span, HomeBtn  } from './style'





const Home = () => {


    return (
        <HomeHead>
        <div className="container">
            <HomeInformation>
                <HomeTitle>Kenawy Ashry</HomeTitle>
                <HomeInfo>Creative Director</HomeInfo>
                <HomeDesc>
                    Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                </HomeDesc>
                <HomeBtn>Let's Begin</HomeBtn>
            </HomeInformation>
        </div>
    </HomeHead>
    
    )


}


export default Home;
