import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class SinglePage extends Component {

  render() {
    console.log(this.props);

    const { item }  = this.props.location.state;
    return (
      <div>
        <Link to={'/'} className='waves-light btn'>

          HOME
        </Link>
        <br/>
        {this.props.match.params.id}
        {item.reason}
      </div>
    );
  }

}

export default SinglePage;
