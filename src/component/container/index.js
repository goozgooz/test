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

    this.addInput = this.addInput.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.removeInput = this.removeInput.bind(this);
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
    this.setState(({keyValArray}) => ({
      keyValArray: keyValArray.map(item => item.id === input.id ? {...item, ...input} : item),
    }));
  }
  
  removeInput(){
    console.log('removing');
  }



  render(){
    let {keyValArray} = this.state;

    return(
      <div className='container'>
        <h1> This is the Containter </h1>
        <div onClick={this.addInput}> + </div>
        
        {keyValArray.map((item,i) => (
          <Form 
            data={item}
            updateInput={this.updateInput}
            removeInput={this.removeInput}
            key={i}
          />
        ))}

      </div>
    );
  }
};

export default Container;