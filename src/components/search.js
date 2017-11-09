import React, {Component} from 'react';
import {Input} from 'react-materialize';

class Search extends Component {

  handleChange = (e, value) => {
    this.props.onInputChange(e, value);
  };

  render() {
    return (
      <Input name='on' type='date' onChange={this.handleChange}/>
    );
  }

}

export default Search;
