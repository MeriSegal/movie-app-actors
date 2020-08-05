import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ActorView from './components/ActorView';
import ActorModel from './data-model/ActorModel';
import axios from 'axios';

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
          actors: response.data.map(plainActor => new ActorModel(plainActor.firstName, plainActor.lastName, plainActor.birthday, plainActor.imageUrl, plainActor.imdbLink))
        })
      })
  
    }
   
  render() {   
    return (
      <div>
        <ActorView actor ={this.state.actors}/>
      </div>
      );
    }
}

export default App;
