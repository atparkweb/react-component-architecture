import React, { useState } from "react";
import "./App.css";

/*
- [ ] Component nesting
- [ ] Passing props
  - [ ] props vs. destruct syntax
  - [ ] defaults
- [ ] Lifting state
  - [ ] passing function as prop
- [ ] One-way data flow
- [ ] useState
*/

const Greeting = ({ name = "Human", lang = "ja", onClick }) => {
  const greetings = {
    en: "Hello",
    ja: "こんにちは",
  };

  const handleClick = (e) => {
    onClick && onClick(name);
  };

  return (
    <p onClick={handleClick}>
      {greetings[lang]}, {name}
    </p>
  );
};

const App = () => {
  const [clickedName, setClickedName] = useState("nothing");

  const people = [
    {
      name: "Conall",
      lang: "en",
    },
    {
      name: "Curtis",
      lang: "en",
    },
    {
      name: "Yukari",
      lang: "ja",
    },
  ];

  const handleClick = (name) => {
    setClickedName(name);
  };

  // Note: You can use .map to iterate over data and format as JSX
  // people.map(person => {
  //   return <Greeting name={person.name} lang={person.lang} onClick={onClick} />
  // });

  return (
    <div className="App">
      <p>{clickedName} was clicked</p>
      <Greeting lang="ja" name="Conall" onClick={handleClick} />
      <Greeting lang="en" name="Curtis" onClick={handleClick} />
      <Greeting name="Yukari" />
    </div>
  );
};

export default App;
