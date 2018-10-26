import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.data;

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  
  componentDidMount(){
    console.log(this.state);
  }
  
  handleBlur(){
    console.log('pre', this.state);
    this.props.updateInput(this.state);
  }

  handleChange(e){
    let {name, value} = e.target;
    this.setState({
      [name]: value,
    });
  }

  render(){
    // console.log('form id', this.props.id);
    return(
      <div onBlur={this.handleBlur}>
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