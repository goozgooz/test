import React from 'react';
import Form from './form';

const Display = (props) => {
  const {array, updateInput, removeInput} = props;
  
  const forms = array.map((item, i) => 
    <Form
      data={item}
      updateInput={updateInput}
      removeInput={removeInput}
      key={i}
    />
  )
  
  return (
    <React.Fragment> {forms} </React.Fragment>
  )
}

export default Display;