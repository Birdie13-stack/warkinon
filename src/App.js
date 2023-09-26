import "./App.css";
import Header from "./Components/Header.js";
import Main1 from "./Components/Main1";
import Main2 from "./Components/Main2";
import Portfolio from "./Components/Portfolio";
import Testimonial from "./Components/Testimonial";
import PreFooter from "./Components/PreFooter";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main1 />
      <Main2 />
      <Portfolio />
      <Testimonial />
      <PreFooter />
      <Footer />
    </div>
  );
}

export default App;
