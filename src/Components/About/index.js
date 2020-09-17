import React, { Component } from 'react';
import {Creative, CreativeInfo, CreativeTitle, Span, InfoDir, InfoDesc, Ancor} from './style.js'




const About = () => {


    return (
        <Creative>
            <div className="container">
                <CreativeInfo>
                    <CreativeTitle><Span>This is</Span> Me</CreativeTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Ancor href="#">Explicabo</Ancor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </CreativeInfo>
            </div>
    </Creative>
    )


}


export default About;
