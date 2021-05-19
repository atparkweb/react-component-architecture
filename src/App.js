import React, { useCallback, useRef, useState } from "react";
import "./App.css";

/*
- [ ] Use map to render list
  - [ ] Set valid 'key' attribute for items
- [ ] console log renders on components
- [ ] useRef
  - [ ] Make an Input/Add component
  - [ ] implement onChange + useState
  - [ ] refactor into useRef
    - [ ] Add ref to input
- [ ] useEffect + useRef for direct DOM interaction
  - [ ] Focus and clear input after adding
- [ ] useCallback for reducing re-renders
*/

const Greeting = ({
  name = "Human",
  lang = "ja",
  color = "black",
  onClick,
}) => {
  const greetings = {
    en: "Hello",
    ja: "こんにちは",
  };

  console.log("Render Greeting");

  const handleClick = (e) => {
    onClick && onClick({ name, lang, color });
  };

  return (
    <p onClick={handleClick}>
      {greetings[lang]}, <strong style={{ color }}>{name}</strong>
    </p>
  );
};

const App = () => {
  const [clicked, setClicked] = useState({ name: "nothing" });

  console.log("Render App");

  const handleClick = (clicked) => {
    setClicked(clicked);
  };

  const people = [
    {
      name: "Adam",
      lang: "en",
      color: "orange",
    },
    {
      name: "Axel",
      lang: "en",
      color: "blue",
    },
    {
      name: "Blaze",
      lang: "en",
      color: "red",
    },
  ];

  return (
    <div className="App">
      <p>
        <strong>{clicked.name}</strong> was clicked
      </p>
      <Greeting name="Adam" lang="en" onClick={handleClick} />
      <Greeting name="Axel" lang="en" onClick={handleClick} />
      <Greeting name="Blaze" lang="en" onClick={handleClick} />
    </div>
  );
};

export default App;
