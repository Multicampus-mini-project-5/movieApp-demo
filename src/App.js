import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import A from "./routes/A";
import Tv from "./routes/Tv";
import Celebrity from "./routes/Celebrity";
import NotFound from "./routes/NotFound";
import Header from "./components/Header";
import Login from "./routes/Login";


function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie" element={<A/>}/>
          <Route path="/tv" element={<Tv/>}/>
          <Route path="/person" element={<Celebrity/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
