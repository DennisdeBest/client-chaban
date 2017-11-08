import React, {Component} from 'react';
import List from './../components/list';
import {ProgressBar} from 'react-materialize';
import {Link} from 'react-router-dom'
import Search from "../components/search";

class HomePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      error: null,
    }
  }

  componentDidMount() {

    // Get data from API
    fetch('http://localhost:1337')
    // parse response
      .then((res) => {
        if (res.status !== 200) {
          this.setState({
            error: {
              code: res.status,
              message: res.statusText,
            },
          });
        } else {
          return res.json();
        }
      })
      // use parsed response
      .then((json) => {
        this.setState({
          data: json,
        });
      });
  }
  handleInputChange = (e) => {
    //TODO handle search date
  };

  render() {

    const {data} = this.state;
    const {error} = this.state;

    return (
      <div>

        <h2> HomePage </h2>

        {(!data && !error) ?
          (
            <ProgressBar/>
          )
          :
          !error? (
          <div>
            A partir du : <Search  onInputChange={this.handleInputChange}/>
          <List data={data} />
          </div>
          ) :
        error.code +' '+ error.message
        }
      </div>
    );
  }

}

export default HomePage;
