import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ActorView from './components/ActorView';
import ActorModel from './data-model/ActorModel';

function App() {

  const actorData =[];
  actorData.push(new ActorModel("Jennifer","Garner","1972-04-17","https://m.media-amazon.com/images/M/MV5BNTA4MDgzMTc1Nl5BMl5BanBnXkFtZTcwNjQyMjIwNQ@@._V1_SY1000_CR0,0,766,1000_AL_.jpg",
  "https://www.imdb.com/name/nm0004950",""));
  actorData.push(new ActorModel("Whoopi ","Goldberg","1955-11-13","https://m.media-amazon.com/images/M/MV5BMjE4ODgzNjQwOV5BMl5BanBnXkFtZTYwNzczNzc0._V1_.jpg",
  "https://www.imdb.com/name/nm0000155",""));
  actorData.push(new ActorModel("Jennifer","Lawrence ","1990-08-15","https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_SY1000_CR0,0,626,1000_AL_.jpg",
  "https://www.imdb.com/name/nm2225369",""));
  actorData.push(new ActorModel("Samira ","Wiley ","1987-04-15","https://m.media-amazon.com/images/M/MV5BMTk4NTY4NDczMV5BMl5BanBnXkFtZTgwNzI5MjA3NzE@._V1_.jpg",
  "https://www.imdb.com/name/nm4148126",""));
  actorData.push(new ActorModel("Maisie ","Williams ","1997-04-15","https://m.media-amazon.com/images/M/MV5BMTkwNDQ3MjY1NV5BMl5BanBnXkFtZTcwMjQzMzEzOQ@@._V1_SY1000_CR0,0,779,1000_AL_.jpg",
  "https://www.imdb.com/name/nm3586035",""));
  actorData.push(new ActorModel("Gal","Gadot ","1985-04-30","https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_.jpg",
  "https://www.imdb.com/name/nm2933757",""));

  return (
    <div>
      <ActorView actor ={actorData}/>
    </div>
  );
}

export default App;
