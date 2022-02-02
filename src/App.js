import "./App.css";
import MoviePage from "./Components/MoviePage";
import Store from "./Store/Store";

function App() {
  return (
    <Store>
      <div className="App">
        <MoviePage />
      </div>
    </Store>
  );
}

export default App;
