/**
 * @class
 */
class TVShow {
    /**
     * @param {Array<{id: number, name: string}>} genres 
     */
    constructor(name, poster_path, first_air_date, last_air_date,
        genres, original_name, vote_average, vote_count
    ) {
        this.name = name
        this.poster_path = poster_path
        this.first_air_date = first_air_date
        this.last_air_date = last_air_date
        /**
         * @type {Array<{id: number, name: string}>}
         */
        this.genres = genres
        this.original_name = original_name
        this.vote_average = vote_average
        this.vote_count = vote_count
    }
}

export default TVShow;