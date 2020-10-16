import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ApplyJob from "./components/Applyjob";
import Image from "react-image-resizer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login.components";
import SignUp from "./components/signup.components";
import AppBar from "./components/AppBar";
import Logout from "./components/Logout";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/sign-in"
            render={(props) => (
              <div>
                <AppBar />
                <Login />
              </div>
            )}
          />
          <Route
            exact
            path="/sign-up"
            render={(props) => (
              <div>
                <AppBar />
                <SignUp />
              </div>
            )}
          />
          <Route
            exact
            path="/"
            render={(props) => (
              <div>
                <AppBar />
                <Login />
              </div>
            )}
          />
          <Route
            exact
            path="/Applyjob"
            render={(props) => (
              <div>
                <Logout />
                <ApplyJob {...props} />
              </div>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
