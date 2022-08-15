import Home from "@mui/icons-material/Home";
import LibraryMusicOutlined from "@mui/icons-material/LibraryMusicOutlined";
import SubscriptionsOutlined from "@mui/icons-material/SubscriptionsOutlined";
import {
  PlusCircleOutline,
  PlusOutline,
  SwitchHorizontal,
} from "heroicons-react";
import React from "react";
import { Link } from "react-router-dom";
import { Footer_wrapper } from "./footerStyle";

function Footer() {
  return (
    <Footer_wrapper>
      <Link
        to="/randomVideos"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Home />
      </Link>
      <SwitchHorizontal />
      <PlusOutline style={{ border: "1px solid ", borderRadius: "50%" }} />
      <Link
        to="/subVideos"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <SubscriptionsOutlined />
      </Link>
      <LibraryMusicOutlined />
    </Footer_wrapper>
  );
}

export default Footer;
