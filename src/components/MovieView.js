import React from 'react';
import {Container} from 'react-bootstrap'

class MovieView extends React.Component {

    constructor(props) {
        super(props);            
    }

   
    render() {

       const movies = this.props.movies;

       const contentToRender = movies.sort((a,b)=>a.popularity>b.popularity? -1 : 1).map((movie, index) => 
            <div Key={index}>
                <h3>{movie.title}</h3>
                <p>{movie.character}</p>
                <p>{movie.popularity}</p>
            </div>
           
        );

        return (            
            <div>
                {contentToRender}               
            </div>
        );
    }
}

export default MovieView;