import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieBio from "./components/MovieBio";
import Home from "./components/Home";
import Header from "./components/Header";
import Animation from "./components/Animation";
import Search from "./components/Search";

function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
     <Routes>
      <Route path="/:field/:id" element={<MovieBio />} />
      <Route path="/search" element={<Search />} />
      <Route path="/" element={<Home />} />
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
