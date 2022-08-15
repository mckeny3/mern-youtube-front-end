import React from "react";
import styled from "styled-components";
import { Toolbar } from "@mui/material";
import logo from "../../assets/logo/logo.png";
import HomeIcon from "heroicons-react";
import { Device } from "../../device";
export const AppBar_header = styled.div`
  display: flex;
  z-index: 100;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 16px;
  position: sticky;
  padding-left: 16px;
  height: 2vh;
  top: 0;
  flex: 1;
  align-items: center;
  ${Device.mobile} {
    padding: 6px;
    height: 40px;
  }
`;
export const Appbar_logo_box = styled.div`
  display: flex;
  height: 40px;

  align-items: center;
  gap: 2px;
  justify-content: space-between;
`;

export const Appbar_menu_icon = styled.span`
  margin-right: 28px;
  font-size: 30px;
  color: ${({ theme }) => theme.text};
  ${Device.mobile} {
    display: none;
  }
`;

export const Appbar_logo_title = styled.h1`
  font-family: Oswald, sans-serif;
  margin-left: 0;
  color: ${({ theme }) => theme.text};

  font-size: 24px;
  font-weight: large;
  letter-spacing: 1px;
  ${Device.mobile} {
    font-size: 18px;
  }
`;

export const Appbar_logo = styled.img`
  color: blue;
  width: 36px;
  font-size: 0px;
  padding-right: 0;
  margin-right: 0;
  height: 30px;
  ${Device.mobile} {
    width: 26px;
    height: 20px;
  }
`;
////////////////////////search bar

export const Appbar_form = styled.form`
  flex-grow: 1;
  max-width: 726px;
  margin: 0 32px 0 4rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  display: flex;
  @media (max-width: 480px) {
    display: none;
  }
`;

export const Appbar_search_input = styled.input`
  color: ${({ theme }) => theme.text};

  outline: none;
  width: 100%;

  border: 1px solid #777;
  padding: 8px;
  font-size: inherit;
  background-color: ${({ theme }) => theme.bg};
`;
export const Appbar_search_button = styled.button`
  display: flex;
  padding: 0 1.25rem;
  align-items: center;
  border: 1px solid #777;
  border-top-left-radius: 0;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  border-left: 0;
  background-color: ${({ theme }) => theme.soft};

  border-bottom-left-radius: 0;
`;

////Right ICons

export const Appbar_right_icons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 15px;
  align-items: center;
  color: ${({ theme }) => theme.text};

  .appbar_app_icon {
    ${Device.mobile} {
      display: none;
    }
  }

  .appbar_video_icon {
    ${Device.mobile} {
      display: none;
    }
  }

  .appbar_search_icon {
    ${Device.xs_down} {
      display: none;
    }
  }
`;

export const Appbar_avatar = styled.img`
  border-radius: 50%;
  background-color: #aaa;
  height: 36px;
  width: 36px;
  ${Device.mobile} {
    height: 26px;
    width: 26px;
  }
`;
