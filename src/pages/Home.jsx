import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import "../App.css";
import axios from "axios";
import { Device } from "../device.js";
import VideoCard from "../components/videocard";
import Footer from "../components/footer";
import { getVideos } from "../services/getVideos";
import { useAsync } from "../hooks/useAsync";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  ${Device.mobile} {
    // justify-content: center;
    padding: 0;
    margin: 0;
    //flex-flow: column;
    flex-direction: column;
    // height: 100vh;
    flex-wrap: nowrap;
    align-items: center;
  }
`;
<style>
  .category-section
  {{
    color: "red",
  }}
</style>;

function Home({ section }) {
  const { value, loading, error } = useAsync(getVideos(section), [section]);

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <Container>
        {value &&
          value.map((items) => <VideoCard key={items._id} videoData={items} />)}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
