import React, { useState } from 'react'
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
    MinAvatar} from './comment.styles.jsx'
import logo from '../../assets/logo/logo.png'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

function Comment() {

    const[comment,setComment]=useState("")

    console.log(comment)
    return (

        <Container>
<HighLightComment>
    <CommentCounterDiv>
        <CommentCounterText>
            Comments
        </CommentCounterText>
        <CommentCounterNum>
            300
        </CommentCounterNum>
    </CommentCounterDiv>
<LastComment>
<MinAvatar style={{height:'30px', width:'30px'}}/>

    Hello mait the best video ever</LastComment>
<CommentCounterIcon>
    <ArrowForwardIosOutlinedIcon/>
</CommentCounterIcon>

</HighLightComment>

            <Wrapper>
            <Avatar src={logo}/>
            <Input onChange={(e)=>setComment(e.target.value)} value={comment} placeholder='Add a comment'/>
            </Wrapper>
            <AddCommentDiv>
                <CancelCommentButton>CANCEL</CancelCommentButton>
                <AddCommentButton color={comment} bg={comment} >COMMENT</AddCommentButton>
            </AddCommentDiv>
        </Container>

    )
}

export default Comment
