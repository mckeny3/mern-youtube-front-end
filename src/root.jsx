import React from 'react'
import styled from 'styled-components';
import Menu from './components/Menu';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import './App.css';


const Container = styled.div `
display:flex;

padding: 0px;
border: 0px;
 `;
const MainContent = styled.div `
background-color: ${({theme})=>theme.bg};
flex:14;
 `;

const Wrapper = styled.div `


`;


function Root() {

    return (
      <Container >


<Menu />

            <MainContent>
                <NavBar/>
               

                <Wrapper>
                <Home/>


                </Wrapper>
                </MainContent>

       

        </Container>

    );
}

export default Root;
