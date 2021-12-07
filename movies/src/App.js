import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Container } from "@material-ui/core";
import Header from "./Components/Header";
import Trending from "./Pages/Trending";
import Movies from "./Pages/Movies";
import Search from "./Pages/Search";
import Series from "./Pages/Series";
import SimpleBottomNavigation from "./Components/MainNav";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Routes>
            <Route path="/trending" element={<Trending />} exact />
            <Route path="/movies" element={<Movies />} />
            <Route path="/search" element={<Search />} />
            <Route path="/series" element={<Series />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
