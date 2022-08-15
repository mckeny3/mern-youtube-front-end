import { Device } from "../../device";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 20px 20px;

  gap: 26px;
`;
export const Content = styled.div`
  flex: 0.7;
  ${Device.mobile} {
    flex: auto;
    overflow: hidden;
  }
`;
export const VideoDetails = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  ${Device.mobile} {
    display: block;
  }
`;

export const VideoDiv = styled.div`
  display: flex;
  width: 100%;
`;
export const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
  ${Device.mobile} {
    margin-bottom: 5px;
    font-size: 16px;
    margin-top: 6px;
  }
`;
export const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
  ${Device.mobile} {
    font-size: 12px;
  }
`;
export const Buttons = styled.div`
  gap: 20px;
  display: flex;
  color: ${({ theme }) => theme.text};
  ${Device.mobile} {
    font-size: 12px;
    padding-top: 10px;
  }
`;
export const Button = styled.div`
  gap: 5px;
  display: flex;
  cursor: pointer;
  align-items: center;
`;
export const Hr = styled.hr`
  border: 0.1px solid ${({ theme }) => theme.soft};
  margin: 15px 0px;
`;
export const ChannelContent = styled.div`
  border: 0.1px solid ${({ theme }) => theme.soft};
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Device.mobile} {
    display: block;
  }
`;
export const ChanelPic = styled.img`
  border-radius: 50%;
  margin-top: 10px;
  border: 0;
  height: 36px;
  background-color: #ccc;
  width: 36px;
  ${Device.mobile} {
    height: 26px;
    width: 26px;
  }
`;
export const RightContent = styled.div`
  display: flex;
  padding: 10px;
  ${Device.mobile} {
    padding: 0;
  }
`;
export const LeftContent = styled.div`
  gap: 4px;
  padding: 0px 6px;

  display: flex;
`;
export const LeftButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0px 10px;
  gap: 0px;
  ${Device.mobile} {
    flex-direction: row;
    align-items: center;
    gap: 4px;
  }
`;
export const RightButton = styled.button`
  background-color: ${(prop) => (prop.sub ? ({ theme }) => theme.soft : "red")};
  border-radius: 3px;
  font-weight: 500;
  padding: 8px 16px;
  height: max-content;
  border: none;

  color: ${({ theme }) => theme.text};
  ${Device.mobile} {
    padding: 0;
    margin-bottom: 20px;
    height: 0;
    margin-left: 46px;
    font-size: 8px;
    font-weight: 400;
    background-color: transparent;
    color: ${(prop) => (prop.sub ? ({ theme }) => theme.soft : "red")};
  }
`;
export const ChanelName = styled.span`
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  ${Device.mobile} {
    font-size: 10px;
    font-weight: 300;
  }
`;
export const Subscribers = styled.span`
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
  margin-top: 5px;
  font-weight: medium;
  ${Device.mobile} {
    font-size: 8px;
    margin-top: 0;
  }
`;
export const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: contain;
`;

export const SubModel = styled.div`
  position: relative;
`;
export const SubModel_wrapper = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  position: absolute;
  opacity: 0.9;
  width: 400%;
  left: -30%;
  top: 60;
  margin-top: 10px;
  text-align: left;
  padding: 10px;
  height: 150px;
  h4 {
    font-weight: 300;
  }
`;
export const SubModel_Hr = styled.hr`
  height: 0.5px;
  background-color: ${({ theme }) => theme.soft};
  width: 100%;
  border: 0;
`;
