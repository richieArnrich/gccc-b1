// import react package
// create a js function which returns 1 jsx
// the name of the function is equal to the file name
// export the function and import in App.jsx

import React from "react";

function FunctComp(props) {
  console.log(props);
  return (
    <div>
      <h1>I am a functional component</h1>
      <h2>
        Hello my name is {props.data.name} and age is {props.data.age}
      </h2>
    </div>
  );
}
export default FunctComp;
