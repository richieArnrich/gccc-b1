import React from "react";

function FuncState() {
  // state in func comp
  const [name, setName] = React.useState("John");
  const [place, setPlace] = React.useState("Kerala");
  function handleClick() {
    setName("Amith");
    setPlace("Karnataka");
  }
  return (
    <div>
      <h2>I am a function handling state</h2>
      <h3>
        Hello this is {name} and I am from {place}
      </h3>
      <button onClick={handleClick}>Change Name and Place</button>
    </div>
  );
}

export default FuncState;
// state in react js:-
// state is ab object that is native to the current component.
// it originates in the specific component and is accessible in the same component
// in functional components, state is accessed using useState() which is prebuilt in react package
// states are objects which can be updated over time
