import React from 'react'
import styled from 'styled-components';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import logo from '../assets/logo/logo.png'
import { useContext } from 'react';
import { ThemeContext } from '../context';
import { Link } from 'react-router-dom';


const MainContainer =styled.div`
  position: sticky;
  top: 0;
  border-left:none;

/*   border:0.2px solid  ${({theme})=>theme.soft};
 */

`

const Container = styled.div `
justify-content: space-between;
align-items: center;
background-color: ${({theme})=>theme.bgLighter};
color:white;
padding: 15px 10px;
/* border-bottom:0.5px solid  ${({theme})=>theme.soft};
 */border-left:none;
display: flex;
`;


const Wrapper = styled.div`
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    padding-right: 15px;
    display: flex;
    border:0.5px solid  ${({theme})=>theme.soft};
`
const Button= styled.button`
padding:5px 15px;
background-color: transparent;
border:1px solid #3ea6ff;
color: #3ea6ff;
border-radius: 3px;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
`;

const Input = styled.input`
color: ${({theme})=>theme.text} ;
width: 90%;
background-color:transparent ;
display: flex;
padding: 10px;
font-size: large;
border:none;
outline: none;


`;

const Search =styled.div`
padding: 5px;
border-radius: 3px;
border-right:0.5px solid  ${({theme})=>theme.soft};align-items: center;
width: 100%;
margin-right: 15px;

display: flex;
background-color:transparent;
justify-content: space-between;
`
const ImgWrapper = styled.div`
display:flex;
    align-items: center;
    gap: 5px;
    font-weight: bolder;
    font-size: larger;
    font-family: sans-serif;

`
const Img =styled.img`
height: 30px;
`

export const SecContainer = styled.div `
flex-direction: row;
top:0;
justify-content: space-evenly;
display: flex;
align-items: center;
background-color: ${({theme})=>theme.bgLighter};
padding: 15px 10px;
border:0.2px solid  ${({theme})=>theme.soft};
border-left:none;
`;


export const SecItemWrapper = styled.button`
border-radius: 50px;
font-size: 15px;
font-weight: bold;
font-family: sans-serif;
padding: 10px;
background-color: ${({theme})=>theme.soft};
color: ${({theme})=>theme.text};
border:#ccc;
    

`
export default function NavBar() {
  const{darkMode,locationPath}=useContext(ThemeContext);

  return (
    <MainContainer>
    <Container>
    <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
<ImgWrapper>
    <Img src={logo}/>
    MckenyTube
    
    </ImgWrapper></Link><Wrapper> <Search> <Input placeholder='Search'/> </Search> <SearchOutlinedIcon style={{color:darkMode?'white':'black'}}/>
    
    </Wrapper> 
    <Link to="/signin" style={{color:'color:#3ea6ff',textDecoration:'none'}}>
    <Button>
    <AccountCircleOutlinedIcon />
     SIGN IN
  </Button>
  </Link>
   </Container>
  { locationPath.pathname !=="/video" &&

  <SecContainer>
        <SecItemWrapper style={{background:darkMode?'white':'#202020' ,color:darkMode?'black':'white'}}>All</SecItemWrapper>
        <SecItemWrapper>Live</SecItemWrapper>
        <SecItemWrapper>Music</SecItemWrapper>
        <SecItemWrapper>JavaScript</SecItemWrapper>
        <SecItemWrapper>Cartoon</SecItemWrapper>
        <SecItemWrapper>Mixes</SecItemWrapper>
        <SecItemWrapper>Anime</SecItemWrapper>
        <SecItemWrapper>Coding</SecItemWrapper>
        
        </SecContainer>}
  </MainContainer>
  )
}



