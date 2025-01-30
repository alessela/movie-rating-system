import useGetList from "./useGetList";

const useTVShowsList = () => {    
    return useGetList('https://api.themoviedb.org/3/discover/tv')
}

export default useTVShowsList;