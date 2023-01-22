import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Loader from "components/Loader/Loader";

const Home = lazy(() => import("pages/Home/Home"));
const MovieDetails = lazy(() => import("pages//MovieDetails/MovieDetails"));
const Movies = lazy(() => import("pages/Movies/Movies"));
const NotFound = lazy(() => import("pages/NotFound/NotFound"));

export const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};