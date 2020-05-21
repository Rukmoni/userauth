import React, { useContext }  from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts'
import { UserContext } from "./providers/UserProvider";
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';

export default function Routes() {
    const user=useContext(UserContext);
    console.log("user:"+user);
  return (
     user?
     <Profile/>:
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"
              layout={MainLayout}>Home</Link>
            </li>
            <li>
              <Link to="/signup"
              layout={MainLayout}>SignUp</Link>
            </li>
            <li>
              <Link to="/signin">SignIn</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <RouteWithLayout  component={SignUp}
        layout={MainLayout}
        path="/signup"/>
          <Route path="/signin">
            <SignIn/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
    return <h2>Home</h2>;
  }