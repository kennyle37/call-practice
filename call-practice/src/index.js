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

  handleGet = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => {
        this.setState({
          completed: res.data.completed,
          id: res.data.id,
          title: res.data.title,
          userId: res.data.userId
        })
      })
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