import React, { useCallback, useMemo, useRef, useState } from "react";
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

const Greeting = React.memo(({ person, onClick }) => {
  const greetings = {
    en: "Hello",
    ja: "こんにちは",
  };

  console.log("Render Greeting");

  const handleClick = e => {
    onClick && onClick(person);
  };

  return (
    <p onClick={handleClick}>
      {greetings[person.lang]}, <strong>{person.name}</strong> (
      {person.objectID})
    </p>
  );
});

const Add = React.memo(({ onAdd }) => {
  console.log("Render Add");

  const inputRef = useRef();

  const handleAdd = e => {
    if (onAdd) {
      onAdd(inputRef.current.value);
      inputRef.current.value = "";
    } else {
      console.warn("onAdd prop is not defined for Greeting instance");
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
});

const App = () => {
  const defaultPeople = useMemo(
    () => [
      {
        name: "Adam",
        lang: "en",
        color: "orange",
        objectID: 1,
      },
      {
        name: "Axel",
        lang: "en",
        color: "blue",
        objectID: 2,
      },
      {
        name: "Blaze",
        lang: "en",
        color: "red",
        objectID: 3,
      },
    ],
    []
  );

  // a local ref variable to auto increment unique ID
  let currentID = useRef(3);

  const [clicked, setClicked] = useState({});

  const [people, setPeople] = useState(defaultPeople);

  console.log("Render App");

  const handleClick = useCallback(clicked => {
    setClicked(clicked);
  }, []);

  const addPerson = useCallback(
    name => {
      currentID.current += 1;
      console.log(currentID);
      setPeople(people.concat({ name, lang: "en", objectID: currentID }));
    },
    [people]
  );

  return (
    <div className="App">
      <Add onAdd={addPerson} />
      <p style={{ height: "3rem" }}>
        {clicked.name ? (
          <>
            <strong>{clicked.name}</strong> was clicked
          </>
        ) : null}
      </p>
      {people.map(person => {
        return (
          <Greeting
            key={person.objectID}
            person={person}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default App;
