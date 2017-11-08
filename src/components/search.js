import React, {Component} from 'react';
import {Input} from 'react-materialize';

class Search extends Component {

  handleChange = (e) => {
    console.log(e);
    let newValue = e.target.value;
    this.props.onInputChange(e);
  };

  render() {
    return (
      <Input name='on' type='date' onChange={this.handleChange}/>
    );
  }

}

export default Search;
