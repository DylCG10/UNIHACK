import React from 'react';
import hp from '../movieList/movieImages/harry-potter.jpg'
import eot from '../movieList/movieImages/edge-of-tomorrow.jpg'
import mi from '../movieList/movieImages/mission-impossible.jpg'

class MovieQuiz extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            moviesSelected: []
        }

        this.handleSelection = this.handleSelection.bind(this);
    }

    async handleChange(event){
        await this.setState({ moviesSelected: [...this.state.moviesSelected, event.target.value] })
        console.log(this.state.moviesSelected);
    }


    handleSelection(event){
        console.log(event.target.value);

        this.setState({ moviesSelected: [...this.state.moviesSelected, event.target.value] })
        console.log(this.state.moviesSelected);

    }

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
                            {/* <form className="form-content"> */}
                            <form onSubmit={this.handleSubmit}>

                                <div className="option opt1">
                                    <label className="container" for="harry-potter">
                                        <input type="radio" id="harry-potter" name="q1" value="harry-potter" onChange={this.handleSelection}/>
                                        <img class="image" src={hp} alt="harry potter"/>
                                    </label>
                                    <p className="descriptions">Harry Potter</p>
                                </div>
                                <div className="option opt2">
                                    <label className="container" for="edge-of-tomorrow">
                                        <input type="radio" id="edge-of-tomorrow" name="q1" value="edge-of-tomorrow" onChange={this.handleSelection}/>
                                        <img class="image" src={eot} alt="edge of tomorrow"/>
                                    </label>
                                    <p className="descriptions">Edge of Tomorrow</p>
                                </div>
                                <div className="option opt3">
                                    <label className="container" for="mission-impossible">
                                        <input type="radio" id="mission-impossible" name="q1" value="mission-impossible" onChange={this.handleSelection}/>
                                        <img class="image" src={mi} alt="mission impossible"/>
                                    </label>
                                    <p className="descriptions">Mission Impossible</p>
                                    </div>
                                </form>
                                
                            <form onSubmit={this.handleSubmit}>

                                <div className="option opt1">
                                    <label className="container" for="harry-potter">
                                        <input type="radio" id="harry-potter" name="q1" value="harry-potter" onChange={this.handleSelection}/>
                                        <img class="image" src={hp} alt="harry potter"/>
                                    </label>
                                    <p className="descriptions">Harry Potter</p>
                                </div>
                                <div className="option opt2">
                                    <label className="container" for="edge-of-tomorrow">
                                        <input type="radio" id="edge-of-tomorrow" name="q1" value="edge-of-tomorrow" onChange={this.handleSelection}/>
                                        <img class="image" src={eot} alt="edge of tomorrow"/>
                                    </label>
                                    <p className="descriptions">Edge of Tomorrow</p>
                                </div>
                                <div className="option opt3">
                                    <label className="container" for="mission-impossible">
                                        <input type="radio" id="mission-impossible" name="q1" value="mission-impossible" onChange={this.handleSelection}/>
                                        <img class="image" src={mi} alt="mission impossible"/>
                                    </label>
                                    <p className="descriptions">Mission Impossible</p>
                                    </div>
                                </form>

                            {/* </form> */}
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}

export default MovieQuiz;