import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import React from "react";
import Unit from "./components/units/Unit";
import Home from "./components/ui/Home";
import About from "./components/ui/About";
import Nav from "./components/ui/Nav";
import Hero from "./components/ui/Hero";
import Content from "./components/ui/Content";
import UnitGrid from "./components/units/UnitGrid";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Nav />
        {/* <Hero /> */}
        {/* <div className="center"> */}
        {/* <Header /> */}
        {/* <Content /> */}
        {/* <UnitGrid /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/unit-:serial" component={Unit} />
        </Switch>
        {/* </div> */}
      </Router>
    </React.Fragment>
  );
};

export default App;
