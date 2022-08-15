import React, {useState} from 'react'
import styled from 'styled-components';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import logo from '../assets/logo/logo.png'
import {useContext} from 'react';
import {ThemeContext} from '../context';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import {logOut} from '../redux/userSlice';
import {
    AppBar,
    Box,
    Menu,
    MenuItem,
    MenuList,
    Stack,
    Toolbar,
    Typography
} from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Boxm = styled.div `
  position: sticky;
  top: 0;
  border-left:none;

/*   border:0.2px solid  ${
    ({theme}) => theme.soft
};
 */

`

const Container = styled.div `
justify-content: space-between;
align-items: center;
background-color: ${
    ({theme}) => theme.bgLighter
};
color:white;
padding: 15px 10px;
/* border-bottom:0.5px solid  ${
    ({theme}) => theme.soft
};
 */border-left:none;
display: flex;

`;


const Wrapper = styled.div `
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    padding-right: 15px;
    display: flex;
    border:0.5px solid  ${
    ({theme}) => theme.soft
};

`
const Button = styled.button `
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

const Input = styled.input `
color: ${
    ({theme}) => theme.text
} ;
width: 90%;
background-color:transparent ;
display: flex;
padding: 10px;
font-size: large;
border:none;
outline: none;



`;

const Search = styled.div `
padding: 5px;
border-radius: 3px;
border-right:0.5px solid  ${
    ({theme}) => theme.soft
};align-items: center;
width: 90%;
margin-right: 20px;

display: flex;
background-color:transparent;
justify-content: space-between;
`
const ImgWrapper = styled.div `
display:flex;
    align-items: center;
    gap: 5px;
    font-weight: bolder;
    font-size: larger;
    font-family: sans-serif;

`
const Img = styled.img `
height: 30px;
`

export const SecContainer = styled.div `
flex-direction: row;
top:0;
justify-content: space-evenly;
display: flex;
align-items: center;
background-color: ${
    ({theme}) => theme.bgLighter
};
padding: 15px 10px;
border:0.2px solid  ${
    ({theme}) => theme.soft
};
border-left:none;
`;


export const SecItemWrapper = styled.button `
border-radius: 50px;
font-size: 15px;
font-weight: bold;
font-family: sans-serif;
padding: 10px;
background-color: ${
    ({theme}) => theme.soft
};
color: ${
    ({theme}) => theme.text
};
border:#ccc;
    

`

export const AppName = styled.h1 `
  font-size: 22px;
  font-family: "Oswald",sans-serif;
  font-weight:bold;
  letter-spacing: -1px;
`;

export const UserContainer = styled.div `
display: flex;
align-items: center;

gap: 20px;
right: 0px;
color:${
    ({theme}) => theme.text
};
`
export const Avatar = styled.img `
height: 32px;
width: 32px;
border-radius: 50%;
background-color:${
    ({theme}) => theme.soft
};

`;
const MenuListt = styled.div ` height:200px;
width:25%;
position: absolute;
height: 700px;
right: 15px;
top: 63px;
border:${
    ({theme}) => theme.text
};
padding: 10px;

background-color:${
    ({theme}) => theme.soft
};
`;

export const Hr = styled.div `

border:1px solid ${
    ({theme}) => theme.bgLighter
};
  height: 1px;
`;

export const DropdownWrapper = styled.div `
flex-direction: column;
opacity:0.8;

    display: flex;
height: 95%;
    gap:10px;
`;
export const MenuItemm = styled.div `
  color:${
    ({theme}) => theme.text
};
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 10px;

`;
export const DropDownH1 = styled.h1 `
  
`;


export const CloseDropDownContainer = styled.div `
    display: flex;
    justify-content: center;
    font-size: 25px;

`;

export const closeButton = styled.button `
  border:1px solid red;
  border-radius: 50%;
  background-color: red;
`;

export default function NavBar() {
    const {darkMode, locationPath} = useContext(ThemeContext);
    const {currentUser} = useSelector((state) => state.authUser)
    const [dropDown, setDropDown] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate


    const handleLogout = () => {

        dispatch(logOut())
        navigate('/')
    }


    const handleCloseDropDown = () => {
        setDropDown(!dropDown)
        console.log(dropDown)

    }

    // //////////////MENU OPTIONS

    const [open, setOpen] = useState(true)
    const [anchor, setAnchor] = useState(null)

    const handleAnchorElm = () => {}
    const handleButton = (e) => {

        setAnchor(e.currentTarget)
        console.log(anchor)
    }

    // ///////////////MATERIAL UI

    // ////youtube logo
 


    return (


        <AppBar>
         
        </AppBar>


    //     <Box position='sticky' top={0}>
    //       {dropDown&&

    //       <Menu anchorEl={anchor} open={true} onClose={setAnchor=null}>
    //          <MenuItem  ><Avatar src={currentUser&&currentUser.image}/> {currentUser&&currentUser.userName}</MenuItem>
    //           <MenuItem onClick={()=>handleLogout() }>Sign out</MenuItem>
    //       {/* <CloseDropDownContainer><closeButton onClick={()=>handleCloseDropDown()}>X</closeButton> </CloseDropDownContainer> */}
    //        </Menu> }
    //     <Container>
    //     <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
    // <ImgWrapper>
    //     <Img src={logo}/><AppName>
    //     YouTube

    //     </AppName>

    //     </ImgWrapper></Link><Wrapper> <Search> <Input placeholder='Search'/> </Search> <SearchOutlinedIcon style={{color:darkMode?'white':'black'}}/>

    //     </Wrapper>
    //     { currentUser?(<UserContainer><VideoCallOutlinedIcon/> <NotificationsNoneOutlinedIcon/><Avatar onClick={(e)=>handleButton} src={currentUser.image}/></UserContainer> ):<Link to="/signin" style={{color:'color:#3ea6ff',textDecoration:'none'}}>
    //     <Button>
    //     <AccountCircleOutlinedIcon />
    //      SIGN IN
    // </Button>
    // </Link>}
    //    </Container>
    // { locationPath.pathname !=="/video" &&

    // <SecContainer>
    //         <SecItemWrapper style={{background:darkMode?'white':'#202020' ,color:darkMode?'black':'white'}}>All</SecItemWrapper>
    //         <SecItemWrapper>Live</SecItemWrapper>
    //         <SecItemWrapper>Music</SecItemWrapper>
    //         <SecItemWrapper>JavaScript</SecItemWrapper>
    //         <SecItemWrapper>Cartoon</SecItemWrapper>
    //         <SecItemWrapper>Mixes</SecItemWrapper>
    //         <SecItemWrapper>Anime</SecItemWrapper>
    //         <SecItemWrapper>Coding</SecItemWrapper>

    //         </SecContainer>}
    // </Box>
    )
}
