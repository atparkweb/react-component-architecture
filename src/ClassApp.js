import React from "react";

import "./App.css";

class AppClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "nothing",
    };
  }

  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <p>{name} was clicked</p>
        <GreetingClass
          name="Andy"
          lang="en"
          onClick={(name) => this.setState({ name: name })}
        />
      </div>
    );
  }
}

class GreetingClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      greetings: {
        en: "Hello",
        ja: "こんにちは",
      },
    };
  }
  render() {
    const { name, lang = "en", onClick } = this.props;

    return (
      <p onClick={onClick}>
        {this.state.greetings[lang]}, {name}
      </p>
    );
  }
}

export default AppClass;
