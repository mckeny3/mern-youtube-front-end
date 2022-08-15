import styled from "styled-components";
import { Device } from "../../device";

export const Container = styled.div`
  cursor: pointer;
  gap: 1px;
  display: ${(props) => props.view === "right" && "flex"};
  width: ${(props) => props.view !== "right" && "100%"};
  margin-bottom: ${(props) => (props.view === "right" ? "10px" : "45px")};
  gap: ${(props) => props.view === "right" && "10px"};
`;

export const DetailsCard = styled.div`
  cursor: pointer;
  margin-top: ${(props) => props.view !== "right" && "2px"};
  gap: 12px;
  display: flex;
  flex: ${(props) => props.view === "right" && "1"};
`;

export const ProfileDiv = styled.img`
  cursor: pointer;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  margin-top: 10px;
`;

export const DetailsContents = styled.div``;

export const VideoTitle = styled.h1`
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  ${Device.mobile} {
    font-size: 12px;
  }
`;
export const VideoOwner = styled.h2`
  margin: 1px 0px;
  cursor: pointer;
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  ${Device.mobile} {
    font-size: 8px;
  }
`;
export const VideoStatsDiv = styled.div`
  cursor: pointer;
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  ${Device.mobile} {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 10px;
    gap: 10px;
  }
`;

export const VideoImage = styled.video`
  width: max-content;
  height: ${(props) => (props.view === "right" ? "120px" : "180px")};
  background-color: #999;
  flex: 1;
`;
