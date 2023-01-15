import { NavLink, Route, Routes } from "react-router-dom";

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
          <Route></Route>
          <Route></Route>
        </Routes>
      </div>
    </div>
  );
};
