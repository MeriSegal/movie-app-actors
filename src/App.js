import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ActorView from './components/ActorView';
import ActorModel from './data-model/ActorModel';
import MovieView from './components/MovieView';
import MovieModel from './data-model/MovieModel';

import axios from 'axios';
import {HashRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            actors: [],
            searchResults: []
        }
    }  

    componentDidMount() {

      axios.get("actors.json").then(response => {
        this.setState({
          actors: response.data.map(plainActor => new ActorModel(plainActor.id, plainActor.firstName, plainActor.lastName, plainActor.birthday, plainActor.imageUrl, plainActor.imdbLink))
        })
      })
  
    }

    searchActorMovie = (actorId) =>{
      const URL = "https://api.themoviedb.org/3/person/"+actorId+"/movie_credits?api_key=28a7c5537dd0465aeb8929133b235f3c&language=en-US";
      
      axios.get(URL).then(response => {
        this.setState({
            searchResults: response.data.cast.map(result => new MovieModel(result.title, result.character, result.release_date, result.overview, result.popularity, result.poster_path))
        }) 

      })

    }

    
  render() {    

    return (
      <div>
        <NavBar/>
        <HashRouter>
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route exact path="/actors">
              <ActorView actor = {this.state.actors} searchId = {this.searchActorMovie}/>
              <MovieView movies = {this.state.searchResults} />  
            </Route>   
          </Switch>
        </HashRouter>
      </div>     
      
      );
    }
}

export default App;
