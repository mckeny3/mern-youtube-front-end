import styled from "styled-components";
import { Device } from "../../device";

export const Footer_wrapper = styled.div`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
  padding: 6px 10px;
  position: fixed;
  bottom: 0;
  border-top: 1px solid ${({ theme }) => theme.soft};
  display: flex;
  width: 94%;
  z-index: 1000;

  justify-content: space-between;
  ${Device.xs_down} {
    display: none;
  }
`;
