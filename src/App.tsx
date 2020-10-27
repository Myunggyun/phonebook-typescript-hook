import React from "react";
import Main from "./Main";
import PhoneList from "./PhoneList";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Main />
      <PhoneList course={data} />
    </div>
  );
}

export default App;
