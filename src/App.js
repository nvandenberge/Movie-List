import "./App.css";
import LoginSignup from "./Components/LoginSignupPage/LoginSignupPage";
// import MoviePage from "./Components/MoviePage";
import Store from "./Store/Store";

function App() {
  return (
    <Store>
      <div className="App">
        {/* <MoviePage /> */}
        <LoginSignup />
      </div>
    </Store>
  );
}

export default App;
