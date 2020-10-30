import React, { useState, useEffect } from "react";
import Main from "./Main";
import PhoneList from "./PhoneList";
import data from "./data";

interface EmptyArray {
  nickname: string;
}

function App() {
  const [list, get_list] = useState(data);
  const [searchList, get_searchList] = useState<string>("");

  const get_data = () => {
    console.log(searchList, list);
    if (searchList === "") {
      get_list(data);
    } else {
      get_list(
        list.filter((x: EmptyArray) => x.nickname.indexOf(searchList) !== -1)
      );
    }
  };

  const handleSearch = (searchData: string) => {
    get_searchList(searchData);
  };

  useEffect(get_data, [searchList]);

  return (
    <div className="App">
      <Main handleSearch={handleSearch} />
      <PhoneList course={list} />
    </div>
  );
}

export default App;
