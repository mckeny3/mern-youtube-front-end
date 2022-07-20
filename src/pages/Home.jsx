import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Cards from '../components/Card.js'
import '../App.css';



const Container = styled.div`
    background-color: ${({theme})=>theme.bg};
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;


`





function Home() {
  return (
<Container>
    
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    
    </Container>)
}

export default Home