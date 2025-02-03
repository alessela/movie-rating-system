import { BrowserRouter, Route, Routes } from "react-router-dom";
import DiscoverPage from "../pages/DiscoverPage/DiscoverPage";
import SearchResults from "../pages/SearchResults/SearchResults";
import MovieDetailsPage from "../pages/MovieDetails/MovieDetails";
import TVShowDetails from "../pages/TVShowDetails/TVShowDetails";
import AuthRedirect from "../pages/AuthRedirect/AuthRedirect";
import LoginPage from "../pages/LoginPage/LoginPage";
import HomePage from "../pages/HomePage/HomePage";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/movie" element={<DiscoverPage type="movie"/>}/>
                <Route path="/movie/favorites" element={<FavoritesPage type="movie" />} />
                <Route path="/movie/search" element={<SearchResults type="movie"/>} />
                <Route path="/movie/:id" element={<MovieDetailsPage type="movie" />} />
                <Route path="/tv" element={<DiscoverPage type="tv"/>}/>
                <Route path="/tv/favorites" element={<FavoritesPage type="tv" />} />
                <Route path="/tv/search" element={<SearchResults type="tv"/>} />
                <Route path="/tv/:id" element={<TVShowDetails type="movie" />} />
                <Route path="/auth" element={<AuthRedirect />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;