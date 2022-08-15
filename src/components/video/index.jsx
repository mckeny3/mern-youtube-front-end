import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ThumsUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumsDownOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comment from "../../components/comment";
import { Device } from "../../device.js";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { format } from "timeago.js";
import { useDispatch, useSelector } from "react-redux";
import { formHelperTextClasses } from "@mui/material";
import { setVideoData, updateViews } from "../../redux/videoSlice";

import { setUser, updateSub } from "../../redux/userSlice";
import {
  Button,
  Buttons,
  ChanelName,
  ChanelPic,
  ChannelContent,
  Container,
  Content,
  Hr,
  Info,
  LeftButtons,
  LeftContent,
  Recommendation,
  RightButton,
  RightContent,
  SubModel,
  SubModel_Hr,
  SubModel_wrapper,
  Subscribers,
  Title,
  VideoDetails,
  VideoDiv,
  VideoFrame,
} from "./videoStyles";
import Comments from "../comments";
import {
  fetchCommentFail,
  fetchCommentStart,
  setComment,
} from "../../redux/commentSlice";
import Recommend from "../recommend";
import { SigninButton } from "../globalComponents/styleButton";

function VideoWrapper() {
  const [channelUser, setChanelUser] = useState({});
  //const [commentData, setComments] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();
  const { videoData } = useSelector((state) => state.reducer.video);
  // const [commentData, setCommentData] = useState([]);
  const { commentData, loading } = useSelector(
    (state) => state.reducer.comment
  );

  // console.log(channelUser, "video data");
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`/video/find/${id}`)
        .then(async (vid) => {
          dispatch(setVideoData(vid.data)); ////set use

          //////while we are at it lets update the views
          await axios
            .put(`/video/view/${id}`)
            .then(async (res) => {
              //dispatch(updateViews(id));
              console.log("views been updated");
            })
            .catch((e) => console.log(e, "error updating views"));

          //////////////now fech video user
          await axios
            .get(`/users/find/${vid.data.userId}`)
            .then(async (user) => {
              setChanelUser(user.data);

              ////////////////
              /////////now fetch comments
              dispatch(fetchCommentStart());
              await axios
                .get(`/comment/${id}`)
                .then(async (comment) => {
                  //setCommentData(comment.data);
                  dispatch(setComment(comment.data));
                })
                .catch((e) => {
                  dispatch(fetchCommentFail());
                  console.log("error fetching comment", e);
                });

              ///////////////
            })
            .catch((e) => {
              console.log("error feching video user", e);
            });
        })
        .catch((e) => {
          console.log("error fetching video data", e);
        });
    };

    fetch();
  }, [id, dispatch]);

  ///////HANDLE LIKES
  const handleLikes = async (id) => {
    try {
      const like = await axios.put(`/users/like/${id}`);
      dispatch(setVideoData(like.data));
      console.log("liked successfully", like.data);
    } catch (error) {
      console.log(error, "error liking");
    }
  };

  ///////////////HANDLE DISLIKE
  const handledisLikes = async (id) => {
    try {
      const like = await axios.put(`/users/dislike/${id}`);
      dispatch(setVideoData(like.data));

      console.log("disliked successfully", like.data);
    } catch (error) {
      console.log(error, "error disliking");
    }
  };

  /* handle views */

  const { currentUser } = useSelector((state) => state.reducer.authUser);

  ///////////////HANDLe SUB
  const handleSub = async () => {
    if (!currentUser) {
      setIsSubModelOpen(true);
      return;
    }

    try {
      if (currentUser.subscribedUsers.includes(channelUser?._id)) {
        const sub = await axios.put(`/users/unsub/${channelUser?._id}`);
        /* dispatch(updateSub(channelUser._id)); */
        setChanelUser(sub.data);
        dispatch(updateSub(channelUser._id));

        console.log("like method");
        // setChanelUser(sub.data);
      } else {
        const sub = await axios.put(`/users/sub/${channelUser?._id}`);
        setChanelUser(sub.data);

        dispatch(updateSub(channelUser._id));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();

  const [isSubModelOpen, setIsSubModelOpen] = useState(false);

  useEffect(() => {
    const isOutSide = (e) => {
      console.log("logged");
      if (e.target.name !== "subscribe") {
        console.log(e.target.name);
        setIsSubModelOpen(false);
      }
    };
    document.body.addEventListener("click", isOutSide);

    return () => {
      document.body.removeEventListener("click", isOutSide);
    };
  }, []);

  return (
    <Container>
      <Content>
        <VideoDiv>
          <VideoFrame src={videoData.videoUrl} controls />
        </VideoDiv>
        <Title>{videoData?.title} </Title>
        <VideoDetails>
          <Info>
            {videoData?.views}k views . {format(videoData?.createdAt)}
          </Info>
          <Buttons>
            <Button onClick={() => handleLikes(videoData?._id)}>
              {videoData?.likes.includes(currentUser?._id) ? (
                <ThumbUpIcon />
              ) : (
                <ThumsUpOutlinedIcon />
              )}
              {videoData?.likes?.length}k
            </Button>
            <Button onClick={() => handledisLikes(videoData?._id)}>
              {videoData?.disLikes.includes(currentUser?._id) ? (
                <ThumbDownAltIcon />
              ) : (
                <ThumsDownOutlinedIcon />
              )}
              Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon />
              Save
            </Button>
          </Buttons>
        </VideoDetails>
        <Hr />
        <ChannelContent>
          <LeftContent>
            <ChanelPic src={channelUser.image} />
            <LeftButtons>
              <ChanelName>{channelUser.userName}</ChanelName>
              <Subscribers>{channelUser.subscribers}k subscribers</Subscribers>
            </LeftButtons>
          </LeftContent>
          <RightContent>
            {currentUser?._id !== channelUser._id && (
              <RightButton
                name="subscribe"
                onClick={() => handleSub()}
                sub={currentUser?.subscribedUsers.includes(channelUser?._id)}
              >
                {!currentUser?.subscribedUsers.includes(channelUser?._id) ? (
                  <>
                    SUBSCRIBE
                    {isSubModelOpen && (
                      <SubModel>
                        <SubModel_wrapper>
                          <h3>Want to subscribe to this channel?</h3>
                          <h4>Sign in to subscribe to this channel</h4>
                          <SubModel_Hr />
                          <SigninButton onClick={() => navigate("/signin")}>
                            Sign in
                          </SigninButton>
                        </SubModel_wrapper>
                      </SubModel>
                    )}
                  </>
                ) : (
                  <span>SUBSCRIBE</span>
                )}
              </RightButton>
            )}
          </RightContent>
        </ChannelContent>
        <Comment comment={commentData} videoId={id} currentUser={currentUser} />

        {!loading && commentData ? (
          commentData.map((items) => <Comments key={items._id} items={items} />)
        ) : (
          <h1>Loading</h1>
        )}
      </Content>
      <Recommend videoData={videoData} />
    </Container>
  );
}

export default VideoWrapper;
