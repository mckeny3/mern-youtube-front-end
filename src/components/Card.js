import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import logo from '../assets/logo/logo.png'

const Container = styled.div `
    cursor: pointer;

   display: ${props => props.view==='right'&&"flex"};

width:${props => props.view !=='right'&&'360px'};
margin-bottom:${props => props.view==='right'?'10px':'45px'};
gap:${props => props.view ==='right'&&"10px"};
`


const DetailsCard = styled.div `
    cursor: pointer;
margin-top: ${props => props.view !=='right'&&"16px"};
gap: 12px;
    display: flex;
    flex:${props => props.view ==='right'&&"1"};
`


const ProfileDiv = styled.img `
    cursor: pointer;
height: 36px;
width: 36px;
border-radius: 50%;
margin-top:10px;`;

const DetailsContents = styled.div `
`

const VideoTitle = styled.h1 `

    cursor: pointer;
font-size: 16px;
font-weight: 500;
color:${
    ({theme}) => theme.text
};
 
`
const VideoOwner = styled.h2 `
margin: 9px 0px;
    cursor: pointer;
font-size: 14px;
color:${
    ({theme}) => theme.textSoft
};
`
const VideoStatsDiv = styled.div `
    cursor: pointer;
font-size: 14px;
color:${
    ({theme}) => theme.textSoft
};
`


const Image = styled.img `
    flex:${props => props.view ==='right'&&"1"};

width:100%;
height: ${props => props.view==='right'?'120px':'202px'};
background-color: blue;
`
function Cards({view}) {
    return (
      <Link to="video" style={{textDecoration:"none"}}>
        <Container view={view}>


            <Image  view={view} src={logo}/>

            <DetailsCard view={view}>
            {view !=="right"&&
                <ProfileDiv src="https://scontent.ffar1-2.fna.fbcdn.net/v/t39.30808-6/288176920_8334208876605140_6123667766418544192_n.jpg?stp=dst-jpg_s600x600&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=lSx1FvEP-iEAX-pC3I1&_nc_ht=scontent.ffar1-2.fna&oh=00_AT8ijTr3sTGsmwJx5_ItggBRgk8b2XtBveSHKorbXmhOnQ&oe=62DA6834"/>
                }
                <DetailsContents  view={view}>
                    <VideoTitle>Learn hot to hack</VideoTitle>
                    <VideoOwner>Mckeny</VideoOwner>
                    <VideoStatsDiv>200,400 views . 1 day ago</VideoStatsDiv>


                </DetailsContents>
            </DetailsCard>
        </Container>
        </Link>
    )
}

export default Cards
