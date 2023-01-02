import React, { Component } from "react";
import axios from "axios";
import './style.js';
import { SocialMediaSection , Icon, P, Social, Span, SpanInfo } from "./style.js";


class SocialMedia extends Component  {

    state = {
        socialItems: []
    }

    componentDidMount() {
        axios.get('js/data.json').then(res => {
            this.setState({
                socialItems:res.data.social,
            })
        })
    }

    
    render() {
        
        const { socialItems } = this.state;
        
        const socialList = socialItems.map(item => {
            return (
                <Social item={item.id} key={item.id}>
                    <Icon className= {item.icon}></Icon>
                    <P>
                        <Span>{item.title}</Span>
                        <SpanInfo>{item.body}</SpanInfo>
                    </P>
                </Social>
            )
        })


        return (
            <SocialMediaSection>
                {socialList}
            </SocialMediaSection>
            
        );
    }

}

export default SocialMedia;
