import styled from "styled-components";
import { Device } from "../../device";

export const Wrapper = styled.div`
  display: flex;
`;
export const Container = styled.div`
  margin-top: 12px;
  gap: 10px;
`;

export const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-top: 20px;
  background-color: grey;
  ${Device.mobile} {
    height: 36px;
    width: 36px;
  }
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #ccc;

  font-size: large;
  width: 100%;
  outline: none;
  padding: 8px;
  color: ${({ theme }) => theme.text};

  ${Device.mobile} {
    font-size: 12px;

    ::placeholder {
      font-size: 12px;
    }
  }
`;

export const AddCommentButton = styled.button`
  background-color: ${(prop) =>
    prop.bg ? "#00bfff" : ({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  color: ${(prop) => (prop.color ? "black" : ({ theme }) => theme.textSoft)};
  cursor: ${(prop) => prop.color && "pointer"};
  border: none;
  height: max-content;
  font-size: 16px;
  ${Device.mobile} {
    font-size: 12px;
  }
`;
export const CancelCommentButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.textSoft};
  font-size: 16px;
  ${Device.mobile} {
    font-size: 12px;
  }
`;
export const AddCommentDiv = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  justify-content: flex-end;
`;

export const HighLightComment = styled.div`
  border: 1px solid ${({ theme }) => theme.soft};

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: max-content;
  padding: 0px 1px;
`;
export const CommentCounterDiv = styled.div`
  border: 1px solid blue;
  border: none;
  border-right: 0.5px solid ${({ theme }) => theme.soft};
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
`;
export const CommentCounterText = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  font-weight: 400;
  ${Device.mobile} {
    font-size: 12px;
  }
`;
export const LastComment = styled.p`
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  gap: 10px;
  ${Device.mobile} {
    font-size: small;
    padding-left: 4px;
  }
`;
export const CommentCounterNum = styled.span`
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
  font-weight: 400;
`;
export const CommentCounterIcon = styled.span`
  color: ${({ theme }) => theme.soft}; ;
`;

export const MinAvatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: grey;
  ${Device.mobile} {
    height: 26px;
    width: 26px;
  }
`;
