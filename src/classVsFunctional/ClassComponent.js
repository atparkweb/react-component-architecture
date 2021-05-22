import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: props.total,
    };

    this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
  }

  componentDidMount() {
    console.log("Component added");
  }
  componentWillUnmount() {
    console.log("Component deleting");
  }
  componentDidUpdate() {
    console.log("Component re-render on change");
  }

  render() {
    return <div onClick={this.handleClick}>Hello</div>;
  }
}

export default MyComponent;
