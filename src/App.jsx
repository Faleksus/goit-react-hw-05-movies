import HomePage from "pages/HomePage/HomePage";
import PostDetails from "pages/PostDetails/PostDetails";
import SearchPage from "pages/SearchPage/SearchPage";
import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
// import {getTrendingMovies, getSearchMovies, getMovieDetails, getMovieCredits, getMovieReviews} from "./services/api";

export const App = () => {
  return (
    <div>
      <Header/>
      <div>
        <Routes>
          {/* console.log(`{getTrendingMovies()}`); */}
          {/* console.log(`{getSearchMovies('dog gone')}`); */}
          {/* console.log(`{getMovieDetails(858408)}`); */}
          {/* console.log(`{getMovieCredits(858408)}`); */}
          {/* console.log(`{getMovieReviews(436270)}`); */}


          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/search' element={<SearchPage/>}></Route>
          <Route path='/posts/:postId' element={<PostDetails/>}></Route>
        </Routes>
      </div>
    </div>
  );
};
