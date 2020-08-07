import React from 'react';
import {Container} from 'react-bootstrap'
import './MovieView.css'


class MovieView extends React.Component {

    constructor(props) {
        super(props);            
    }

   
    render() {

       const movies = this.props.movies;

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
                <Container className="movies">
                    {contentToRender}  
                </Container>                           
            </div>
        );
    }
}

export default MovieView;