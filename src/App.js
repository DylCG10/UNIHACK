// import './App.css';

import './styling/styles.css'

function App() {
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
        <h1>The. Syntax. Choice.</h1>
        <h2>All your movie commitment issues solved!</h2>

      </div>
    </div>
  );
}

export default App;
