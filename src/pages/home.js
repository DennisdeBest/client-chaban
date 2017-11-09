import React, {Component} from 'react';
import List from './../components/list';
import {ProgressBar} from 'react-materialize';
import {Link} from 'react-router-dom'
import Search from "../components/search";
import moment from 'moment'

class HomePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      error: null,
    }
  }

  componentDidMount() {
    return this.callAPI(null);
  }

  callAPI = (date) => {
    this.setState({
      data: null,
    });
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

      if(date){
        var tempJson = [];
        json.map((item) => {
          if(moment(item.date, 'DD/MM/YY') >= date){
            tempJson.push(item);
          }
        });
        json = tempJson;
      }
        this.setState({
          data: json,
        });
      });
  };

  handleInputChange = (e, value) => {
    this.callAPI(moment(value));
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
          !error ? (
              <div>
                A partir du : <Search onInputChange={this.handleInputChange}/>
                <List data={data}/>
              </div>
            ) :
            error.code + ' ' + error.message
        }
      </div>
    );
  }

}

export default HomePage;
