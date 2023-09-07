import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import { Switch, Route } from "react-router-dom";
import "./styles/style.css"

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact>
         <Homepage />
      </Route>
      <Route path="/about" exact>
         <Aboutpage />
      </Route>
       
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
