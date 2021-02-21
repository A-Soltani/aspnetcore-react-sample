import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/layout/footer/footer";
import Header from "./components/layout/header/header";
import Main from "./components/layout/main/main";

function App() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
