import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Login from "../pages/Auth/Login/Login";
import Home from "../pages/Home/Home";

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route exact path="/" component={Home} />;
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        </div>
    );
};

export default Routes;
