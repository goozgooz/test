import React from 'react';
import Form from '../form';

class Container extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      keyValArray: [],
    }

    this.addInput = this.addInput.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  addInput(){
    count++;
  }
  
  updateInput(input){
    this.setState()
  }



  render(){
    return(
      <div className='container'>
        <h1> This is the Containter </h1>
        <div onClick={this.addInput}> + </div>
        <Form updateInput={this.updateInput}  />
      </div>
    )
  }
};

export default Container;