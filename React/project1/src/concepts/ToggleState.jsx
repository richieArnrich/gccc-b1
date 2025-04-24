import React, { useState } from "react";

function ToggleState() {
  const [name1, setName] = useState("Amith");
  const [name2, setName2] = useState("John");
  const [toggle, setToggle] = useState(true);

  function handleClick() {
    setToggle(!toggle);
  }

  return (
    <div>
      {toggle ? (
        <div>
          <h1>Hi this is {name1}</h1>
        </div>
      ) : (
        <div>
          <h1>Hi this is {name2}</h1>
        </div>
      )}
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default ToggleState;
