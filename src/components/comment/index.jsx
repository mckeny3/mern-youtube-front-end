import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Wrapper,
  Avatar,
  Container,
  Input,
  AddCommentButton,
  HighLightComment,
  CommentCounterDiv,
  CancelCommentButton,
  AddCommentDiv,
  CommentCounterText,
  CommentCounterNum,
  LastComment,
  CommentCounterIcon,
  MinAvatar,
} from "./comment.styles.jsx";
import logo from "../../assets/logo/logo.png";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Comments from "../comments/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../redux/commentSlice.js";

////////////////////
function Comment({ videoId, comment }) {
  /////////////
  const [newComment, setNewComment] = useState("");
  const { currentUser } = useSelector((state) => state.reducer.authUser);
  const [lastCommenter, setLastCommenter] = useState(null);
  const dispatch = useDispatch();
  const handleNewComment = async () => {
    try {
      const comment = await axios.post("/comment/add/", {
        videoId: videoId,
        comment: newComment,
        userId: currentUser._id,
      });
      dispatch(createComment(comment.data));
      console.log(comment, "success send comment");
      setNewComment("");
    } catch (error) {
      console.log("sending comment error", error);
      setNewComment("");
    }
  };
  const lastComment = comment ? comment?.length - 1 : 0;

  /////////FETCH user o comment
  useEffect(() => {
    const fetch = async () => {
      const res = await axios
        .get(`/users/find/${comment?.[lastComment]?.userId}`)
        .then((res) => {
          setLastCommenter(res.data);
        })
        .catch((e) => console.log(e.message));
    };
    fetch();
  }, [videoId]);

  return (
    <Container>
      <HighLightComment>
        <CommentCounterDiv>
          <CommentCounterText>Comments</CommentCounterText>
          <CommentCounterNum>{comment?.length}</CommentCounterNum>
        </CommentCounterDiv>
        <LastComment>
          <MinAvatar src={lastCommenter?.image} />
          {typeof comment !== "undefined" &&
            `${comment?.[lastComment]?.comment.substring(0, 25)}
            ...`}
        </LastComment>
        <CommentCounterIcon>
          <ArrowForwardIosOutlinedIcon />
        </CommentCounterIcon>
      </HighLightComment>

      <Wrapper>
        <Avatar src={currentUser?.image} />
        <Input
          className="placeholder"
          onChange={(e) => setNewComment(e.target.value)}
          value={newComment}
          placeholder="Add a comment"
        />
      </Wrapper>
      <AddCommentDiv>
        <CancelCommentButton onClick={() => setNewComment("")}>
          CANCEL
        </CancelCommentButton>
        <AddCommentButton
          disabled={!newComment ? true : false}
          onClick={() => handleNewComment()}
          color={newComment}
          bg={newComment}
        >
          COMMENT
        </AddCommentButton>
      </AddCommentDiv>
    </Container>
  );
}

export default Comment;
