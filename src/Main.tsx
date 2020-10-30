import React from "react";
import logo from "./image/logo.jpg";
import styled from "styled-components";

interface PropsData {
  handleSearch: (data: string) => void;
}

function Main({ handleSearch }: PropsData) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(event.target.value);
  };
  return (
    <Home>
      <Logoscreen>
        <img src={logo} alt="logo" />
      </Logoscreen>
      <InputBox>
        <input type="text" placeholder="검색란" onChange={onChange} />
      </InputBox>
      <WriteButton>
        <button>번호등록</button>
      </WriteButton>
    </Home>
  );
}

export default Main;

const Home = styled.div`
  margin: 0 12%;
`;

const Logoscreen = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 300px;
    height: 200px;
  }
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  input {
    width: 292px;
    height: 20px;
    font-size: 16px;
  }
`;

const WriteButton = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    background: #fff;
    margin-right: 7px;
    color: tomato;
    border: 0.5px solid tomato;
    border-radius: 13%;
    box-shadow: 2px 2px 2px;
    height: 30px;
    font-size: 17px;
  }
  button:hover {
    background-color: crimson;
    color: black;
    transform: translate(0, -5px);
  }
`;
