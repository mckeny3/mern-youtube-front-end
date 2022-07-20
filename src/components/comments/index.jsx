import React from 'react'
import { ActionDiv, Author, Avatar, Buttons, CommentsText, Container, Date, LikesCount, Reply, Wrapper } from './comments.styles'
import logo from '../../assets/logo/logo.png'
import ThumbUpOutlined from '@mui/icons-material/ThumbUpOutlined'
import ThumbDownAltOutlined from '@mui/icons-material/ThumbDownAltOutlined'

function Comments() {
  return (
<Container>
<Avatar src={logo}/>
    <Wrapper>
<Author>

    Mckeny <Date> 1 day ago</Date>
</Author>
<CommentsText>

First of all thanks a lot for this awesome tutorial brother. you always bring extraordinary content for us. Please do a complete backend based on MERN. And "AWS s3" storage service would be great. Please do that for us. All the best. Take love ❤</CommentsText>
<ActionDiv>
    <Buttons>
        <ThumbUpOutlined/> <LikesCount>400</LikesCount>
        </Buttons>
        <Buttons>

        <ThumbDownAltOutlined/>
        </Buttons>

<Reply>REPLY</Reply>
<Buttons>

    </Buttons>
</ActionDiv>
</Wrapper>
</Container>

    )
}

export default Comments