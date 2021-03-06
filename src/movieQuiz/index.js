import React from 'react';

class MovieQuiz extends React.Component { 

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
                    <div className="forms">
                        <h2 className="form-q">For each row, choose the movie that you would like to watch the most.</h2>
                        <div className="question">
                            <form className="form-content">
                                <div className="option">
                                    <input type="radio" id="harry-potter" name="q1" value="harry-potter"/>
                                    <label for="harry-potter">Harry Potter</label>
                                </div>
                                <div className="option">
                                    <input type="radio" id="edge-of-tomorrow" name="q1" value="edge-of-tomorrow"/>
                                    <label for="edge-of-tomorrow">Edge of Tomorrow</label>
                                </div>
                                <div className="option">
                                    <input type="radio" id="mission-impossible" name="q1" value="mission-impossible"/>
                                    <label for="mission-impossible">Mission Impossible</label>
                                </div>
                            </form>
                        </div>
                        <div className="question">
                        <form className="form-content">
                                <div className="option">
                                    <input type="radio" id="harry-potter" name="q2" value="harry-potter"/>
                                    <label for="harry-potter">Harry Potter</label>
                                </div>
                                <div className="option">
                                    <input type="radio" id="edge-of-tomorrow" name="q2" value="edge-of-tomorrow"/>
                                    <label for="edge-of-tomorrow">Edge of Tomorrow</label>
                                </div>
                                <div className="option">
                                    <input type="radio" id="mission-impossible" name="q2" value="mission-impossible"/>
                                    <label for="mission-impossible">Mission Impossible</label>
                                </div>
                            </form>
                        </div>
                        <div className="question">
                        <form className="form-content">
                                <div className="option">
                                    <input type="radio" id="harry-potter" name="q3" value="harry-potter"/>
                                    <label for="harry-potter">Harry Potter</label>
                                </div>
                                <div className="option">
                                    <input type="radio" id="edge-of-tomorrow" name="q3" value="edge-of-tomorrow"/>
                                    <label for="edge-of-tomorrow">Edge of Tomorrow</label>
                                </div>
                                <div className="option">
                                    <input type="radio" id="mission-impossible" name="q3" value="mission-impossible"/>
                                    <label for="mission-impossible">Mission Impossible</label>
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