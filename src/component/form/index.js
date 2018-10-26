import React from 'react';

const emptyState = {
  key: '',
  value: '',
};

class Form extends React.Component {
  constructor(props){
    super(props);

    this.state = emptyState;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    let {name, value} = e.target;
    this.setState({
      [name]: value
    })

    this.props.updateInput(this.state, this.props.index);
  }

  render(){
    return(
      <form>
        <input
          type='text'
          name='key'
          placeholder='key'
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='value'
          placeholder='value'
          onChange={this.handleChange}
        />
      </form>
    )
  }



};

export default Form;