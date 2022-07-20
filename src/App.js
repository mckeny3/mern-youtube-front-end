import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';
import NavBar from './components/NavBar';
import { darkTheme, lightTheme } from './utils/Theme';
import {BrowserRouter,Routes,Route, useLocation} from 'react-router-dom'
import Home from './pages/Home';
import Video from './pages/Video';

import { useContext } from 'react';
import { ThemeContext } from './context';
import SignIn from './pages/signin';
import './App.css';
const Container = styled.div `
display:flex;
font-family:'Poppings';


padding: 0px;
border: 0px;
 `;
const MainContent = styled.div `
background-color: ${({theme})=>theme.bg};
flex:14;
 `;

const Wrapper = styled.div `


`;


function App() {
  const{darkMode,locationPath}=useContext(ThemeContext);

console.log(locationPath.pathname)
    return (
     
      <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
        <Container >
       { locationPath.pathname !=="/video" &&<Menu/>}

            <MainContent>
                <NavBar/>
                { useLocation.pathname}

                <Wrapper>
                  
                
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/video" element={<Video/>}/>
            <Route path="/signin" element={<SignIn/>}/>
     
              </Routes> 
          
            
                </Wrapper>
                </MainContent>

        </Container>
       
        </ThemeProvider>
    );
}

export default App;
