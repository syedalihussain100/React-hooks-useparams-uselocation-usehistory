import React from "react";
import Navbar from "./Navbar";
import Info from "./Info";
import About from "./About";
import Services from "./Services";
import Myprofile from "./Myprofile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Info}>
          <Navbar />
          <Info/>
          </Route>
          <Route path="/about" component={About}>
            <Navbar />
            <About />
          </Route>
          <Route path="/services" component={Services}>
            <Navbar />
            <Services />
          </Route>
          <Route path="/myprofile/:name" component={Myprofile}>
            <Navbar />
            <Myprofile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
