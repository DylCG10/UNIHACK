import { Component, useEffect } from 'react';
import './App.css';
import io from 'socket.io-client';

// import './App.css';

import './styling/styles.css'
import { removeTypeDuplicates } from '@babel/types';



// function Session() {
//   function HostingDialogue() {
  
//     console.log("a user connected");
//     return (
//       <h1>Hosting</h1>
//     )
//   }
  
//   function JoiningDialogue() {
//     return (
//       <h1>Joining</h1>
//     )
//   }


// }

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

    // socket.on('new-remote-operations',
    //   ({ editorId, ops }: { editorId: string; ops: string }) => {
    //     if (id.current !== editorId) {
    //       re
    //     }
    //   }
      
    // }))
  }
  
  submit = () => {
    console.log('submit');

    // socket.on('new-remote-operations',
    //   ({ editorId, ops }: { editorId: string; ops: string }) => {
    //     if (id.current !== editorId) {
    //       re
    //     }
    //   }
      
    // }))
  }

  joinSess = () => {
    console.log("joining session..");
    
    this.setState({ hosting: false, joining: true})


  }

  hostSess = () => {
    console.log("hosting session...");
    this.setState({ hosting: true, joining: false })
    
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
          <div className="hosting">
            <button id="host-session" type="submit" onClick={this.hostSess}>Host Session</button>
            {this.state.hosting &&
                <div>
                <h1>Hosting</h1>
                <button>Cancel</button>
                <button type="submit" onClick={this.submit}>Submit</button>
              </div>
            }
          </div>
          <div className="joining">
          <button id="join-session" type="submit" onClick={this.joinSess}>Join Session</button>
            {this.state.joining && 
              <div>
                <h1>Joining</h1>
              <button type="submit" >Cancel</button>
                <button onClick={this.submit}>Submit</button>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );

  }

}

export default App;
