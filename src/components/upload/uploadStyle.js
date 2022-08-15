import styled from "styled-components";

export const UploadContainer = styled.div`
  display: flex;
  position: fixed;
  z-index: 100;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  align-content: center;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export const UploadBox = styled.div`
  height: 90%;
  width: 70%;
  padding: 14px;
  background-color: ${({ theme }) => theme.bg};
`;

export const UploadTitle = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 22px;
`;
export const Upload_title_box = styled.div`
  display: flex;
  width: 90%;
  padding: 2%;
  height: 20px;
  align-items: center;
  flex-direction: row;
  border-bottom: 0.5px solid ${({ theme }) => theme.soft};
  justify-content: space-between;
`;

export const Upload_Close = styled.h1`
  font-size: large;
  font-weight: 300;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

export const Upload_Content = styled.form`
  border: 0.5px solid ${({ theme }) => theme.soft};

  flex-direction: column;
  gap: 15px;
  width: 80%;

  display: flex;
  padding: 10px;
  margin-top: 20px;
  .tags {
    background-color: ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.text};
    padding: 6px;
    border-radius: 80%;
    margin-left: 6px;
    align-items: center;
    font-size: 10px;
    justify-content: center;
  }

  .Upload_label {
    color: ${({ theme }) => theme.text};
  }
`;

export const Upload_title_input = styled.input`
  padding: 10px;
  font-size: 18px;
  background-color: transparent;
  border-radius: 4px;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.soft}; ;
`;

export const Upload_desc = styled.textarea`
  padding: 10px;
  font-size: 18px;

  background-color: transparent;
  border-radius: 4px;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.soft}; ;
`;

export const Upload_file = styled.input`
  padding: 10px;
  font-size: 18px;
  border-radius: 4px;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.soft}; ;
`;
export const Upload_tag = styled.input`
  padding: 10px;
  font-size: 18px;
  background-color: transparent;
  border-radius: 4px;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.soft}; ;
`;

export const Upload_thumnail = styled.input`
  padding: 10px;
  font-size: 18px;
  background-color: transparent;
  border-radius: 4px;
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.soft}; ;
`;
