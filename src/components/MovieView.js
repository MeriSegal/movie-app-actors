import React from 'react';
import {Container} from 'react-bootstrap'
import './MovieView.css'

import axios from 'axios';
import MovieModel from '../data-model/MovieModel';
import { withRouter } from "react-router-dom";

class MovieView extends React.Component {

    constructor(props) {
        super(props);  
        this.state = {           
            searchResults: []
        }          
    }


    componentDidMount(){
        const {id} = this.props.match.params;

        const URL = "https://api.themoviedb.org/3/person/"+id+"/movie_credits?api_key=28a7c5537dd0465aeb8929133b235f3c&language=en-US";
        
        axios.get(URL).then(response => {
          this.setState({
            searchResults: response.data.cast.map(result => new MovieModel(result.title, result.character, result.release_date, result.overview, result.popularity, result.poster_path))

          }) 
  
        })  
    }
   
    render() {
       const {name} = this.props.match.params;
       const movies = this.state.searchResults;

       const contentToRender = movies.sort((a,b)=>a.popularity>b.popularity? -1 : 1).slice(0, 3).map((movie, index) => 
                          
            <div Key={index} className="card float-right">
                <div className="row">
                    <div className="col-sm-5">
                    <img className="d-block w-100" src={movie.posterPath} alt="poster"/>
                    </div>
                    <div className="col-sm-7">
                        <div className="card-block">
                            <br/>
                            <h4 className="card-title">{movie.title}</h4>
                            <p>Character: <b>{movie.character}</b> </p>
                            <p>TMDB popularity: <b>{movie.popularity}</b></p>
                            <p>Release Date: {movie.releaseDate}</p>
                            <p>{movie.overview}</p>
                            <br/>
                        </div>
                    </div>                        
                </div> 
            </div>
            
           
        );

        return (            
            <div className="wrap">
                <br/>
                <h1>{name}</h1>
                <br/>
                <Container className="movies">
                    {contentToRender}  
                </Container>                           
            </div>
        );
    }
}

export default withRouter(MovieView);