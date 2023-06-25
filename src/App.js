import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import Tv from "./routes/Tv";
import NotFound from "./routes/NotFound";
import Login from "./routes/Login";
import Movie from "./routes/Movie";
import MovieDetail from "./routes/MovieDetail";


function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie" element={<Movie/>}/>
          <Route path="/movie/:title" element={<MovieDetail/>}/>
          <Route path="/tv" element={<Tv/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
