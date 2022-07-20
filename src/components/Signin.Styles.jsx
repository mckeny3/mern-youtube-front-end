import styled from 'styled-components';
export const Container = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  height:80vh;
  color:1px solid ${({ theme }) =>theme.textSoft};

`;


export const Wrapper = styled.div`
border-radius:3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) =>theme.bgLighter };
  border:1px solid ${({ theme }) =>theme.bgLighter };
  padding: 20px 50px;
  gap: 12px;
`;
export const Title = styled.h1`
font-weight: 500;
font-size: 24px;
color: ${({ theme }) =>theme.text};
`;

export const Subtitle = styled.h2`
color: ${({ theme }) =>theme.textSoft};

  font-size: 20px;
  font-weight: 300;
`;

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid ${({ theme }) =>theme.soft};
  padding: 10px;
  border-radius: 3px;
  width: 100%;
`;

export const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding:10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) =>theme.soft};
  color: ${({ theme }) =>theme.textSoft};;
`;

export const More = styled.div`
display: flex;
  font-size: 10px;
  color: ${({ theme }) =>theme.textSoft};;
 ;
`;


export const Links = styled.div`
gap: 10px;

margin-left: 45px;
`  


export const Link = styled.span`
  
  margin-left:30px;
  color:1px solid ${({ theme }) =>theme.text};

  `;