import React, { useEffect, useState } from "react";
import {
  Appbar_logo,
  Appbar_logo_box,
  Appbar_logo_title,
  Appbar_menu_icon,
  Appbar_right_icons,
  AppBar_header,
  Appbar_search_input,
  Appbar_form,
  Appbar_search_button,
  Appbar_avatar,
} from "./Styles";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import logo from "../../assets/logo/logo.png";
import {
  Menu,
  VideoCameraOutline,
  BellOutline,
  SearchOutline,
} from "heroicons-react";
import { useSelector, useDispatch } from "react-redux/";
import { authUser, logOut } from "../../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import Upload from "../upload";
import { SigninButton, StyleButton } from "../globalComponents/styleButton";
import { async } from "@firebase/util";
import { red } from "@mui/material/colors";
import axios from "axios";

function AppBar() {
  const { currentUser } = useSelector((state) => state.reducer.authUser);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const handleSignout = async () => {
    try {
      ////////

      await axios
        .get("/auth/signout")
        .then((res) => {
          dispatch(logOut());
          console.log(res.data);
          navigator("/");
        })
        .catch((e) => console.log(e));

      //////////
      await dispatch(logOut());
    } catch (error) {
      console.log(error);
    }

    console.log("logged out successfully");
  };
  ////////OPEN UPLOAD MODEL
  const [openUpload, setOpenUpload] = useState(false);

  /////////////Google sign in

  useEffect(() => {
    const signinWithGoogle = async (e) => {
      // e.preventDefault();
      console.log("clicked");

      /*global google*/
      await google.accounts.id.initialize({
        client_id:
          "151781963150-g20nl1fpun8al5bfdg70aj16ke2h8f0d.apps.googleusercontent.com",
        callback: (response) => {
          console.log("hacked");
          console.log(response);
        },
      });
      await google.accounts.id.renderButton(document.getElementById("google"), {
        theme: "filled_transparent",
        size: "small",

        shape: "pill",
        color: red,
      });
    };

    /*  signinWithGoogle(); */
  }, []);

  return (
    <>
      <AppBar_header>
        <Appbar_logo_box>
          <Appbar_menu_icon>
            <Menu size="30" />
          </Appbar_menu_icon>
          <Appbar_logo src={logo} />
          <Link to="/" style={{ typography: "none", color: "inherit" }}>
            <Appbar_logo_title>Premium</Appbar_logo_title>
          </Link>
        </Appbar_logo_box>
        {/* middle */}
        <Appbar_form>
          <Appbar_search_input placeholder="search" />
          <Appbar_search_button>
            <SearchOutline />
          </Appbar_search_button>
        </Appbar_form>
        {/* end */}
        <Appbar_right_icons>
          <SearchOutline className="appbar_search_icon" />

          <VideoCameraOutline
            onClick={() => setOpenUpload(true)}
            className="appbar_video_icon"
          />
          <BellOutline />

          {currentUser ? (
            <Appbar_avatar
              onClick={() => handleSignout()}
              src={currentUser.image}
            />
          ) : (
            <Link to="/signin">{<SigninButton>Sign in</SigninButton>}</Link>
          )}
        </Appbar_right_icons>
      </AppBar_header>
      {openUpload && (
        <Upload currentUser={currentUser} setOpenUpload={setOpenUpload} />
      )}
    </>
  );
}
export default AppBar;
