import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { format } from "timeago.js";
import logo from "../../assets/logo/logo.png";
import {
  Container,
  DetailsCard,
  DetailsContents,
  ProfileDiv,
  VideoImage,
  VideoOwner,
  VideoStatsDiv,
  VideoTitle,
} from "./videoCardStyles";

function VideoCard({ view, videoData }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const result = await axios.get(`/users/find/${videoData.userId}`);

      setUser(result.data);
    };
    fetch();
  }, [videoData._id]);

  return (
    <Link to={`/video/${videoData._id}`} style={{ textDecoration: "none" }}>
      <Container view={view}>
        <VideoImage view={view} src={videoData.videoUrl} />
        <DetailsCard view={view}>
          {view !== "right" && <ProfileDiv src={user.image} />}
          <DetailsContents view={view}>
            <VideoTitle>{videoData.title}</VideoTitle>
            <VideoStatsDiv>
              <VideoOwner>{user.userName}</VideoOwner>
              {videoData.views} views . {format(videoData.createdAt)}
            </VideoStatsDiv>
          </DetailsContents>
        </DetailsCard>
      </Container>
    </Link>
  );
}

export default VideoCard;
