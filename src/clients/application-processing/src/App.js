import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/layout/footer/footer";
import Header from "./components/layout/header/header";
import Main from "./components/layout/main/main";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
