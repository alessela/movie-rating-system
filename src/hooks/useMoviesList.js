import useGetList from "./useGetList";

const useMoviesList = () => {
    return useGetList('https://api.themoviedb.org/3/discover/movie')
}

export default useMoviesList;