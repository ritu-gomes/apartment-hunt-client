import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Deshboard from "../Deshboard/Deshboard";
import NotFound from "../NotFound/NotFound";
import Login from "../pages/Auth/Login/Login";

import BookingDetails from "../pages/Booking/BookingDetails/BookingDetails";
<<<<<<< HEAD
import Header from "../pages/Header/Header";
=======

>>>>>>> 7703e1e110009e9276dcde90f1312eefe4aa6007
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
                <Header></Header>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/booking/:rentID" component={BookingDetails} />
                    <Route exact path="/" component={Home} />;
                    <Route path="/deshboard" component={Deshboard} />
                    
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        </userContext.Provider>
    );
};

export default Routes;
