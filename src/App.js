import "./App.css";
import NavBar from "./Components/NavBar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="container">
        <Body></Body>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default App;
