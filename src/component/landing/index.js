import './_landing.scss';
import React from 'react';
import {connect} from 'react-redux';

import Container from '../container';


class Landing extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Container />
      </React.Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
