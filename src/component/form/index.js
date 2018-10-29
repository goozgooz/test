import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.data;

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e){
    let {name, value} = e.target;
    this.setState({
      [name]: value,
    });
    
    this.props.updateInput({
      [name]: value,
      id: this.state.id,
    });
  }

  render(){
    return(
      <div>
        <form>
          <input
            type='text'
            name='key'
            placeholder='key'
            onChange={this.handleChange}
            value={this.state.key}
          />
          <input
            type='text'
            name='value'
            placeholder='value'
            onChange={this.handleChange}
            value={this.state.value}
          />
        </form>
        
      </div>
    );
  }



};

export default Form;