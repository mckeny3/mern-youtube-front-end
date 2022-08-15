import styled from "styled-components";
import { Device } from "../../device";

export const RecommendWrapper = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.soft};
  ${Device.mobile} {
    display: none;
  }
`;
