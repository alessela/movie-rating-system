class Movie {
    constructor(id, title, poster_path, release_date, genres, 
                original_title, overview, vote_average, vote_count){
        this.id = id
        this.title = title
        this.poster_path = poster_path
        this.release_date = release_date
        this.genres = genres
        this.original_title = original_title
        this.overview = overview
        this.vote_average = vote_average
        this.vote_count = vote_count
    }
}

export default Movie;