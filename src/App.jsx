import HomePage from "pages/HomePage/HomePage";
import PostDetails from "pages/PostDetails/PostDetails";
import SearchPage from "pages/SearchPage/SearchPage";
import { NavLink, Route, Routes } from "react-router-dom";
import {getTrendingMovies, getSearchMovies, getMovieDetails} from "./services/api";

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" className="NavLink">
            Home
          </NavLink>
          <NavLink to="/search" className="NavLink">
            Search
          </NavLink>
        </nav>
      </header>
      <div>
        <Routes>
          console.log(`{getTrendingMovies()}`);
          console.log(`{getSearchMovies('dog gone')}`);
          console.log(`{getMovieDetails(858408)}`);


          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/search' element={<SearchPage/>}></Route>
          <Route path='/posts/:postId' element={<PostDetails/>}></Route>
        </Routes>
      </div>
    </div>
  );
};
