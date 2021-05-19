import React, { useCallback, useRef, useState } from "react";
import "./App.css";

/*
- [X] Use map to render list
  - [X] Set valid 'key' attribute for items
- [X] console log renders on components
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
      {greetings[lang]}, <strong>{name}</strong>
    </p>
  );
};

const Add = ({ onAdd }) => {
  console.log("Render Add");

  const [nameToAdd, setNameToAdd] = useState();

  const handleAdd = (e) => {
    onAdd && onAdd(nameToAdd);
  };

  const handleChange = (e) => {
    setNameToAdd(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

const App = () => {
  const defaultPeople = [
    {
      name: "Adam",
      lang: "en",
      color: "orange",
      objectID: 0,
    },
    {
      name: "Axel",
      lang: "en",
      color: "blue",
      objectID: 1,
    },
    {
      name: "Blaze",
      lang: "en",
      color: "red",
      objectID: 2,
    },
  ];

  const [clicked, setClicked] = useState({ name: "nothing" });

  const [people, setPeople] = useState(defaultPeople);

  console.log("Render App");

  const handleClick = (clicked) => {
    setClicked(clicked);
  };

  const addPerson = (name) => {
    setPeople(people.concat({ name, lang: "en", objectID: people.length }));
  };

  return (
    <div className="App">
      <Add onAdd={addPerson} />
      <p>
        <strong>{clicked.name}</strong> was clicked
      </p>
      {people.map((person) => {
        return (
          <Greeting
            key={person.objectID}
            name={person.name}
            lang={person.lang}
            color={person.color}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default App;
