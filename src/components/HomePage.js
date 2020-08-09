import React from 'react';
import { Jumbotron } from 'react-bootstrap';

class HomePage extends React.Component {

    constructor(props) {
        super(props);            
    }

   
    render() {

        return (   
            <div>
                <Jumbotron className="home">
                    <h1>Actress Gallery</h1>
                    <p> Fine actresses and their best movies!! </p>           
                </Jumbotron>
            </div>         
        
        );
    }
}

export default HomePage;