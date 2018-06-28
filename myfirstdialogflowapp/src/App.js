import React, { Component } from 'react';
import logo from './logo.svg';
import { ApiAiClient } from 'api-ai-javascript';
import './App.css';

// const client = new ApiAi.ApiAiClient({accessToken: 'YOUR_ACCESS_TOKEN'});
// const promise = client.textRequest('This is a test');

// promise
//     .then(handleResponse)
//     .catch(handleError);

// function handleResponse(serverResponse) {
//         console.log(serverResponse);
// }
// function handleError(serverError) {
//         console.log(serverError);
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.client = new ApiAiClient({
      accessToken: '280344fb165a461a8ccfef7e1bb47e65'
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
