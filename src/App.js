import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ActorView from './components/ActorView';
import ActorModel from './data-model/ActorModel';

function App() {

  const actorData =[];
  actorData.push(new ActorModel("Jennifer","Garner","1972-17-04","https://m.media-amazon.com/images/M/MV5BNTA4MDgzMTc1Nl5BMl5BanBnXkFtZTcwNjQyMjIwNQ@@._V1_SY1000_CR0,0,766,1000_AL_.jpg",
  "https://www.imdb.com/name/nm0004950",""));
  actorData.push(new ActorModel("Jennifer","Garner","1972-17-04","https://m.media-amazon.com/images/M/MV5BNTA4MDgzMTc1Nl5BMl5BanBnXkFtZTcwNjQyMjIwNQ@@._V1_SY1000_CR0,0,766,1000_AL_.jpg",
  "https://www.imdb.com/name/nm0004950",""));
  actorData.push(new ActorModel("Jennifer","Garner","1972-17-04","https://m.media-amazon.com/images/M/MV5BNTA4MDgzMTc1Nl5BMl5BanBnXkFtZTcwNjQyMjIwNQ@@._V1_SY1000_CR0,0,766,1000_AL_.jpg",
  "https://www.imdb.com/name/nm0004950",""));

  return (
    <div>
      <ActorView actor ={actorData}/>
    </div>
  );
}

export default App;
