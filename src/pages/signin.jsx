import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Links,
  Link,
  Container,
  Wrapper,
  Title,
  Subtitle,
  Button,
  Input,
  More,
} from "../components/Signin.Styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFail,
  logOut,
  loginStart,
  setUser,
  authUser,
} from "../redux/userSlice.js";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
export default function SignIn() {
  const [, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.reducer.authUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", {
        userName: name,
        password: password,
      });
      if (res) {
        dispatch(setUser(res.data));
        return history("/");
      } else {
        throw Error("from throw code", res.error);
      }
    } catch (error) {
      dispatch(loginFail(error));
      console.log(error.message);
    }
  };
  console.log("user", currentUser);
  console.log(process.env.GOOGLE_CID);

  ////////GPPGLE SIGN IN

  const handleGoogleSignin = async (response) => {
    const decode = jwt_decode(response.credential);
    dispatch(loginStart());

    try {
      const request = await axios.post("/auth/googlesignin", {
        email: decode.email,
        given_name: decode.given_name,
        picture: decode.picture,
      });
      dispatch(setUser(request.data));
      history("/");

      console.log("data return from api", request.data);
    } catch (error) {
      dispatch(loginFail(error));
    }
  };

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CID,
      callback: handleGoogleSignin,
    });

    google.accounts.id.renderButton(document.getElementById("google_button"), {
      theme: "outlined",
      size: "medium",
    });
  }, []);
  return (
    <Container>
      <Wrapper>
        <Title>Sign in </Title>
        <Subtitle>to continue to JamTube</Subtitle>
        <Input
          onChange={(e) => setName(e.target.value)}
          placeholder="username"
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          type="password"
        />
        <Button onClick={handleSubmit}>Sign in</Button>
        <div id="google_button"></div>
        <Title>More</Title>
        <Input
          onChange={(e) => setName(e.target.value)}
          placeholder="username"
        />
        <Input onChange={(e) => setEmail(e.target.value)} placeholder="email" />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          type="password"
        />
        <Button>Signup</Button>
        <More>
          <Links>
            <Link> English (USA)</Link>
            <Link>Help </Link>
            <Link>PrivacyTerms </Link>
          </Links>
        </More>
      </Wrapper>
    </Container>
  );
}
