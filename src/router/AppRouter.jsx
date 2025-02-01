import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import SearchResults from "../pages/SearchResults/SearchResults";
import MovieDetailsPage from "../pages/MovieDetails/MovieDetails";
import TVShowDetails from "../pages/TVShowDetails/TVShowDetails";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/search" element={<SearchResults />} />
                <Route path="/movie/:id" element={<MovieDetailsPage />} />
                <Route path="/tv/:id" element={<TVShowDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;