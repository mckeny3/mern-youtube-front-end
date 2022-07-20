import React, { useContext } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo/logo.png'
import ThumsUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumsDownOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined'
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined'
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined'
import { useLocation } from 'react-router-dom'
import Comment from '../components/comment'
import Comments from '../components/comments'
import Cards from '../components/Card'
import {SecContainer,SecItemWrapper} from '../components/NavBar.jsx'
import { ThemeContext } from '../context'

const Container = styled.div`
display: flex;
padding:20px 20px;

gap: 26px;
`

const Content = styled.div`
flex: 5;
`

const VideoDetails = styled.div`
align-items: center;
display: flex;
justify-content: space-between;
`

const Recommendation = styled.div`
flex: 3;

`

const VideoDiv = styled.div`
display: flex;

`


const Title = styled.h1`
font-size: 18px;
font-weight: 400;
 margin-top: 20px;
 margin-bottom: 10px;
color:${({theme})=>theme.text};
`
const Info = styled.span`
color:${({theme})=>theme.textSoft};
`
const Buttons = styled.div`
gap: 20px;
display: flex;
color:${({theme})=>theme.text};

`
const Button = styled.div`
gap: 5px;
display:flex;
cursor: pointer;
align-items:center;
`
const Hr = styled.hr`

border:0.1px solid ${({theme})=>theme.soft};
 margin: 15px 0px;
 `;


const ChannelContent =styled.div`
border:0.1px solid ${({theme})=>theme.soft};
display: flex;
justify-content: space-between;
  
`
const ChanelPic = styled.img`
border-radius:50%;
margin-top: 10px;
height:36px;
width: 36px;
`
const RightContent = styled.div`
display: flex;
padding: 10px;

`
const LeftContent = styled.div`
gap: 10px;
padding: 2px 6px;

display: flex;
  
`
const LeftButtons = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

padding: 0px 10px;
gap: 0px;
`

const RightButton = styled.button`
background-color: red;
border-radius: 3px;
font-weight: 500;
padding:10px 20px;
height: max-content;
border: none;

color:${({theme})=>theme.text};;
`
const ChanelName = styled.span`

color: ${({theme})=>theme.text};;
font-Weight:500;`
;

const Subscribers = styled.span`
color:${({theme})=>theme.textSoft};
font-size: 12px;
margin-top: 5px;
font-weight: medium;
`

function Video() {
  
  const location = useLocation();
  const{darkMode,locationPath}=useContext(ThemeContext);

console.log(location.pathname)
  return (
<Container>
<Content>
  <VideoDiv>
  <iframe width="640" height="360" src="https://www.youtube.com/embed/WsRBmwNkv3Q" title="MERN Authentication Tutorial #1 - Intro & Starter Project" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </VideoDiv>
      <Title>The baddest mother fucker</Title>
      <VideoDetails>
<Info>567,890 views . jun 24, 2022</Info>
<Buttons>
  <Button>
<ThumsUpOutlinedIcon/> 1k
  </Button>
  <Button>
  <ThumsDownOutlinedIcon/> Dislike

  </Button>
  <Button>
  <ReplyOutlinedIcon/> Share

  </Button>
  <Button>
  <AddTaskOutlinedIcon/>Save

  </Button>
</Buttons>


      </VideoDetails>
      <Hr/>


      <ChannelContent>
        <LeftContent>
      <ChanelPic src={logo}/>
<LeftButtons>


  <ChanelName>
    Mckeny tech
  </ChanelName>
  <Subscribers>
    110k subscribers
  </Subscribers>
</LeftButtons>
</LeftContent>
<RightContent>
  <RightButton>
    SUBSCRIBE
  </RightButton>
</RightContent>
      </ChannelContent>

<Comment/>
<Comments/>
<Comments/>
<Comments/>
<Comments/>
<Comments/>
<Comments/>
<Comments/>
<Comments/>
<Comments/>
<Comments/>
<Comments/>
<Comments/>
<Comments/>
<Comments/>
</Content>
<Recommendation>
<SecContainer>
  
<SecItemWrapper style={{background:darkMode?'white':'#202020' ,color:darkMode?'black':'white'}}>All</SecItemWrapper>
        <SecItemWrapper>Live</SecItemWrapper>
        <SecItemWrapper>Music</SecItemWrapper>
        <SecItemWrapper>JavaScript</SecItemWrapper>
</SecContainer>
  <Cards view="right"/>
  <Cards view="right"/>
  <Cards view="right"/>
  <Cards view="right"/>
  <Cards view="right"/>
  <Cards view="right"/>
  <Cards view="right"/>
  <Cards view="right"/>
  <Cards view="right"/>
  <Cards view="right"/>
  <Cards view="right"/>
  <Cards view="right"/>
  <Cards view="right"/>
  <Cards view="right"/>
  <Cards view="right"/>
  <Cards view="right"/>
  <Cards view="right"/>
  <Cards view="right"/>
  <Cards view="right"/>
  <Cards view="right"/>
  <Cards view="right"/>
  <Cards view="right"/>
  <Cards view="right"/>
  <Cards view="right"/>
  </Recommendation>
</Container>



    )
}

export default Video