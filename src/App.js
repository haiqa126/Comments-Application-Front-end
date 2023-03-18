import "./App.css";
import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Feedback from "./Components/Feedback";
import Signin from "./Components/Signin";
import About from "./Components/About";
import Routes from "./routes";

function App() {
  return >
    <>
      <div className="App">
        <Router>
          <Header></Header>
          <div className="container">
          <Routes>
              <Route path="/" element={<Signin />} />
              <Route path="/about" element={<About />} />
          </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
