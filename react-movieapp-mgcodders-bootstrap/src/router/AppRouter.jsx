import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import MovieDetail from "../pages/MovieDetail";
import Movies from "../pages/Movies";

const AppRouter = () => {
  return (
    // <BrowserRouter>
    //   <NavBar />
    //   <Routes>
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/" element={<Main />} />
    //     <Route path="/movie-detail" element={<PrivateRouter />}>
    //       <Route path="" element={<MovieDetail />} />
    //     </Route>

    //     <Route path="*" element={<Navigate to="/" />} />
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="movies" element={<PrivateRouter />}>
          <Route path="" element={<Movies />} />
          <Route path=":id" element={<MovieDetail />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
