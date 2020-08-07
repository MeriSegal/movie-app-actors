import React from 'react';
import {Container} from 'react-bootstrap'

class ActorView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            id: 0   
        }
    }

    updateName = (event) =>{
        this.setState({
          name: event.target.value
        });
    }

    topMovie = (event) =>{
        this.setState({
            id: event.target.value.split(',')[0],
            name: event.target.value.split(',')[1]
        });
        this.props.searchId(event.target.value.split(',')[0]);
    }

    render() {

        const actor = this.props.actor;

        const contentToRender= actor.filter(actor => (actor.firstName+" "+actor.lastName).toLowerCase().includes((this.state.name).toLowerCase())).map(filterActor =>
            <div key={filterActor.imdbLink} className="col-xl-4">
                <div className="card">
                    <img className="card-img-top" src={filterActor.imageUrl} alt={filterActor.firstName}/>
                    <div className="card-body">
                        <a target="void" href={filterActor.imdbLink}> <h4 className="card-title">{filterActor.firstName} {filterActor.lastName}</h4> </a>
                        <p className="card-text">Birthday: {filterActor.birthday} (age:{filterActor.findAge()}) </p>
                        <button className="btn btn-primary" onClick={this.topMovie} value={filterActor.id+","+filterActor.firstName+" "+filterActor.lastName}>See Top TMDB movie</button>
                    </div>
                </div>
            </div>); 

        return (
            <div className="wrap">
                <input type="text" id="name" placeholder="Enter a name" onChange={this.updateName} value={this.state.name}/>

                <Container>
                    <div className="row">
                        {contentToRender}
                    </div>
                </Container> 
            </div>
               
        );
    }
}

export default ActorView;