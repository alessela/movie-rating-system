/**
 * @class
 */
class Movie { 
    /**
     * @param {Array<{id: number, name: string}>} genres 
     */
    constructor(title, poster_path, release_date, genres, 
                original_title, overview, vote_average, vote_count){

        this.title = title
        this.poster_path = poster_path
        this.release_date = release_date

        /**
         * @type {Array<{id: number, name: string}>}
         */
        this.genres = genres

        this.original_title = original_title
        this.overview = overview
        this.vote_average = vote_average
        this.vote_count = vote_count
    }
}

export default Movie;