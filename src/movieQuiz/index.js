import React from 'react';
import hp from '../movieList/movieImages/harry-potter.jpg'
import eot from '../movieList/movieImages/edge-of-tomorrow.jpg'
import mi from '../movieList/movieImages/mission-impossible.jpg'

class MovieQuiz extends React.Component { 

    render() {
        return (
            <div className="App">
                <div className="nav-container">
                    <nav className="navbar">
                        <a href="/" id="site-title">Movie App</a>
                        <nav className="navlinks">
                        <a href="/" className="link" id="home">Home</a>
                        <a href="/" className="link" id="instructions">Instructions</a>
                        <a href="/" className="link" id="feedback">Give feedback</a>
                        </nav>
                    </nav>
                </div>
                <div className="body">
                    <div className="forms">
                        <h2 className="form-q">Choose the movie that you would like to watch the most.</h2>
                        <div className="question">
                            <form className="form-content">
                                <div className="option opt1">
                                    <label for="harry-potter"><img src={hp} alt="harry potter"/>
                                        <input type="radio" id="harry-potter" name="q1" value="harry-potter"/>
                                    </label>
                                    <p className="descriptions">Harry Potter</p>
                                </div>
                                <div className="option opt2">
                                    <label for="edge-of-tomorrow"><img src={eot} alt="edge of tomorrow"/>
                                        <input type="radio" id="edge-of-tomorrow" name="q1" value="edge-of-tomorrow"/>
                                    </label>
                                    <p className="descriptions">Edge of Tomorrow</p>
                                </div>
                                <div className="option opt3">
                                    <label for="mission-impossible"><img src={mi} alt="mission impossible"/>
                                        <input type="radio" id="mission-impossible" name="q1" value="mission-impossible"/>
                                    </label>
                                    <p className="descriptions">Mission Impossible</p>
                                </div>
                            </form>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}

export default MovieQuiz;