import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ActorView from './components/ActorView';
import ActorModel from './data-model/ActorModel';
import MovieView from './components/MovieView';

import axios from 'axios';
import {HashRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            actors: []
        }
    }  

    componentDidMount() {

      axios.get("actors.json").then(response => {
        this.setState({
          actors: response.data.map(plainActor => new ActorModel(plainActor.id, plainActor.firstName, plainActor.lastName, plainActor.birthday, plainActor.imageUrl, plainActor.imdbLink))
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
            </Route> 
            <Route exact path="/actors/:id/:name/movies">
              <MovieView/>  
            </Route>     
          </Switch>
        </HashRouter>
      </div>     
      
      );
    }
}

export default App;
