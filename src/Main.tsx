import React, { useState } from "react";
import logo from "./image/logo.jpg";
import styled from "styled-components";

interface PropsData {
  handleSearch: (data: string) => void;
  handleData: (form: { nickname: string; phone: string }) => void;
}

function Main({ handleSearch, handleData }: PropsData) {
  const [form, get_form] = useState({ nickname: "", phone: "" });
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(event.target.value);
  };

  const handleRegister = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    get_form({ ...form, [name]: value });
  };

  const { nickname, phone } = form;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleData(form);
    get_form({ nickname: "", phone: "" });
  };

  return (
    <Home>
      <Logoscreen>
        <img src={logo} alt="logo" />
      </Logoscreen>
      <SearchBox>
        <input type="text" placeholder="검색란" onChange={onChange} />
      </SearchBox>
      <Register>
        <input type="file" />
        <div>
          닉네임 :{" "}
          <input
            type="text"
            onChange={handleRegister}
            name="nickname"
            value={nickname}
          />
        </div>
        <div>
          폰번호 :{" "}
          <input
            type="text"
            onChange={handleRegister}
            name="phone"
            value={phone}
          />
        </div>
        <div>
          태그란 : <input type="text" onChange={handleRegister} name="tags" />
        </div>
      </Register>
      <WriteButton>
        <button onClick={handleClick} type="submit">
          번호등록
        </button>
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

const SearchBox = styled.div`
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
  background: #b78b94;
  padding-bottom: 15px;

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

const Register = styled.div`
  background: #b78b94;
  padding-top: 5px;
  padding-left: 5px;
  margin-top: 10px;
`;
