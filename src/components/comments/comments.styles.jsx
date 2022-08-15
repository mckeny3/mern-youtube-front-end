import styled from "styled-components";
import ThumsUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumsDownOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import { Device } from "../../device";

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  align-content: center;
  gap: 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #ccc;
  ${Device.mobile} {
    height: 26px;
    width: 26px;
  }
`;

export const Author = styled.h1`
  align-items: center;
  font-weight: 500;
  display: flex;

  font-size: 13px;
  color: ${({ theme }) => theme.text};
  gap: 12px;
  ${Device.mobile} {
    font-size: 10px;
    color: ${({ theme }) => theme.textSoft};
  }
`;
export const Date = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};

  gap: 10px;

  ${Device.mobile} {
    font-size: 10px;
  }
`;
export const CommentsText = styled.span`
  font-size: 14 px;
  color: ${({ theme }) => theme.text};
  ${Device.mobile} {
    font-size: 12px;
  }
`;
export const Reply = styled.span`
  color: ${({ theme }) => theme.textSoft};
  .icon {
    font-size: 14px;
    margin-top: 6px;
  }
`;

export const ActionDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  ${Device.mobile} {
    font-size: 10px;
    gap: 12px;

    .comment_thumbs {
      font-size: 14px;
    }
  }
`;

export const Buttons = styled.span`
  color: ${({ theme }) => theme.textSoft};
  display: flex;
  align-items: center;
  gap: 10px;
  border: none;
`;

export const LikesCount = styled.span`
  font-weight: 400;
  font-size: 10;
`;
