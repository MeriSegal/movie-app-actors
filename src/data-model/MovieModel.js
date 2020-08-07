import moment from 'moment';

class MovieModel{
    constructor(title, character, releaseDate, overview, popularity, posterPath ){
        this.title = title;
        this.character = character;
        this.releaseDate = releaseDate;
        this.overview = overview;
        this.popularity = popularity;
        this.posterPath = posterPath;
    }


}


export default MovieModel;