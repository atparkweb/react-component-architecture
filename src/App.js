import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const Greeting = ({ person, onClick, onDelete }) => {
  const greetings = {
    en: "Hello",
    ja: "こんにちは",
    es: "Hola",
  };

  const handleClick = event => {
    onClick && onClick(person.name);
  };

  const handleDelete = event => {
    onDelete && onDelete(person);
  };

  return (
    <>
      <p onClick={handleClick}>
        {greetings[person.lang] || "Hi"}, <strong>{person.name}</strong>
      </p>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

const Add = ({ onAdd }) => {
  const inputRef = useRef();

  const handleAdd = () => {
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
};

const App = () => {
  const [clickedName, setClickedName] = useState("");

  const [people, setPeople] = useState(() => {
    return JSON.parse(localStorage.getItem("people")) || [];
  });

  const handleClick = name => {
    setClickedName(name);
  };

  const addPerson = name => {
    const list = people.concat({
      name,
      lang: "en",
      objectID: Date.now(),
    });
    setPeople(list);
  };

  const deletePerson = person => {
    const list = people.filter(p => person.objectID !== p.objectID);
    setPeople(list);
  };

  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(people));
    return () => localStorage.clear();
  }, [people]);

  return (
    <div className="App">
      <Add onAdd={addPerson} />
      <p style={{ height: "3rem" }}>
        {clickedName ? (
          <>
            <strong>{clickedName}</strong> was clicked
          </>
        ) : null}
      </p>
      {people.map(person => (
        <Greeting
          key={person.objectID}
          person={person}
          onClick={handleClick}
          onDelete={deletePerson}
        />
      ))}
    </div>
  );
};

export default App;
