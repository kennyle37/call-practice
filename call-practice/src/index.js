import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const axios = require('axios');

class App extends Component {
  state = {
    post: [],
    comment: [],
    profile: [],
  }

  // componentDidMount() {
  //   this.handleGet();
  // }

/*
write a function that display the post with the most comments
then sort it by the most similar comments

search through the comments and find the most common post id
search through the posts for that most common id and then return it

get the endpoint
  then once we get the data back
    loop through the comments object and find the most common post id
  return the post object at the most common id
*/

  handleGetSimilarity = () => {
    axios.get('https://my-json-server.typicode.com/typicode/demo/db')
      .then(res => this.handleMostComments(res.data))
      .then(number => console.log(number))
      .catch(err => console.log(err))
  }

  handleMostComments = (file) => {
    let storage = {};
    let max = -Infinity;
    let maxCount = [];
    file.comments.forEach(comment => {
      storage[comment.postId] = (storage[comment.postId] || 0) + 1;
    })
    for (let key in storage) {
      if (storage[key] > max) {
        max = storage[key];
        maxCount[0] = Number(key);
      }
    }

    for (let i = 0; i < file.posts.length; i++) {
      if (file.posts[i].id === maxCount[0]) {  
        return file.posts[i].title;
      }
    }
  }

  handleCommonPost = (posts, count) => {
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id === count) {
        console.log(posts[i])
        return posts[i].title;
      }
    }
  }

  handleGet = () => {
    axios.get('https://my-json-server.typicode.com/typicode/demo/db')
      .then(res => {
        this.setState({
          post: [res.data.posts],
          comment: [res.data.comments],
          profile: [res.data.profile]
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
        <button onClick={this.handleGetSimilarity}>Similarity</button>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>, document.querySelector('#root')
)