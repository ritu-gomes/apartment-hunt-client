
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Login from "../pages/Auth/Login/Login";
import Booking from "../pages/Booking/BookingDetails/BookingDetails";
import Home from "../pages/Home/Home";

export const userContext = createContext();

const Routes = () => {
    const [user,setUser] = useState({
        name:"",
        email: "",
        isLoggedIn: false,
        error: ""
    });
    return (
        <userContext.Provider value={[user,setUser]}>
            <Router>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/booking" component={Booking} />
                    <Route exact path="/" component={Home} />;
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        </userContext.Provider>
    );
};

export default Routes;
