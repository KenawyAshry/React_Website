import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {PortfolioSection, PortfolioTitle, Span, PortfolioList, PortfolioItem, ImgWrapper, Img, Overlay, OverlaySpan} from './style.js'




const Portfolio = () => {

    const [images , setImages, ] = useState([])

    useEffect ( () => {
        axios.get('js/data.json').then( res => {setImages(res.data.portfolio) } )
    } , [] )

    const portfolioImgs = images.map( (imageItem) => {
        return (
            <ImgWrapper key={imageItem.id}>
            <Img src={imageItem.image} alt="" />
            <Overlay>
                <OverlaySpan>
                    Show Image
                </OverlaySpan>
            </Overlay>
        </ImgWrapper>
        )
    })
    return (
        <PortfolioSection>
        <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
        <PortfolioList>
            <PortfolioItem className="active">All</PortfolioItem>
            <PortfolioItem>HTML</PortfolioItem>
            <PortfolioItem>Photoshop</PortfolioItem>
            <PortfolioItem>Wordpress</PortfolioItem>
            <PortfolioItem>Mobile</PortfolioItem>
        </PortfolioList>
        
        <div className="box">
            {portfolioImgs}
        </div>
        
    </PortfolioSection>
    )


}


export default Portfolio;
