import { Component, useEffect } from 'react';
import './App.css';

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
      <h1>Movie app</h1>
      <h3>All your movie commitment issues solved!</h3>
      <button id="host-session" type="submit" onClick={this.hostSess}>Host Session</button>
      {this.state.hosting && <HostingDialogue />}
      <button id="join-session" type="submit" onClick={this.joinSess}>Join Session</button>
      {this.state.joining && <JoiningDialogue />}

    </div>
  );

  }

}

export default App;
