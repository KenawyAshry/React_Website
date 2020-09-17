import React, { Component } from 'react';
import axios from 'axios'
import {SocialMediaSection, SocialPart, Icon, SocialDesc, Span} from './style.js'




class  SocialMedia  extends Component {

    state = {
        social : []
    }

    componentDidMount = () => {
        axios.get('js/data.json').then(res => {this.setState({social: res.data.social}) })
    }

    render(){

        const {social} = this.state;

        const socialParts = social.map( (part) => {
            return(
                <SocialPart className={part.classn} key={part.id}>
                    <Icon className={part.icon}></Icon>
                    <SocialDesc>
                        <Span className="info1">{part.title}</Span>
                        <Span className="info2">{part.body}</Span>
                    </SocialDesc>
                </SocialPart>
            )
        } )
        return(
            <SocialMediaSection>
            
                {socialParts}
            
            </SocialMediaSection>
        
        )
    }

}



export default SocialMedia;
