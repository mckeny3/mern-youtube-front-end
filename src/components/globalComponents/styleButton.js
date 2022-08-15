import React from "react";
import Styled from "styled-components";

export const StyleButton = Styled.button`
  background-color: ${(prop) =>
    !prop.bg ? ({ theme }) => theme.soft : prop.bg};

  border-radius: ${(prop) => (!prop.rd ? "3px" : prop.bd)};
  padding: 8px;
  color: ${(prop) => (!prop.color ? ({ theme }) => theme.text : prop.color)};
  cursor: ${(prop) => (!prop.cursor ? "pointer" : prop.cursor)};
  border: none;
  height: ${(prop) => (!prop.h ? "max-content" : prop.h)};
  width: ${(prop) => (!prop.w ? "max-content" : prop.w)};
  font-weight: ${(prop) => (!prop.fw ? "bold" : prop.fw)};
  border:1px solid #333;

  font-size: ${(prop) => (!prop.fs ? "20px" : prop.fs)};
  
`;

export const SigninButton = Styled.button`


  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  margin-top: 10px;
  border-radius: 3px;
  cursor: pointer;
  gap: 5px;




`;
