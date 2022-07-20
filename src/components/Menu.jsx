import React from 'react'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home'
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useContext } from 'react';
import { ThemeContext } from '../context';


const Container = styled.div `
flex:1;
justify-content: center;
align-items: center;
background-color: ${({theme})=>theme.bgLighter};
height:100vh;
color: ${({theme})=>theme.text};
position: sticky;
top:0;
padding-top: 20px;
`;


const Wrapper = styled.div`
    margin-top: 18px;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    align-items: center;
    
`



const Button= styled.button`
padding:5px 15px;
background-color: transparent;
border:1px solid #3ea6ff;
color: #3ea6ff;
margin-top: 10px;
border-radius: 3px;
cursor: pointer;
gap: 5px;
`;



const H1 = styled.span`
padding: 2px;
font-size: 12px;
`
const Item = styled.div`
display: flex;
flex-direction: column;
    padding:14px  0px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    &&:hover{
        background-color: ${({theme})=>theme.soft};

    }

`

function Menu() {
    const{darkMode,setDarkMode}=useContext(ThemeContext)
    return (

       
        <Container>
            
           
            
<Item><MenuOutlinedIcon/></Item>
            <Item>
            <HomeIcon/>
            <H1>Home</H1>
            </Item>

            <Item>
            <ExploreOutlinedIcon/>
            <H1>Explore</H1>
            </Item>
            <Item>
            <SubscriptionsOutlinedIcon/><H1>Subsriptions</H1>
            </Item>
            <Item>

            <LibraryMusicOutlinedIcon/><H1>Library</H1>
            </Item>
            <Item>
            <HistoryOutlinedIcon/><H1>History</H1>
            </Item>

        <Item>
          <SettingsOutlinedIcon />
         <H1>Settings</H1> 
        </Item>
       
<Item>
        <Button onClick={()=>setDarkMode(!darkMode)}>
              Change theme
            </Button>
            </Item>
            
            
        </Container>
    )
}

export default Menu
