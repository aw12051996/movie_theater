import React, { Component } from "react";
// css
import "./App.css";
// router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// component
import { Container } from "reactstrap";

// components
import Header from "./components/Header";
// pages
import Home from "./pages/Home";
import Genre from "./pages/Genre";
import Cinemas from "./pages/Cinemas";
import DetailMovie from "./pages/DetailMovie";
import Order from "./pages/Order";

class App extends Component {
  render() {
    return (
      <Container fluid={true} className="p-0 bg-light">
        <Router>
          <Header />
          <Container className="bg-white p-2 mt-2 mb-2">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/genre/:id" component={Genre} />
              <Route exact path="/cinemas" component={Cinemas} />
              <Route exact path="/detail/:id" component={DetailMovie} />
              <Route exact path="/order/:id" component={Order} />
            </Switch>
          </Container>
        </Router>
      </Container>
    );
  }
}

export default App;
