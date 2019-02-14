import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const axios = require('axios');

class App extends Component {
  state = {
    completed: '',
    id: '',
    title: '',
    userId: ''
  }

  // componentDidMount() {
  //   this.handleGet();
  // }

  // working: https://jsonplaceholder.typicode.com/todos/1
  handleGet = () => {
    axios.get('https://my-json-server.typicode.com/kennyle37/call-practice/db')
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  handleDisplay = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDisplay}>State!</button>
        <button onClick={this.handleGet}>Get!</button>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>, document.querySelector('#root')
)