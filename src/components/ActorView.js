import React from 'react';
import {Container} from 'react-bootstrap'

class ActorView extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        let contentToRender;
       
        contentToRender= this.props.actor.map( actor =>

            <div class="col-xl-4">
                <div class="card">
                    <img class="card-img-top" src={actor.imageUrl} alt="Card image"/>
                    <div class="card-body">
                        <a target="void" href={actor.imdbLink}> <h4 class="card-title">{actor.firstName} {actor.lastName}</h4> </a>
                        <p class="card-text">Birthday: {actor.birthday} (age:{actor.findAge()}) </p>
                        <a target="void" href={actor.imdbLink} class="btn btn-primary">See IMDB Profile</a>
                    </div>
                </div>
            </div> ); 

        return (
            <Container>
                <div class="row">
                    {contentToRender}
                </div>
            </Container>        
        );
    }
}

export default ActorView;