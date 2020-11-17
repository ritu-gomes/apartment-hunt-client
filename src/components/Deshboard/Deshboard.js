import React from 'react';
import './Deshboard.scss';
import logo from '../../../src/images/logos/Logo.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BookingList from './BookingList/BookingList';
import MyBooking from './MyBooking/MyBooking';
import AddBooking from './AddBooking/AddBooking';

const Deshboard = () => {
    return (
        <Router>
            <div className='deshboard-section container'>

<div className="row">
    <div className="col-2 ">
        <div className="text-center">   
            <div className="logo d-inline-block ">
                <Link to="/"><img className="  img-fluid" src={logo} alt="logo"/></Link>
            </div>
        </div>

        <div className="options">
            <ul>
                <li className='list-unstyled'> <Link to="/bookingList"  >Booking List</Link> </li>
                <li className='list-unstyled'> <Link to="/addBooking"  > Add Rent House</Link></li>
                <li className='list-unstyled'> <Link to="/myBooking"  > My Rent</Link></li>
            </ul>
        </div>
    </div>

    <div className="col-md-10  pt-5  details">
            
                <Switch>
                    <Route path="/bookingList">
                        <BookingList/>
                    </Route>
                    <Route path="/myBooking">
                        <MyBooking />
                    </Route>
                    <Route path="/addBooking">
                        <AddBooking />
                    </Route>
                    <Route path="/deshboard">
                        <BookingList />
                    </Route>
                </Switch>
        </div>

</div>
</div>
        </Router>
    );
};

export default Deshboard;