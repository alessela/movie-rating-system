import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import SearchResults from "../pages/SearchResults/SearchResults";
import MovieDetailsPage from "../pages/MovieDetails/MovieDetails";
import TVShowDetails from "../pages/TVShowDetails/TVShowDetails";
import AuthRedirect from "../pages/AuthRedirect/AuthRedirect";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/movie" element={<HomePage type="movie"/>}/>
                <Route path="/movie/search" element={<SearchResults type="movie"/>} />
                <Route path="/movie/:id" element={<MovieDetailsPage />} />
                <Route path="/tv" element={<HomePage type="tv"/>}/>
                <Route path="/tv/search" element={<SearchResults type="tv"/>} />
                <Route path="/tv/:id" element={<TVShowDetails />} />
                <Route path="/auth" element={<AuthRedirect />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;