import React from 'react';

const Test = ({names}) => {
  const greetings = names.map((name, i) =>
    <h1> Hi my name is {name} </h1>
  )


  return (
    <div> {greetings} </div>
  )
};

export default Test;