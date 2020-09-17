import React, { Component } from 'react';
import axios from 'axios'
import {WorkHead , WorkTitle, Span, WorkPart, Icon, PartTitle,Line, PartDesc } from './style.js'



class Work extends Component {
    state = {
        works : []
    }

    componentDidMount = () => {
        axios.get('js/data.json').then( res => {this.setState({works: res.data.works}) } )
    }


    render() {

        const {works} = this.state;

        const worksList = works.map( (workItem) => {
                return(
                    <WorkPart first={workItem.id} key={workItem.id}>
                        <Icon className={workItem.icon_name}></Icon>
                        <PartTitle>{workItem.title}</PartTitle>
                        <Line />
                        <PartDesc>
                            {workItem.body}
                        </PartDesc>
                    </WorkPart>
                )
        })
        return (
            <WorkHead>
            <div className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {worksList}
                
            </div>
        </WorkHead>
        )
    }
}


export default Work;
