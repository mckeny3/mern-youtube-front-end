import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { lightTheme, darkTheme } from "./utils/Theme.js";
import Video from "./pages/Video";
import { useContext } from "react";
import { ThemeContext } from "./context";
import SignIn from "./pages/signin";
import "./App.css";
import { useSelector } from "react-redux";
import AppBar from "./components/appBar";
import { Device } from "./device";
import Footer from "./components/footer";
const Container = styled.div`
  display: flex;
  font-family: "Poppings";
  background-color: ${({ theme }) => theme.bg};

  padding: 0;
  border: 0;
  ${Device.mobile} {
    flex: 1;
  }
`;
const MainContent = styled.div`
  background-color: ${({ theme }) => theme.bg};
  flex: auto;
  min-height: calc(100vh - 42px);

  border: 0;
  padding: 0;
  ${Device.mobile} {
    flex: 1;
    // min-height: calc(100vh - 2vh);
  }
`;

const Wrapper = styled.div``;
function App() {
  const { darkMode, locationPath } = useContext(ThemeContext);

  const path = locationPath.pathname.split("/");
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <div className="App">
        {locationPath.pathname !== "/signin" && <AppBar />}

        <Container>
          {path?.[1] !== "video" && <Menu />}

          <MainContent>
            <Routes>
              <Route
                index="true"
                path="/"
                element={<Home section="rondomVideo" />}
              />
              <Route
                path="/trending"
                element={<Home section="trendingVideo" />}
              />
              <Route
                path="/randomVideos"
                element={<Home section="rondomVideo" />}
              />
              <Route path="subVideos" element={<Home section="subVideos" />} />

              <Route path="video">
                <Route path=":id" element={<Video />} />
              </Route>
              <Route path="/signin" element={<SignIn />} />
            </Routes>
            {/*             <Footer />
             */}{" "}
          </MainContent>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
