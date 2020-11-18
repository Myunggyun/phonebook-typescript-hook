import React, { useState, useEffect } from "react";
import Main from "./Main";
import PhoneList from "./PhoneList";
import data from "./data";

interface PropsData {
  nickname: string;
}

function App() {
  const [list, get_list] = useState(data);
  const [searchList, get_searchList] = useState<string>("");

  const get_data = () => {
    if (searchList !== "") {
      get_list(
        data.filter((x: PropsData) => x.nickname.indexOf(searchList) !== -1)
      );
    } else {
      get_list(data);
    }
  };

  const handleSearch = (searchData: string) => {
    get_searchList(searchData);
  };

  const addData = (form: { nickname: string; phone: string }) => {
    get_list(list.concat(form));
  };

  useEffect(get_data, [searchList]);

  return (
    <div className="App">
      <Main handleSearch={handleSearch} handleData={addData} />
      <PhoneList course={list} />
    </div>
  );
}

export default App;
