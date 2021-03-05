import { Component, useEffect } from 'react';
import './App.css';
// import './App.css';

import './styling/styles.css'

function HostingDialogue() {

  return (
    <h1>Hosting</h1>
  )
}

function JoiningDialogue() {
  return (
    <h1>Joining</h1>
  )
}

class App extends Component{
  // const hostSessionButton = document.querySelector("#host-session");
  // const joinSessionButton = document.querySelector("#join-session");

  // this.state = {
  //   hosting: false,
  //   joining: false
  // }

  constructor(props) {
    super(props);
    this.state = {
      hosting: false,
      joining: false
    }
  }

  joinSess = () => {
    console.log("joining session..");
    
    this.setState({ hosting: false, joining: true})


  }

  hostSess = () => {
    console.log("hosting session...");
    this.setState({ hosting: true, joining: false})
  }
  

  //Listeners
  // if (joinSessionButton)
  //   joinSessionButton.addEventListener('click', joinSess);
  // if (hostSessionButton)
  //   hostSessionButton.addEventListener('click', hostSess);

  
  render() {
  return (
    <div className="App">
      <nav className="navbar">
        <a href="/" id="site-title">Movie App</a>
        <nav className="navlinks">
          <a href="/" className="link" id="home">Home</a>
          <a href="/" className="link" id="instructions">Instructions</a>
          <a href="/" className="link" id="feedback">Give feedback</a>
        </nav>
      </nav>
      <div className="body">
        <div className="body-text">
          <h1>The. Syntax. Choice.</h1>
          <h2>All your movie commitment issues solved!</h2>
        </div>
        <div className="body-button">
          <button id="host-session" type="submit" onClick={this.hostSess}>Host Session</button>
          {this.state.hosting && <HostingDialogue />}
          <button id="join-session" type="submit" onClick={this.joinSess}>Join Session</button>
          {this.state.joining && <JoiningDialogue />}
        </div>
      </div>
    </div>
  );

  }

}

export default App;
