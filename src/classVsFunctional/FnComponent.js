import { useEffect, useState } from "react";

function MyComponent(props) {
  const [someData, setSomeData] = useState({
    total: 100,
  });

  // comp did mount
  useEffect(() => {
    // do something once on first load only
    console.log("Component added");

    // this is the destroy handler. runs when component is removed
    return () => console.log("deleting");
  }, []);

  useEffect(() => {
    // This runs on every render (update)
  });

  useEffect(() => {
    // This runs when someData state changes
  }, [someData]);

  const handleClick = () => {};

  return <div onClick={handleClick}>Total: {props.total}</div>;
}

export default MyComponent;
