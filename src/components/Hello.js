import React from "react";

//There are two ways of creating components. Classes and functions, this is how you do it with a function. Also, functions are becoming more industry standard.
function Hello() {
  //each component needs a return. And this is where you put the JSX.
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>I'm not here to take part, I'm here to take over.</p>
    </div>
  );
}
export default Hello;
//This needs to be exported first. Whoops.
