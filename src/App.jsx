import Home from "pages/Home/Home";
import MovieDetails from "pages//MovieDetails/MovieDetails";
import Movies from "pages/Movies/Movies";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import NotFound from "pages/NotFound/NotFound";
import Footer from "components/Footer/Footer";
// import {getTrendingMovies, getSearchMovies, getMovieDetails, getMovieCredits, getMovieReviews} from "./services/api";

export const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          {/* console.log(`{getTrendingMovies()}`);
          console.log(`{getSearchMovies('dog gone')}`);
          console.log(`{getMovieDetails(858408)}`);
          console.log(`{getMovieCredits(858408)}`);
          console.log(`{getMovieReviews(436270)}`); */}

          {/* <Route exact path="/" element={<Home/>} />
          <Route exact path="/movies" element={<Movies/>} />
          <Route exact path="/movies/:movieId" element={<MovieDetails/>} />
          <Route exact path="/movies/:movieId/cast" element={<Cast/>} />
          <Route exact path="/movies/:movieId/reviews" element={<Reviews/>} /> */}

          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
};
