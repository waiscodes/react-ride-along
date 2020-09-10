import React from "react";

//IF there's a problem check if you spelled const correct and then check if it's capitalized.
const HelloStudent = (props) => {
  //The input for argumenst have to be called props. And there
  return (
    <p>
      Hello {props.name}, Welcome to the TECHCareers React Unit my G. Congrats
      again, this is the opportunity of a life time. Again, Congrats{" "}
      {props.unit}
    </p>
  );
};

export default HelloStudent;
//If you have a function that you use all over the place, create a new folder for utilities and immport export it so you can use it.
