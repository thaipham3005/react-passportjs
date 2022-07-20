import React from 'react'
import { AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin, AiFillYoutube, AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import styled from 'styled-components'
import ExternalLink from './Link/ExternalLink'


const Container = styled.div`
    position: fixed;
    right: -30px;    
    top: 30%;
    width: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 5px;
    gap: 5px;
    background-color: #FFFFFF;
    box-shadow: 0 0 3px 3px rgba(0,0,0,.3);
    border-radius: 5px; 
    transition: all .75s ease-out;
    &:hover {
        transform: translateX(-30px);
    }

`
const Socials = () => {
    return (
        <Container>
            <ExternalLink to='https://www.facebook.com/thaipham3005' targetBlank>
                <AiFillFacebook size={30} color='#1877F2' />
            </ExternalLink>
            <ExternalLink to='https://www.twitter.com/thaipham3005' targetBlank>
                <AiFillTwitterSquare size={30} color='#1DA1F2' />
            </ExternalLink>
            <ExternalLink to='https://www.linkedin.com/in/thaipham3005/' targetBlank>
                <AiFillLinkedin size={30} color='#0A66C2' />
            </ExternalLink>
            <ExternalLink to='https://www.youtube.com/c/NymthPham/videos' targetBlank>
                <AiFillYoutube size={30} color='#CD201F' />
            </ExternalLink>
            <ExternalLink to='https://github.com/thaipham3005' targetBlank>
                <AiFillGithub size={30} color='#252525' />
            </ExternalLink>
            <ExternalLink to='https://www.instagram.com/nymth87/' targetBlank>
                <AiFillInstagram size={30} color='#E4305F' />
            </ExternalLink>
        </Container>
    )
}

export default Socials