import React from 'react';
import hp from '../movieList/movieImages/harry-potter.jpg'
import eot from '../movieList/movieImages/edge-of-tomorrow.jpg'
import mi from '../movieList/movieImages/mission-impossible.jpg'
import jaws from '../movieList/movieImages/jaws.jpg'
import para from '../movieList/movieImages/parasite.jpg'
import mart from '../movieList/movieImages/the-martian.jpg'
import mat from '../movieList/movieImages/the-matrix.jpg'
import tmr from '../movieList/movieImages/tomorrowland.jpg'
import obl from '../movieList/movieImages/oblivion.jpg'
import jw from '../movieList/movieImages/jurassic-world.jpg'
import stellar from '../movieList/movieImages/interstellar.jpg'
import et from '../movieList/movieImages/et.jpg'
import arch from '../movieList/movieImages/architecture-101.jpg'
import wander from '../movieList/movieImages/the-wandering-earth.jpg'
import ex from '../movieList/movieImages/exit.jpg'

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
                <div className="body moviequiz-body">
                    <h2 className="form-q">From each row, choose the movie that you would like to watch the most.</h2>
                    <form id="moviequiz" onSubmit={this.handleSubmit}>
                        <div className="form-container">
                            <div className="question q1">
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
                                <div className="option opt4">
                                    <label className="container" for="jaws">
                                        <input type="radio" id="jaws" name="q1" value="jaws" onChange={this.handleSelection}/>
                                        <img class="image" src={jaws} alt="jaws"/>
                                    </label>
                                    <p className="descriptions">Jaws</p>
                                </div>
                                <div className="option opt5">
                                    <label className="container" for="parasite">
                                        <input type="radio" id="parasite" name="q1" value="parasite" onChange={this.handleSelection}/>
                                        <img class="image" src={para} alt="parasite"/>
                                    </label>
                                    <p className="descriptions">Parasite</p>
                                </div>
                            </div>
                            <div className="question q2">
                                <div className="option opt1">
                                    <label className="container" for="the-matrix">
                                        <input type="radio" id="the-matrix" name="q2" value="the-matrix" onChange={this.handleSelection}/>
                                        <img class="image" src={mat} alt="the matrix"/>
                                    </label>
                                    <p className="descriptions">The Matrix</p>
                                </div>
                                <div className="option opt2">
                                    <label className="container" for="the-wandering-earth">
                                        <input type="radio" id="the-wandering-earth" name="q2" value="the-wandering-earth" onChange={this.handleSelection}/>
                                        <img class="image" src={wander} alt="the wandering earth"/>
                                    </label>
                                    <p className="descriptions">The Wandering Earth</p>
                                </div>
                                <div className="option opt3">
                                    <label className="container" for="architecture-101">
                                        <input type="radio" id="architecture-101" name="q2" value="architecture-101" onChange={this.handleSelection}/>
                                        <img class="image" src={arch} alt="architecture 101"/>
                                    </label>
                                    <p className="descriptions">Architecture 101</p>
                                </div>
                                <div className="option opt4">
                                    <label className="container" for="interstellar">
                                        <input type="radio" id="interstellar" name="q2" value="interstellar" onChange={this.handleSelection}/>
                                        <img class="image" src={stellar} alt="interstellar"/>
                                    </label>
                                    <p className="descriptions">Interstellar</p>
                                </div>
                                <div className="option opt5">
                                    <label className="container" for="the-martian">
                                        <input type="radio" id="the-martian" name="q2" value="the-martian" onChange={this.handleSelection}/>
                                        <img class="image" src={mart} alt="the-martian"/>
                                    </label>
                                    <p className="descriptions">The Martian</p>
                                </div>
                            </div>
                            <div className="question q3">
                                <div className="option opt1">
                                    <label className="container" for="et">
                                        <input type="radio" id="et" name="q3" value="et" onChange={this.handleSelection}/>
                                        <img class="image" src={et} alt="et"/>
                                    </label>
                                    <p className="descriptions">The ET</p>
                                </div>
                                <div className="option opt2">
                                    <label className="container" for="jurassic-world">
                                        <input type="radio" id="jurassic-world" name="q3" value="jurassic-world" onChange={this.handleSelection}/>
                                        <img class="image" src={jw} alt="jurassic-world"/>
                                    </label>
                                    <p className="descriptions">Jurassic World</p>
                                </div>
                                <div className="option opt3">
                                    <label className="container" for="exit">
                                        <input type="radio" id="exit" name="q3" value="exit" onChange={this.handleSelection}/>
                                        <img class="image" src={ex} alt="exit"/>
                                    </label>
                                    <p className="descriptions">Exit</p>
                                </div>
                                <div className="option opt4">
                                    <label className="container" for="oblivion">
                                        <input type="radio" id="oblivion" name="q3" value="oblivion" onChange={this.handleSelection}/>
                                        <img class="image" src={obl} alt="oblivion"/>
                                    </label>
                                    <p className="descriptions">Oblivion</p>
                                </div>
                                <div className="option opt5">
                                    <label className="container" for="tomorrowland">
                                        <input type="radio" id="tomorrowland" name="q3" value="tomorrowland" onChange={this.handleSelection}/>
                                        <img class="image" src={tmr} alt="tomorrowland"/>
                                    </label>
                                    <p className="descriptions">Mission Impossible</p>
                                </div>
                            </div>
                            <button className="submit" type="submit">Submit</button>
                        </div>
                    </form>
                </div> 
            </div>
        )
    }
}

export default MovieQuiz;