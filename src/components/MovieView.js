import React from 'react';
import {Container} from 'react-bootstrap'

class MovieView extends React.Component {

    constructor(props) {
        super(props);            
    }

   
    render() {

       const movies = this.props.movies;

       const contentToRender = movies.map((movie, index) => 
            <div Key={index}>
                <h1>{movie.title}</h1>
                <p>{movie.character}</p>
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