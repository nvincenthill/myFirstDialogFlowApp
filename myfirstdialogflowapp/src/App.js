import React, { Component } from 'react';
// import { ApiAiClient } from 'api-ai-javascript';
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
    this.state = {
      chatBotDisplayed: true
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Teach my <span id ='ai'> self-learning AI </span> to talk</h1>
        </header>
        <iframe
          id="assistant"
          width="450"
          height="500"
          src="https://console.dialogflow.com/api-client/demo/embedded/a99fcbaa-e508-4ece-a001-81a3e0c23fb3">
        </iframe>
      </div>
    );
  }
}

export default App;
