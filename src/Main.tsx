import React from "react";
import logo from "./image/logo.jpg";

function Main() {
  return (
    <div>
      <div>
        <img src={logo} alt="logo" width="300" height="100" />
      </div>
      <input type="text" />
      <button>글쓰기</button>
    </div>
  );
}

export default Main;
