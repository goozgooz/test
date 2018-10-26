import React from 'react';
import Form from '../form';

import uuid from 'uuid/v4';

const initialPair = {
  id: uuid(),
  key: 'yes',
  value: 'poop',
};



class Container extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      keyValArray: [initialPair],
    };

    this.updateInput = this.updateInput.bind(this);
    this.addInput = this.addInput.bind(this);
  }
  
  componentDidUpdate(){
    console.log('__STATE__', this.state.keyValArray);
  }
  
  addInput(){
    const newPair = {
      id: uuid(),
      key: '',
      value: '',
    };
    this.setState(prevState => ({
      keyValArray: [...prevState.keyValArray, newPair],
    }));
  }
  
  updateInput(input){
    console.log(input);
  }



  render(){
    let {keyValArray} = this.state;
    // console.log(keyValArray[0]);
    return(
      <div className='container'>
        <h1> This is the Containter </h1>
        <div onClick={this.addInput}> + </div>
        
        {keyValArray.map((item,i) => (
          <Form 
            data={item}
            updateInput={this.updateInput}
            key={i}
          />
        ))}

      </div>
    );
  }
};

export default Container;