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
import Dashboard from "./pages/dashboard/Dashboard";

export default function Routes() {
    const user=useContext(UserContext);
    console.log("user:"+user);
  return (
     user?
     <Dashboard/>:
    <Router>
      <div>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
         
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/signin">
            <SignIn/>
          </Route>
          <Route exact path="/">
          <SignIn/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
    return <h2>Home</h2>;
  }