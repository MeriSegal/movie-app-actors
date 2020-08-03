import React from 'react';
import {Container} from 'react-bootstrap'

class ActorView extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        let contentToRender;
       
        contentToRender= <div>
            <h1> {this.props.actor[0].findAge()} </h1>
        </div>

        return (
            <Container>
                {contentToRender}
            </Container>        
        );
    }
}

export default ActorView;