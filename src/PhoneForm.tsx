import React from "react";
import styled from "styled-components";
import image from "./image/image.jpg";

interface UserInfo {
  nickname: string;
  phone: string;
}

function PhoneForm({ nickname, phone }: UserInfo) {
  return (
    <Form>
      <Contents>
        <img src={image} alt="" className="resister-img" />
        <List className="list">
          <li>닉네임 : {nickname}</li>
          <li>폰번호 : {phone}</li>
          <li>태그</li>
        </List>
        <div className="close-btn">
          <button>
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              className="bi bi-x-circle"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                fill-rule="evenodd"
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>
      </Contents>
      <Button>
        <button>수정하기</button>
        <button>즐겨찾기</button>
      </Button>
    </Form>
  );
}

export default PhoneForm;

const Form = styled.div`
  margin: 10px 12%;
  background: #b78b94;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: row;

  .close-btn {
    flex: none;
    margin-left: auto;
    margin-right: 10px;
    margin-top: 7px;
    height: 25px;
    button {
      background: transparent;
      border: none;
    }
  }

  .resister-img {
    position: relative;
    top: 10px;
    left: 10px;
    width: 120px;
    height: 120px;
  }
`;

const List = styled.ul`
  list-style: none;
  margin-left: 15px;
  padding: 0;
  li {
    background: #7ef164;
    margin-bottom: 15px;
    width: 120%;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0px 5px 5px 5px;
  padding-bottom: 5px;
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
