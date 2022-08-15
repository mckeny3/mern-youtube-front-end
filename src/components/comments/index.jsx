import React, { useEffect, useState } from "react";
import {
  ActionDiv,
  Author,
  Avatar,
  Buttons,
  CommentsText,
  Container,
  Date,
  LikesCount,
  Reply,
  Wrapper,
} from "./comments.styles";
import logo from "../../assets/logo/logo.png";
import ThumbUpOutlined from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlined from "@mui/icons-material/ThumbDownAltOutlined";
import axios from "axios";
import { format } from "timeago.js";
import { Device } from "../../device";
import { useMediaQuery } from "../../hooks/meadiaQuery";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
function Comments({ items }) {
  const [commenter, setCommenter] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const res = await axios
        .get(`/users/find/${items.userId}`)
        .then((res) => {
          setCommenter(res.data);
        })
        .catch((e) => console.log(e.message));
    };
    fetch();
  }, [items._id]);

  const isMobile = useMediaQuery("(max-width:480px)");

  return (
    <Container>
      <Avatar src={commenter?.image} />
      <Wrapper>
        <Author>
          {commenter.userName} <Date>{format(items?.createdAt)}</Date>
        </Author>
        <CommentsText>{items?.comment}</CommentsText>
        <ActionDiv>
          <Buttons>
            <ThumbUpOutlined className="comment_thumbs" />{" "}
            <LikesCount>0</LikesCount>
          </Buttons>
          <Buttons>
            <ThumbDownAltOutlined className="comment_thumbs" />
          </Buttons>

          <Reply>
            {isMobile ? <MessageOutlinedIcon className="icon" /> : "REPLY"}
          </Reply>
          <Buttons></Buttons>
        </ActionDiv>
      </Wrapper>
    </Container>
  );
}

export default Comments;
