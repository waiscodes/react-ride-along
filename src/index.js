import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Hello from "./components/Hello";
import HelloStudent from "./components/HelloStudent";
//We imported the component from the page.

ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <HelloStudent name="Birm" unit="React" />
  </React.StrictMode>,
  document.getElementById("root")
);

//the ./app and service worker so I have to delete them from inside here as well.
//Find everything in the terminal, and let it tell you.
