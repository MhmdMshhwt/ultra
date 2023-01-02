import React, {useState, useEffect} from "react";
import './style.js';
import { ImageOverlay, ImageWrapper, OverlaySpan, PortfolioItem, PortfolioList, PortfolioSection, PortfolioTitle, Span, Image } from "./style.js";
import axios from "axios";

const Portfolio = () => {

    const [ images, setImages ] = useState([]);

    useEffect(() => {
        axios.get('js/data.json').then(res => {setImages(res.data.portfolio)})
    }, [])

    const portfolioList = images.map((imageItem) => {
        return (
            <ImageWrapper key={imageItem.id}>
                <Image src={imageItem.image} alt="" />
                <ImageOverlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </ImageOverlay>
            </ImageWrapper>
                
        )
    })


    return (
        <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active >All</PortfolioItem>
                <PortfolioItem >HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className="box">
                
                {portfolioList}
                
                
            </div>
            
        </PortfolioSection>
    );
}

export default Portfolio;
