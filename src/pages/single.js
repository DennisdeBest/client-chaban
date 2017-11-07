import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';

const Test = () => (
  <div> RENDER PAGE 1</div>
)

class SinglePage extends Component {

  render() {
    return (
      <div>
        <Link to={'/'}>

          HOME
        </Link>
        PAGE SINGLE
      </div>
    );
  }

}

export default SinglePage;
